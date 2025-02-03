
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

import Parent from './Component/Props/Parent.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   {/* <Cbc></Cbc>
   <Fbc></Fbc>
   <Demo></Demo>
   <Parent></Parent> */}
   {/* <Parent1></Parent1>
   <Cbc1></Cbc1> */}
   <Parent></Parent>
  </StrictMode>
)
