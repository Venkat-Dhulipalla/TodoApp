# React Todo App with Firebase

This project is a simple todo application built with React.js using Create React App and Firebase. It allows users to add, edit,delete, and mark tasks as completed. Firebase is used for real-time data storage.

## Live Demo

Check out the live demo [here](https://venkat-react-todoapp.netlify.app/).

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd TodoApp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy the Firebase configuration provided (apiKey, authDomain, projectId, etc.).

5. Create a `.env` file in the root directory of your project and add the Firebase configuration as environment variables:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

   Replace `your-api-key`, `your-auth-domain`, `your-project-id`, `your-storage-bucket`, `your-messaging-sender-id`, and `your-app-id` with your actual Firebase configuration values.

6. Run the development server:

   ```bash
   npm start
   ```

7. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.
