# Backend API Solution for Gemini AI Integration

## Current Issue
The frontend direct API call to Google Gemini is failing with 403 error due to:
- CORS restrictions
- API key security concerns
- Browser security policies

## Recommended Solution: Express.js Backend

### 1. Install Dependencies
```bash
npm install express cors dotenv
```

### 2. Create Backend Server (server.js)
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate-itinerary', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Backend server running on port 3001');
});
```

### 3. Environment File (.env)
```
GEMINI_API_KEY=AIzaSyCf9M3wBdmhbOzo6bvUEgnyh4VFoq1da0Y
```

### 4. Update Frontend API Call
```javascript
const response = await fetch('http://localhost:3001/api/generate-itinerary', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt })
});
```

## Current Temporary Solution
Using a mock itinerary generator that:
- Takes user input
- Creates personalized content based on preferences
- Simulates AI response with realistic delay
- Provides fully functional UI experience

## Next Steps
1. Implement the Express.js backend
2. Test API key with proper server-side calls
3. Replace mock implementation with real AI integration
4. Add proper error handling and rate limiting