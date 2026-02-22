import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Input,
  VStack,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
  Badge,
  Spinner,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChatIcon, ArrowUpIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown';

const AI_CHAT_AGENT = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I'm Jonah's portfolio assistant. I can help you explore his projects, work experience, education, and skills. Try asking about a specific project, role, or technology you see on this site.",
      sender: 'ai'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const cardBg = useColorModeValue('white', '#0a0a0a');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const headerBg = useColorModeValue('gray.50', 'rgba(0, 0, 0, 0.7)');
  const headerText = useColorModeValue('gray.800', 'whiteAlpha.900');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const userBubbleBorder = useColorModeValue('brand.400', 'brand.300');
  const aiBubbleBorder = useColorModeValue('gray.200', 'whiteAlpha.200');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = async (userMessage) => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response from server');

      const data = await response.json();
      return data.response;
    } catch (err) {
      console.error('Error generating response:', err);
      throw new Error('Failed to generate response. Please try again.');
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(userMessage.text);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi, I'm Jonah's portfolio assistant. I can help you explore his projects, work experience, education, and skills. Try asking about a specific project, role, or technology you see on this site.",
        sender: 'ai'
      }
    ]);
    setError('');
  };

  return (
    <Box
      position="fixed"
      bottom={{ base: '10px', md: '20px' }}
      right={{ base: '10px', md: '20px' }}
      zIndex="1000"
      maxW={{ base: '90vw', md: '400px' }}
      w="100%"
    >
      {/* Chat Toggle Button */}
      {!isOpen && (
        <IconButton
          aria-label="Open Jonah's assistant"
          icon={<ChatIcon />}
          onClick={onToggle}
          position="absolute"
          bottom="0"
          right="0"
          w="56px"
          h="56px"
          borderRadius="full"
          color="white"
          bg="brand.400"
          boxShadow="0 10px 25px rgba(0, 181, 216, 0.3)"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 14px 30px rgba(0, 181, 216, 0.4)',
            bg: 'brand.500',
          }}
          _active={{
            transform: 'translateY(0)',
          }}
          transition="all 0.2s ease"
        />
      )}

      {/* Chat Window */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          w={{ base: '90vw', md: '350px' }}
          h={{ base: '70vh', md: '400px' }}
          maxH={{ base: '500px', md: '400px' }}
          borderRadius="xl"
          overflow="hidden"
          position="relative"
          bg={cardBg}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="0 16px 32px rgba(0, 0, 0, 0.2)"
        >
          {/* Header */}
          <Box
            position="relative"
            zIndex={1}
            w="100%"
            h="50px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            borderBottom="1px solid"
            borderColor={borderColor}
            background={headerBg}
          >
            <HStack spacing={3}>
              <Box w="8px" h="8px" borderRadius="50%" bg="green.400" />
              <Text color={headerText} fontSize="sm" fontWeight="bold" letterSpacing="0.08em">
                JONAH&apos;S ASSISTANT
              </Text>
              <Badge
                size="sm"
                bg="green.50"
                color="green.700"
                _dark={{ bg: 'green.900', color: 'green.200' }}
                borderWidth="1px"
                borderColor="green.300"
                borderRadius="full"
                px={2}
                py={1}
              >
                Online
              </Badge>
            </HStack>
            <HStack spacing={2}>
              <IconButton
                aria-label="Clear conversation"
                icon={
                  <Box position="relative" w="16px" h="16px">
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="12px" h="2px" bg="gray.400" borderRadius="1px" />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="2px" h="12px" bg="gray.400" borderRadius="1px" />
                  </Box>
                }
                size="sm"
                variant="ghost"
                color="gray.400"
                onClick={clearChat}
                _hover={{ color: 'brand.300', bg: 'rgba(0, 181, 216, 0.1)', transform: 'scale(1.1)' }}
                transition="all 0.2s ease"
                title="Clear conversation"
              />
              <IconButton
                aria-label="Close chat"
                icon={
                  <Box position="relative" w="16px" h="16px">
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%) rotate(45deg)" w="16px" h="2px" bg="gray.400" borderRadius="1px" />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%) rotate(-45deg)" w="16px" h="2px" bg="gray.400" borderRadius="1px" />
                  </Box>
                }
                size="sm"
                variant="ghost"
                color="gray.400"
                onClick={onToggle}
                _hover={{ color: 'red.300', bg: 'rgba(255, 0, 0, 0.1)', transform: 'scale(1.1)' }}
                transition="all 0.2s ease"
                title="Close chat"
              />
            </HStack>
          </Box>

          {/* Messages Area */}
          <Box
            position="relative"
            zIndex={1}
            flex="1"
            maxH={{ base: 'calc(70vh - 120px)', md: '280px' }}
            overflowY="auto"
            px={3}
            py={2}
            sx={{
              '&::-webkit-scrollbar': { width: '4px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'var(--chakra-colors-brand-400)', borderRadius: '2px' },
            }}
          >
            <VStack spacing={3} align="stretch">
              {messages.map((message) => (
                <Box
                  key={message.id}
                  alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                  maxW="85%"
                >
                  <Box
                    p={3}
                    borderRadius="12px"
                    position="relative"
                    sx={{
                      ...(message.sender === 'user'
                        ? {
                            background: 'linear-gradient(135deg, #00B5D8 0%, #0097B2 100%)',
                            color: 'white',
                            border: '1px solid',
                            borderColor: userBubbleBorder,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              bottom: '-8px',
                              right: '10px',
                              width: 0,
                              height: 0,
                              borderLeft: '8px solid transparent',
                              borderTop: '8px solid #0097B2',
                            },
                          }
                        : {
                            background: 'rgba(0, 0, 0, 0.02)',
                            _dark: { background: 'rgba(255, 255, 255, 0.04)' },
                            color: headerText,
                            border: '1px solid',
                            borderColor: aiBubbleBorder,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              bottom: '-8px',
                              left: '10px',
                              width: 0,
                              height: 0,
                              borderRight: '8px solid transparent',
                              borderTop: '8px solid rgba(255, 255, 255, 0.1)',
                            },
                          }),
                    }}
                  >
                    <Text fontSize="sm" lineHeight="1.4">
                      {message.sender === 'ai' ? (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <Text as="span" display="block" mb={1}>{children}</Text>,
                            strong: ({ children }) => <Text as="span" fontWeight="bold" color="inherit">{children}</Text>,
                            em: ({ children }) => <Text as="span" fontStyle="italic" color="inherit">{children}</Text>,
                            code: ({ children }) => (
                              <Text as="span" bg="rgba(255, 255, 255, 0.1)" px={1} py={0.5} borderRadius="4px" fontFamily="mono" fontSize="xs" color="inherit">
                                {children}
                              </Text>
                            ),
                            ul: ({ children }) => <Box as="ul" pl={4} my={2}>{children}</Box>,
                            ol: ({ children }) => <Box as="ol" pl={4} my={2}>{children}</Box>,
                            li: ({ children }) => <Text as="li" mb={1}>{children}</Text>,
                            h1: ({ children }) => <Text as="h1" fontSize="md" fontWeight="bold" mb={2}>{children}</Text>,
                            h2: ({ children }) => <Text as="h2" fontSize="sm" fontWeight="bold" mb={1}>{children}</Text>,
                            h3: ({ children }) => <Text as="h3" fontSize="sm" fontWeight="bold" mb={1}>{children}</Text>,
                            blockquote: ({ children }) => (
                              <Box borderLeft="3px solid" borderColor="brand.400" pl={3} my={2} fontStyle="italic">
                                {children}
                              </Box>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      ) : (
                        message.text
                      )}
                    </Text>
                    {message.sender === 'user' && message.timestamp && (
                      <Text fontSize="xs" opacity={0.7} mt={1}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Text>
                    )}
                  </Box>
                </Box>
              ))}

              {isLoading && (
                <Box alignSelf="flex-start" maxW="85%">
                  <Box
                    p={3}
                    borderRadius="12px"
                    background="rgba(0, 0, 0, 0.02)"
                    _dark={{ background: 'rgba(255, 255, 255, 0.04)' }}
                    border="1px solid"
                    borderColor={aiBubbleBorder}
                  >
                    <HStack spacing={2}>
                      <Spinner size="sm" color="brand.400" />
                      <Text fontSize="sm" color={headerText}>
                        Thinking...
                      </Text>
                    </HStack>
                  </Box>
                </Box>
              )}

              <div ref={messagesEndRef} />
            </VStack>
          </Box>

          {/* Error */}
          {error && (
            <Box position="relative" zIndex={1} p={3}>
              <Alert status="error" borderRadius="md" bg="rgba(254, 178, 178, 0.16)" border="1px solid rgba(248, 113, 113, 0.6)">
                <AlertIcon />
                <Text fontSize="sm">{error}</Text>
              </Alert>
            </Box>
          )}

          {/* Input Area */}
          <Box
            position="relative"
            zIndex={1}
            p={3}
            borderTop="1px solid"
            borderColor={borderColor}
            background={headerBg}
          >
            <HStack
              spacing={2}
              p={2}
              borderRadius="8px"
              background={cardBg}
              border="1px solid"
              borderColor={borderColor}
              _focusWithin={{
                borderColor: 'brand.400',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
              }}
            >
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about a project, role, or skill..."
                size="sm"
                disabled={isLoading}
                border="none"
                background="transparent"
                color={headerText}
                _placeholder={{ color: mutedText }}
                _focus={{ boxShadow: 'none' }}
                flex="1"
              />
              <IconButton
                aria-label="Send message"
                icon={<ArrowUpIcon />}
                size="sm"
                borderRadius="6px"
                bg="brand.400"
                color="white"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                isLoading={isLoading}
                _hover={{ bg: 'brand.500', transform: 'scale(1.05)' }}
                transition="all 0.2s ease"
              />
            </HStack>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default AI_CHAT_AGENT;
