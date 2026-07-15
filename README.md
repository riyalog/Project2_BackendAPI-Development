# Music Streaming Website Backend API

## Overview
This project is the backend API for a Music Streaming Website developed using **Node.js** and **Express.js**. It provides RESTful API endpoints to manage song data and serves as the backend component of the music streaming application.

## Features
- Retrieve all songs using the **GET /songs** endpoint.
- Add new songs using the **POST /songs** endpoint.
- Handles JSON request and response data.
- Basic input validation for song details.
- Lightweight and easy-to-understand REST API structure.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- REST API

## API Endpoints

### GET /songs
Returns a list of all available songs.

### POST /songs
Adds a new song to the collection.

Example JSON Request:
```json
{
  "title": "Night Drive",
  "artist": "Unknown Artist"
}
```

## Project Structure
- `server.js` – Main server file
- `package.json` – Project configuration and dependencies
- `package-lock.json` – Dependency lock file

## Author
Developed as part of the **DecodeLabs Virtual Internship**.
