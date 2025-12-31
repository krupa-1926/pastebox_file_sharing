![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Deployment](https://img.shields.io/badge/Deploy-Render-purple)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-orange)

# PasteBox — Secure, Fast & Smart File Sharing Platform

## Overview

PasteBox is a secure, fast, and easy-to-use modern file-sharing and storage platform that lets users instantly upload files and generate short,share files instantly with a link or QR codes. With a clean UI, lightning-fast uploads (via AWS), and optional user authentication, PasteBox is designed for both casual and power users.

Deployed on **Render** with MongoDB Atlas.  

🔗 **Live Demo**: [Frontend Link](https://filesharingplatform.vercel.app/)  
🔗 **Backend API**: [Backend Link](https://file-sharing-backend-tn06.onrender.com)  

---

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Stack](#Technologies-Used)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Author](#author)

---

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/krupa-1926/pastebox_file_sharing.git
   ```

2. **Install dependencies:**

   Navigate to client directory and install frontend dependencies using 

   ```
   npm install
   ```

   Similary navigate to server folder and install backend dependencies

   ```
   npm install
   ```

3. **ENV variables:**

   - create .env file in the client folder and add these variables

     #### VITE_BASE_URL= http://localhost:4000

   - create .env file in the server folder and add these variables

     #### PORT= 5000

     #### MONGODB_URL= your db url

     #### JWT_SECRET= your secret (string)

     #### JWT_EXPIRY= 20d

     #### COOKIE_TIME= 7

     #### SERVER_URL=your server url

     #### CLOUDINARY_CLOUD_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

4. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       npm run dev
   ```
   - Open another terminal, navigate to server directory and run this command to start backend server
   ```
       npm start
   ```

---

## Features

-  Fast file uploads via AWS S3 & MongoDB GridFS
-  JWT-based authentication (Login/Register)
-  Dashboard for managing uploaded files
-  Anonymous sharing via LocalStorage
-  Share links with QR Codes, WhatsApp, Email, Facebook, etc.
-  Expiration countdown for temporary files
-  Download/Preview features with tracking
-  SEO-optimized public pages
-  Progress indicators, spinners, and toasts for smooth UX

### 📡 Sharing Options

- Share links via:
  - WhatsApp
  - Instagram
  - Email
  - Direct QR Code
- Copy link with one click

---

## Technologies Used

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **Shadcn:** UI library for styling based on Tailwind CSS
- **JWT:** JSON Web Tokens for secure user authentication.
- **Cloudinary:** Cloud-based image management for storing and serving images.
- **Google Cloud:** For gmail based authentication
- **QRCode** (for QR generation)
- **Nodemailer** (for potential email sharing)

---

## Folder Structure

```plaintext
pastebox_file_sharing/
│── server/                      # Node.js + Express + Socket.IO API
│ ├── src/
│ │ ├── app.js                   # Main entry point
│ │ ├── controllers/             # Socket and user controllers
│ │ ├── models/                  # MongoDB models
│ │ ├── routes/                  # API routes
│ │ └── ...
│ ├── package.json
│ ├── package-lock.json
│ └── .env (ignored)
│
├── client/                      # Frontend (React)
│   ├── public
│   │
│   ├── src/
│   │   ├── assets/              # Images, icons
│   │   ├── components/          # Reusable components
│   │   ├── config/              # axios files
│   │   ├── App.jsx
│   │   ├── main.jsx             # React entry point
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   └── tailwind.config.js
│
├── .gitignore
├── README.md                    # Project overview

```
---

## Screenshots

### User Dashboard

![User Dashboard](./client/src/assets/screenshots/user_dashboard.png)


### Guest Dashboard

![Guest Dashboard](./client/src/assets/screenshots/dashboard.png)


### File Upload Panel

![File Uploaded](./client/src/assets/screenshots/upload.png)


### File Share Options

![File Share](./client/src/assets/screenshots/share.png)


### File Preview Window

![File Preview](./client/src/assets/screenshots/file_preview.png)

--- 

##  Deployment

### Backend (Render)
  - Push repo to GitHub

  - Create a Web Service on Render with backend/ as root

  - Add Environment Variables in Render dashboard (MONGO_URI, JWT_SECRET, etc.)

  - Deploy

### Frontend (vercel)
  - Push repo to GitHub

  - Create a New Project on Vercel with frontend/ as root

  - Deploy the frontend/ folder

  - Update API base URL to point to your deployed backend

--- 

## Author 
  Built by Krupa Patel

