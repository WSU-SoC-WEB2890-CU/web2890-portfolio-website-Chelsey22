// //TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase, ref, push, serverTimestamp } from "firebase/database"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSpA3WXdU-qt0SMabLniptBkzT5yXSfw0",
  authDomain: "portfolio-submissions-d2b72.firebaseapp.com",
  databaseURL: "https://portfolio-submissions-d2b72-default-rtdb.firebaseio.com",
  projectId: "portfolio-submissions-d2b72",
  storageBucket: "portfolio-submissions-d2b72.firebasestorage.app",
  messagingSenderId: "437977878900",
  appId: "1:437977878900:web:0f2e1ffcedc9451423dc21",
  measurementId: "G-90713CWD02",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const form = document.querySelector("#contactForm")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
    timestamp: serverTimestamp(),
  }

  // Push data to Realtime Database
  push(ref(db, "contacts"), data)
    .then(() => {
      alert("Message sent successfully!")
      form.reset()
    })
    .catch((error) => {
      console.error("Error sending message: ", error)
      alert("Failed to send message. Try again.")
    })
})
