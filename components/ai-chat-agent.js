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
} from '@chakra-ui/react';
import { ChatIcon, ArrowUpIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown';
// Removed direct Gemini import - using API route instead

const AI_CHAT_AGENT = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Jonah's AI assistant. I can answer questions about his projects, skills, experience, and background. What would you like to know?",
      sender: 'ai'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);


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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error generating response:', error);
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
    } catch (error) {
      setError(error.message);
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
        text: "Hi! I'm Jonah's AI assistant. I can answer questions about his projects, skills, experience, and background. What would you like to know?",
        sender: 'ai'
      }
    ]);
    setError('');
  };

  return (
    <Box
      position="fixed"
      bottom={{ base: "10px", md: "20px" }}
      right={{ base: "10px", md: "20px" }}
      zIndex="1000"
      maxW={{ base: "90vw", md: "400px" }}
      w="100%"
    >
      {/* AI Chat Button */}
      {!isOpen && (
        <Box
          position="absolute"
          bottom="0"
          right="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="60px"
          h="60px"
          cursor="pointer"
          onClick={onToggle}
          flexShrink={0}
          overflow="hidden"
          borderRadius="50%"
          backgroundSize="300% 300%"
          backdropFilter="blur(1rem)"
          transition="0.5s"
          animation="gradient_301 5s ease infinite"
          border="double 3px transparent"
          backgroundImage="linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%)"
          backgroundOrigin="border-box"
          backgroundClip="content-box, border-box"
          sx={{
            '&:hover': {
              transform: 'scale(1.1)',
              '& .container-stars': {
                zIndex: 1,
                backgroundColor: '#212121',
              },
            },
            '&:active': {
              border: 'double 3px #fe53bb',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              animation: 'none',
              '& .glow-circle': {
                background: '#fe53bb',
              },
            },
            '@keyframes gradient_301': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
            '@keyframes animStar': {
              'from': { transform: 'translateY(0)' },
              'to': { transform: 'translateY(-135rem)' },
            },
            '@keyframes animStarRotate': {
              'from': { transform: 'rotate(360deg)' },
              'to': { transform: 'rotate(0)' },
            },
            '@keyframes pulse_3011': {
              '0%': { transform: 'scale(0.75)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)' },
              '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
              '100%': { transform: 'scale(0.75)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' },
            },
          }}
        >
          {/* Container Stars */}
          <Box
            className="container-stars"
            position="absolute"
            zIndex="-1"
            width="100%"
            height="100%"
            overflow="hidden"
            transition="0.5s"
            backdropFilter="blur(1rem)"
            borderRadius="50%"
          >
            <Box
              position="relative"
              background="transparent"
              width="200rem"
              height="200rem"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-10rem',
                  left: '-100rem',
                  width: '100%',
                  height: '100%',
                  animation: 'animStarRotate 90s linear infinite',
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1%)',
                  backgroundSize: '50px 50px',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-50%',
                  width: '170%',
                  height: '500%',
                  animation: 'animStar 60s linear infinite',
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1%)',
                  backgroundSize: '50px 50px',
                  opacity: 0.5,
                },
              }}
            />
          </Box>

          {/* Glow Effect */}
          <Box
            position="absolute"
            display="flex"
            width="48px"
            height="24px"
            sx={{
              '& .glow-circle': {
                width: '100%',
                height: '24px',
                filter: 'blur(2rem)',
                animation: 'pulse_3011 4s infinite',
                zIndex: '-1',
              },
              '& .glow-circle:nth-of-type(1)': {
                background: 'rgba(254, 83, 186, 0.636)',
              },
              '& .glow-circle:nth-of-type(2)': {
                background: 'rgba(142, 81, 234, 0.704)',
              },
            }}
          >
            <Box className="glow-circle" />
            <Box className="glow-circle" />
          </Box>

          {/* Chat Icon */}
          <Box
            position="relative"
            zIndex="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
          >
            <ChatIcon 
              color="white" 
              boxSize={6}
              filter="drop-shadow(0 0 4px white)"
            />
          </Box>
        </Box>
      )}

      {/* Chat Window */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          w={{ base: "90vw", md: "350px" }}
          h={{ base: "70vh", md: "400px" }}
          maxH={{ base: "500px", md: "400px" }}
          borderRadius="12px"
          overflow="hidden"
          position="relative"
          background="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 20%, rgba(254, 83, 186, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(142, 81, 234, 0.1) 0%, transparent 50%)',
              zIndex: 0,
            },
          }}
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
            borderColor="rgba(255, 255, 255, 0.1)"
            background="rgba(0, 0, 0, 0.2)"
          >
            <HStack spacing={3}>
              <Box
                w="8px"
                h="8px"
                borderRadius="50%"
                background="linear-gradient(45deg, #ffdb3b, #fe53bb)"
                animation="pulse 2s ease-in-out infinite"
              />
              <Text color="white" fontSize="sm" fontWeight="bold" letterSpacing="1px">
                AI CHAT
              </Text>
              <Badge
                size="sm"
                bg="rgba(34, 197, 94, 0.2)"
                color="green.300"
                border="1px solid"
                borderColor="rgba(34, 197, 94, 0.3)"
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
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      w="12px"
                      h="2px"
                      bg="gray.400"
                      borderRadius="1px"
                    />
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      w="2px"
                      h="12px"
                      bg="gray.400"
                      borderRadius="1px"
                    />
                  </Box>
                }
                size="sm"
                variant="ghost"
                color="gray.400"
                onClick={clearChat}
                _hover={{ 
                  color: "orange.300", 
                  bg: "rgba(255, 165, 0, 0.1)",
                  transform: "scale(1.1)"
                }}
                transition="all 0.2s ease"
                title="Clear conversation"
              />
              <IconButton
                aria-label="Close chat"
                icon={
                  <Box position="relative" w="16px" h="16px">
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%) rotate(45deg)"
                      w="16px"
                      h="2px"
                      bg="gray.400"
                      borderRadius="1px"
                    />
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%) rotate(-45deg)"
                      w="16px"
                      h="2px"
                      bg="gray.400"
                      borderRadius="1px"
                    />
                  </Box>
                }
                size="sm"
                variant="ghost"
                color="gray.400"
                onClick={onToggle}
                _hover={{ 
                  color: "red.300", 
                  bg: "rgba(255, 0, 0, 0.1)",
                  transform: "scale(1.1)"
                }}
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
            maxH={{ base: "calc(70vh - 120px)", md: "280px" }}
            overflowY="auto"
            px={3}
            py={2}
            sx={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(45deg, #ffdb3b, #fe53bb)',
                borderRadius: '2px',
              },
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
                      ...(message.sender === 'user' ? {
                        background: 'linear-gradient(135deg, #fe53bb 0%, #8f51ea 100%)',
                        color: 'white',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-8px',
                          right: '10px',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderTop: '8px solid #8f51ea',
                        },
                      } : {
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
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
                              <Text 
                                as="span" 
                                bg="rgba(255, 255, 255, 0.1)" 
                                px={1} 
                                py={0.5} 
                                borderRadius="4px" 
                                fontFamily="mono" 
                                fontSize="xs"
                                color="inherit"
                              >
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
                              <Box 
                                borderLeft="3px solid" 
                                borderColor="rgba(255, 255, 255, 0.3)" 
                                pl={3} 
                                my={2} 
                                fontStyle="italic"
                              >
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
                          minute: '2-digit' 
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
                    background="rgba(255, 255, 255, 0.1)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    position="relative"
                    sx={{
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
                    }}
                  >
                    <HStack spacing={2}>
                      <Spinner size="sm" color="white" />
                      <Text fontSize="sm" color="white">
                        Thinking...
                      </Text>
                    </HStack>
                  </Box>
                </Box>
              )}
              
              <div ref={messagesEndRef} />
            </VStack>
          </Box>

          {/* Error Message */}
          {error && (
            <Box position="relative" zIndex={1} p={3}>
              <Alert status="error" borderRadius="md" bg="rgba(255, 0, 0, 0.1)" border="1px solid rgba(255, 0, 0, 0.3)">
                <AlertIcon color="red.400" />
                <Text fontSize="sm" color="red.400">{error}</Text>
              </Alert>
            </Box>
          )}

          {/* Input Area */}
          <Box
            position="relative"
            zIndex={1}
            p={3}
            borderTop="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            background="rgba(0, 0, 0, 0.2)"
          >
            <HStack
              spacing={2}
              p={2}
              borderRadius="8px"
              background="rgba(255, 255, 255, 0.05)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.1)"
              _focusWithin={{
                borderColor: "rgba(254, 83, 186, 0.5)",
                boxShadow: "0 0 0 1px rgba(254, 83, 186, 0.2)",
              }}
            >
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Jonah's projects, skills, or experience..."
                size="sm"
                disabled={isLoading}
                border="none"
                background="transparent"
                color="white"
                _placeholder={{ color: "gray.400" }}
                _focus={{ boxShadow: "none" }}
                flex="1"
              />
              <IconButton
                aria-label="Send message"
                icon={<ArrowUpIcon />}
                size="sm"
                borderRadius="6px"
                background="linear-gradient(135deg, #fe53bb 0%, #8f51ea 100%)"
                color="white"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                isLoading={isLoading}
                _hover={{
                  background: "linear-gradient(135deg, #ff6b9d 0%, #9d5ae8 100%)",
                  transform: "scale(1.05)",
                }}
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
