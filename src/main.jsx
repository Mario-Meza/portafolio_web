import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IndexComponent } from "./components/IndexComponent.jsx";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import  './styles/globals.css'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <IndexComponent />
        </StrictMode>
    </BrowserRouter>
)