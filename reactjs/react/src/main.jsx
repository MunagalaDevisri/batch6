
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// import Parent2 from './Component/Props/Parent2.jsx';
// import './index.css';
import "../src/Styles/globally.css";
import Comp1 from './Styles/Comp1';
import Comp2 from './Styles/Comp2';



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
   {/* <State1/> */}
   {/* <Inline/> */}
   <Comp1/>
   <Comp2/>
   
  </StrictMode>
)
