import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.js"

// I used my fake json data server
// E:\wamp64\www\TOOLS\JSON-Server
// npm run start-users

console.log("wooo hooo")
// Render your React component instead
const root = createRoot(document.getElementById("root"))
root.render(<App />)
