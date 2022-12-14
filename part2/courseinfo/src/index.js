import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"
import courses from "./data/courses"


ReactDOM.createRoot(document.getElementById('root')).render(<App courses={courses}/>)