import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Input,
  VStack,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown';

/* ─── Animated bouncing dots for typing indicator ─── */
const TypingDots = () => (
  <HStack spacing="3px" px={1}>
    {[0, 1, 2].map(i => (
      <Box
        key={i}
        w="5px"
        h="5px"
        borderRadius="full"
        bg="brand.400"
        sx={{
          animation: `chatBounce 1.2s ease-in-out ${i * 0.15}s infinite`,
          '@keyframes chatBounce': {
            '0%, 60%, 100%': { transform: 'translateY(0)' },
            '30%': { transform: 'translateY(-4px)' },
          },
        }}
      />
    ))}
  </HStack>
);

/* ─── Small wave SVG in the header ─── */
const HeaderWave = () => (
  <svg width="18" height="8" viewBox="0 0 18 8" fill="none" style={{ display: 'inline-block' }}>
    <path
      d="M1 4 C3 1.5, 5 6.5, 9 4 S14 1.5, 17 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* ─── Suggestion chips ─── */
const suggestions = [
  'What projects has Jonah built?',
  'Tell me about his experience',
  'What tech does he use?',
];

const AI_CHAT_AGENT = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! I'm Jonah's portfolio assistant. Ask me about his projects, experience, or skills.",
      sender: 'ai',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* ─── Theme tokens ─── */
  const cardBg = useColorModeValue('#FFFFFF', '#1F1B16');
  const borderClr = useColorModeValue('#E8DCD0', '#3D352C');
  const headerBg = useColorModeValue('#FBF7F2', '#241F1A');
  const textPrimary = useColorModeValue('#2D2319', '#F0E8DE');
  const textMuted = useColorModeValue('#8B7D6B', '#A89882');
  const aiBubbleBg = useColorModeValue('#FBF7F2', 'rgba(255,255,255,0.04)');
  const shadow = useColorModeValue(
    '0 12px 40px rgba(45, 35, 25, 0.12)',
    '0 12px 40px rgba(0, 0, 0, 0.4)'
  );
  const inputBg = useColorModeValue('#FFFFFF', '#241F1A');
  const codeBlockBg = useColorModeValue('#F5EDE2', '#3D352C');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const generateResponse = async (userMessage) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });
    if (!response.ok) throw new Error('Failed to get response');
    const data = await response.json();
    return data.response;
  };

  const handleSend = async (text) => {
    const msg = (text || inputValue).trim();
    if (!msg || isLoading) return;

    setMessages(prev => [...prev, { id: Date.now(), text: msg, sender: 'user' }]);
    setInputValue('');
    setIsLoading(true);
    setError('');

    try {
      const aiResponse = await generateResponse(msg);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hey! I'm Jonah's portfolio assistant. Ask me about his projects, experience, or skills.",
        sender: 'ai',
      },
    ]);
    setError('');
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <Box
      position="fixed"
      bottom={{ base: '16px', md: '24px' }}
      right={{ base: '16px', md: '24px' }}
      zIndex="9999"
    >
      {/* ─── Toggle button ─── */}
      <Box
        as="button"
        aria-label="Open chat"
        onClick={() => setIsOpen(true)}
        w="52px"
        h="52px"
        borderRadius="16px"
        bg="brand.400"
        color="white"
        display={isOpen ? 'none' : 'flex'}
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 20px rgba(43, 122, 140, 0.3)"
        border="2px solid"
        borderColor="brand.300"
        transform="rotate(-2deg)"
        transition="all 0.2s ease"
        cursor="pointer"
        _hover={{
          transform: 'rotate(0deg) translateY(-2px)',
          boxShadow: '0 8px 28px rgba(43, 122, 140, 0.4)',
        }}
        _active={{ transform: 'rotate(0deg) scale(0.95)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 5.92 2 10.5c0 2.58 1.4 4.88 3.6 6.42-.2 1.8-1.1 3.38-1.1 3.38s2.9-.5 4.3-1.5c1 .27 2.08.2 3.2.2 5.52 0 10-3.92 10-8.5S17.52 2 12 2z"
            fill="currentColor"
          />
        </svg>
      </Box>

      {/* ─── Chat window ─── */}
      <Box
        w={{ base: '88vw', md: '360px' }}
        maxW="360px"
        h={{ base: '65vh', md: '460px' }}
        maxH="520px"
        borderRadius="16px"
        overflow="hidden"
        bg={cardBg}
        border="2px solid"
        borderColor={borderClr}
        boxShadow={shadow}
        display={isOpen ? 'flex' : 'none'}
        flexDirection="column"
      >
        {/* ─── Header ─── */}
        <Box
          px={4}
          py={3}
          borderBottom="1px solid"
          borderColor={borderClr}
          bg={headerBg}
          flexShrink={0}
        >
          <HStack justify="space-between" align="center">
            <HStack spacing={2}>
              <Box color="sunset.400">
                <HeaderWave />
              </Box>
              <Text
                fontFamily="var(--font-caveat), cursive"
                fontSize="17px"
                fontWeight="700"
                color={textPrimary}
                lineHeight="1"
              >
                Ask Jonah&apos;s AI
              </Text>
              <Box w="6px" h="6px" borderRadius="full" bg="pine.400" flexShrink={0} />
            </HStack>
            <HStack spacing={0}>
              <IconButton
                aria-label="Clear chat"
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1m1 0v7a1 1 0 01-1 1H5a1 1 0 01-1-1V4h6z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                size="xs"
                variant="ghost"
                color={textMuted}
                onClick={clearChat}
                _hover={{ color: 'sunset.400' }}
                title="Clear chat"
              />
              <IconButton
                aria-label="Close chat"
                icon={<CloseIcon w="8px" h="8px" />}
                size="xs"
                variant="ghost"
                color={textMuted}
                onClick={() => setIsOpen(false)}
                _hover={{ color: 'sunset.400' }}
                title="Close"
              />
            </HStack>
          </HStack>
        </Box>

        {/* ─── Messages ─── */}
        <Box
          flex="1"
          overflowY="auto"
          px={3}
          py={3}
          sx={{
            '&::-webkit-scrollbar': { width: '3px' },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              background: '#D4C4B0',
              borderRadius: '3px',
            },
          }}
        >
          <VStack spacing={3} align="stretch">
            {messages.map((message) => (
              <Box
                key={message.id}
                display="flex"
                justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
              >
                {message.sender === 'ai' && (
                  <Box
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg="brand.400"
                    mt="10px"
                    mr={2}
                    flexShrink={0}
                    opacity={0.7}
                  />
                )}
                <Box maxW="82%">
                  <Box
                    px={3}
                    py={2}
                    borderRadius={
                      message.sender === 'user'
                        ? '14px 14px 4px 14px'
                        : '14px 14px 14px 4px'
                    }
                    bg={message.sender === 'user' ? 'brand.400' : aiBubbleBg}
                    color={message.sender === 'user' ? 'white' : textPrimary}
                    border={message.sender === 'ai' ? '1px solid' : 'none'}
                    borderColor={borderClr}
                  >
                    <Text fontSize="13px" lineHeight="1.55">
                      {message.sender === 'ai' ? (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => (
                              <Text as="span" display="block" mb={1} fontSize="13px" lineHeight="1.55">
                                {children}
                              </Text>
                            ),
                            strong: ({ children }) => (
                              <Text as="span" fontWeight="600" color="inherit">
                                {children}
                              </Text>
                            ),
                            em: ({ children }) => (
                              <Text as="span" fontStyle="italic" color="inherit">
                                {children}
                              </Text>
                            ),
                            code: ({ children }) => (
                              <Text
                                as="span"
                                bg={codeBlockBg}
                                px={1}
                                py={0.5}
                                borderRadius="4px"
                                fontFamily="mono"
                                fontSize="12px"
                              >
                                {children}
                              </Text>
                            ),
                            ul: ({ children }) => (
                              <Box as="ul" pl={4} my={1.5} fontSize="13px">
                                {children}
                              </Box>
                            ),
                            ol: ({ children }) => (
                              <Box as="ol" pl={4} my={1.5} fontSize="13px">
                                {children}
                              </Box>
                            ),
                            li: ({ children }) => (
                              <Text as="li" mb={0.5} fontSize="13px">
                                {children}
                              </Text>
                            ),
                            h1: ({ children }) => (
                              <Text fontSize="14px" fontWeight="600" mb={1.5} mt={2}>
                                {children}
                              </Text>
                            ),
                            h2: ({ children }) => (
                              <Text fontSize="13px" fontWeight="600" mb={1} mt={1.5}>
                                {children}
                              </Text>
                            ),
                            h3: ({ children }) => (
                              <Text fontSize="13px" fontWeight="600" mb={1} mt={1}>
                                {children}
                              </Text>
                            ),
                            blockquote: ({ children }) => (
                              <Box
                                borderLeft="2px solid"
                                borderColor="brand.400"
                                pl={2.5}
                                my={1.5}
                                opacity={0.85}
                                fontStyle="italic"
                              >
                                {children}
                              </Box>
                            ),
                            a: ({ href, children }) => (
                              <Text
                                as="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="brand.400"
                                textDecoration="underline"
                                textDecorationStyle="wavy"
                                textUnderlineOffset="2px"
                                _hover={{ color: 'brand.300' }}
                              >
                                {children}
                              </Text>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      ) : (
                        message.text
                      )}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <Box display="flex" justifyContent="flex-start">
                <Box
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg="brand.400"
                  mt="10px"
                  mr={2}
                  flexShrink={0}
                  opacity={0.7}
                />
                <Box
                  px={3}
                  py={2.5}
                  borderRadius="14px 14px 14px 4px"
                  bg={aiBubbleBg}
                  border="1px solid"
                  borderColor={borderClr}
                >
                  <TypingDots />
                </Box>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </VStack>

          {/* Suggestion chips */}
          {showSuggestions && (
            <VStack spacing={1.5} mt={3} align="flex-start">
              {suggestions.map((s) => (
                <Box
                  key={s}
                  as="button"
                  onClick={() => handleSend(s)}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  border="1px dashed"
                  borderColor={borderClr}
                  fontSize="12px"
                  color={textMuted}
                  bg="transparent"
                  cursor="pointer"
                  transition="all 0.15s ease"
                  _hover={{
                    borderColor: 'brand.400',
                    color: 'brand.400',
                    borderStyle: 'solid',
                  }}
                  whiteSpace="nowrap"
                >
                  {s}
                </Box>
              ))}
            </VStack>
          )}
        </Box>

        {/* Error */}
        {error && (
          <Box px={3} pb={1} flexShrink={0}>
            <Text fontSize="12px" color="sunset.400" textAlign="center">
              {error}
            </Text>
          </Box>
        )}

        {/* ─── Input ─── */}
        <Box
          p={3}
          pt={2}
          borderTop="1px solid"
          borderColor={borderClr}
          bg={headerBg}
          flexShrink={0}
        >
          <HStack
            spacing={2}
            bg={inputBg}
            borderRadius="12px"
            border="1.5px solid"
            borderColor={borderClr}
            px={3}
            py={1}
            transition="all 0.15s ease"
            _focusWithin={{
              borderColor: 'brand.400',
            }}
          >
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask something..."
              size="sm"
              disabled={isLoading}
              border="none"
              bg="transparent"
              color={textPrimary}
              fontSize="13px"
              _placeholder={{ color: textMuted, fontSize: '13px' }}
              _focus={{ boxShadow: 'none' }}
              _disabled={{ opacity: 0.6 }}
              px={0}
              flex="1"
            />
            <IconButton
              aria-label="Send"
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14 2L7 9M14 2l-4.5 12-2-5.5L2 6.5 14 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              size="xs"
              w="28px"
              h="28px"
              minW="28px"
              borderRadius="8px"
              bg={inputValue.trim() ? 'brand.400' : 'transparent'}
              color={inputValue.trim() ? 'white' : textMuted}
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isLoading}
              _hover={inputValue.trim() ? { bg: 'brand.500' } : {}}
              transition="all 0.15s ease"
            />
          </HStack>
          <Text
            fontSize="10px"
            color={textMuted}
            textAlign="center"
            mt={1.5}
            opacity={0.6}
          >
            Powered by AI &middot; may not always be accurate
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AI_CHAT_AGENT;
