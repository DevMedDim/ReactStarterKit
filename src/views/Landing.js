import React from 'react';
import BtnCounter from './BtnCounter';
/*import BtnCounter from '../components/BtnCounter';*/
import '/src/assets/styles/style.css';

function Landing() {
    
    return (
        <div className="landing__container">
        <div className="title__landing">
           <h1>React Starter Kit<span className="celeb"> 🎉</span></h1>
        </div>
        <div className="btn__counter">
        <BtnCounter/>
        </div>
        </div>
        
    )
}

export default Landing;
