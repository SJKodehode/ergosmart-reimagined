import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// src/main.tsx
import '@fontsource-variable/inter';       // inkluderer @font-face og font-display: swap
// eller, med subset (mindre payload):
// import '@fontsource-variable/inter/latin.css';


createRoot(document.getElementById("root")!).render(<App />);
