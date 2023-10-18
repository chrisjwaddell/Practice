import React, { useState, useEffect, useMemo } from "react"
import { createRoot } from "react-dom/client"
import SimpleApp from "./main/SimpleApp"

const root = createRoot(document.getElementById("root"))
root.render(<SimpleApp />)
