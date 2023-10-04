import React, { useState, useEffect, useMemo } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.js"

const root = createRoot(document.getElementById("root"))
// root.render(<div>Hello</div>)
root.render(<App />)
