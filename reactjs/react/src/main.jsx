
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// import Parent2 from './Component/Props/Parent2.jsx';
import './index.css';
import State1 from './State/State1';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   {/* <Cbc></Cbc>
  //  <Fbc></Fbc>
  //  <Demo></Demo>
   <Parent></Parent> */}
   {/* <Parent1></Parent1>
   <Cbc1></Cbc1> */}
   {/* <Parent2/> */}
   {/* <Parent></Parent> */}
   {/* <State/> */}
   <State1/>
   
  </StrictMode>
)
