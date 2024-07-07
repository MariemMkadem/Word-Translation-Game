# Word Translation Game

## Description

This project is a word translation game application built with a React (Vite and TypeScript) frontend and a Node.js (Express and MongoDB) backend. The application allows users to play a word translation game, save their scores, and view a leaderboard.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB

## Installation

### 1. Backend

###### 1. Clone this repository:

  

     git clone https://github.com/MariemMkadem/Word-Translation-Game.git
      cd backend
###### 2 . Install dependencies:

`npm install`

###### 3 . Create a .env file at the root of the backend directory:

.env


    PORT=5000
    MYMEMORY_API_URL=https://api.mymemory.translated.net/get
    MONGODB_URI=mongodb://localhost:27017/wordGame
###### 5 . Start the server in development mode:


`npm run dev
`
The server will start on http://localhost:5000.


##### Backend Endpoints
`GET /api/word
`

**Description**:
Retrieves a random French word for translation along with a hint.

*Response:
*

`{
  "word": "bonjour",
  "firstLetter": "b",
  "length": 7,
  "translation": "hello"
}`


------------


`POST /api/score
`

**Description**: 

Saves a player's score.
Request Body: 

``{
  "playerName": "JohnDoe",
  "points": 15
}``

`Response:
{
  "message": "Score saved successfully"
}`

------------


`GET /api/leaderboard
`

**Description**: 

Retrieves the leaderboard of scores.
Response:
`[
  {
    "playerName": "JohnDoe",
    "points": 20,
    "date": "2023-07-06T12:00:00Z"
  },
  {
    "playerName": "JaneDoe",
    "points": 18,
    "date": "2023-07-06T12:05:00Z"
  }
]`


------------


### 2 . Frontend
###### 1 . Navigate to the frontend directory:

`cd ../frontend
`

###### 2 .Install dependencies:

`npm install
`
###### 3. Create a .env file at the root of the frontend directory and add your backend API URL:

`VITE_API_URL=http://localhost:5000/api
`
###### 4 .Start the application in development mode:

`npm run dev
`
The application will start on http://localhost:5173

##### Technologies Used


    Node.js
    Express
    MongoDB
    Mongoose
    TypeScript
    React
    Vite
    TypeScript
    React Router
    SCSS

##### Features
Play a word translation game
Save and display player scores
View a leaderboard of top scores


##### Running Frontend and Backend Concurrently
To run both the frontend and backend concurrently, use the following scripts in the root directory:
```json
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd backend && npm run dev",
  "client": "cd frontend && npm run dev"
}
```

###### 1 . Add the concurrently package if it's not already installed:


`npm install concurrently
`
###### Use the start script to run both frontend and backend:


`npm start
`
This will start the backend server on http://localhost:5000 and the frontend on http://localhost:5173


#### Technical Choices
###### React with Vite:
Chosen for its fast development experience and improved build times compared to Create React App

###### TypeScript:
Ensures type safety and helps in catching errors early in the development process

###### Node.js and Express: 
Provides a robust backend framework for building APIs

###### MongoDB with Mongoose: 
Offers a flexible, schema-less database solution suitable for the dynamic data used in this application

#### Improvements
###### Error Handling: 
Enhance error handling in the backend and frontend to provide better user feedback.
###### Unit Tests:
Add unit tests for both frontend and backend to ensure code reliability

###### Styling:

Improve the UI/UX of the application with better styling and responsiveness
###### Additional Features: 

Implement features like difficulty levels, multiplayer support, and game analytics

###### Time Taken
The total time taken to build this application was during the weekend


