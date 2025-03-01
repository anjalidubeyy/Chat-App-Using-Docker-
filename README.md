# Dockerized Chat Application (Socket.io + Express)

## Overview
This project demonstrates how to containerize a simple **real-time chat application** using **Node.js, Express, and Socket.io**. By encapsulating the application in a Docker container, we ensure consistency across environments, simplify deployment, and eliminate dependency conflicts.

## Prerequisites
- Docker installed on your system
- Node.js (16 or later)
- npm (Node Package Manager)

## Project Structure
```
.
├── public/             # Static frontend files
│   ├── index.html      # Frontend UI
├── server.js           # Express & Socket.io server
├── package.json        # Dependencies
├── .env                # Environment variables
├── Dockerfile          # Docker configuration file
├── .dockerignore       # Ignored files for Docker
└── README.md           # Project documentation
```

## Installation & Setup

### 1. Clone the Repository
```sh
git clone <repository_url>
cd <repository_name>
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
```sh
echo "PORT=3000" > .env
```

## Running the Application Locally (Without Docker)
```sh
node server.js
```
Access the app at: `http://localhost:3000`

## Dockerizing the Application

### 1. Build the Docker Image
```sh
docker build -t chat-app .
```

### 2. Run the Docker Container
```sh
docker run -p 3000:3000 chat-app
```

### 3. Access the Application
Open your browser and go to:
```
http://localhost:3000
```

## License
This project is licensed under the **MIT License**.


