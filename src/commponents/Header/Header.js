import React from 'react';
import './Header.css'
import headerImg from '../images/header.png'
import { Typewriter } from 'react-simple-typewriter';
const Header = () => {
    return (
        <div>
            <div className="header padding" id='home'>
                <div>
                    <div className='header-title'>
                        <p className='first'>Welocome to my world</p>
                        <h1>Hi, I’m <span>Rabbi Hassan</span></h1>
                        <span className='text-tp'>
                            a
                            <span className='typing-text'>
                                <Typewriter words={[" Professional Coder.", " Developer.", " UI/UX Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </span>
                        <p>I use animation as a third dimension by which to simplify experiences and kuiding <br /> thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className='contact-header'>
                            <p>+8801309140665</p>
                            <p>itrabbiislam@gmail.com</p>
                            <p>Gazipur,Bangladesh</p>
                        </div>
                        <button className='btn'>Got a project?</button>
                        <button className='out-btn'>Let's talk</button>
                    </div>
                </div>
                <div>
                    <img src={headerImg} alt="" />
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    );
};

export default Header;