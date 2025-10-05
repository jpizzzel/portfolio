# AI Chat Agent Setup Instructions

## Overview
I've implemented an AI chat agent that appears as a floating chat button in the bottom-right corner of your portfolio. Users can click it to ask questions about your projects, skills, experience, and background. The agent uses Google Gemini as the LLM and includes content filtering to ensure appropriate responses.

## Features
- **Floating Chat Interface**: Appears in bottom-right corner with smooth animations
- **Google Gemini Integration**: Uses Google's Gemini Pro model for intelligent responses
- **Content Filtering**: Only answers questions about your professional background
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode Support**: Adapts to your portfolio's theme
- **Real-time Chat**: Instant responses with loading indicators
- **Chat History**: Maintains conversation context during the session

## Setup Instructions

### 1. Get Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables
Create a `.env.local` file in your project root:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

**Important**: Make sure `.env.local` is in your `.gitignore` file to keep your API key secure.

### 3. Test the Implementation
1. Run `npm run dev` to start your development server
2. Navigate to your portfolio
3. Look for the blue chat icon in the bottom-right corner
4. Click it to open the chat interface
5. Try asking questions like:
   - "What projects has Jonah worked on?"
   - "Tell me about Jonah's AI experience"
   - "What programming languages does Jonah know?"

## Files Created/Modified

### New Files:
- `components/ai-chat-agent.js` - Main chat component
- `pages/api/chat.js` - API route for Gemini integration

### Modified Files:
- `pages/_app.js` - Added AI chat agent to global layout
- `package.json` - Added @google/generative-ai dependency

## Content Filtering
The AI agent is programmed to:
- ✅ Answer questions about your professional background, projects, and skills
- ✅ Provide information about your education and work experience
- ✅ Share details about your technical projects and technologies used
- ❌ NOT share personal contact information beyond what's publicly available
- ❌ NOT speculate about personal life, relationships, or private matters
- ❌ NOT provide financial information or salary details

## Customization
You can customize the AI agent by modifying:
- **Context Information**: Update the `jonahContext` in `pages/api/chat.js`
- **Styling**: Modify the Chakra UI components in `components/ai-chat-agent.js`
- **Filtering Rules**: Adjust the filtering instructions in the API route
- **Position**: Change the `position="fixed"` and `bottom/right` values

## Troubleshooting
- **API Key Issues**: Make sure your Gemini API key is correctly set in `.env.local`
- **CORS Errors**: The API route should handle CORS automatically
- **Styling Issues**: Check that Chakra UI is properly configured
- **Chat Not Appearing**: Verify the component is imported and rendered in `_app.js`

## Security Notes
- API key is stored server-side only (in `.env.local`)
- Client-side code makes requests to your API route, not directly to Gemini
- Content filtering prevents inappropriate responses
- No user data is stored or logged
