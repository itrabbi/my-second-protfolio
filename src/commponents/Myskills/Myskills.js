import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faLayerGroup, faTerminal, faFillDrip } from '@fortawesome/free-solid-svg-icons'
import './Myskills.css'

const Myskills = () => {
    return (
        <div className=''>
            <br /><br /><br /><br/>
            <div className="title2">
                <p>-My skills</p>
                <h2>My Expertise</h2>
            </div>
            <div className="all-card2">

            <div className="card2">
                <h4 className='h4'> <span className='iconfirst'> <FontAwesomeIcon icon={faLayerGroup} /> </span> 
                <small>Strategy & Direction  </small>      
                  </h4>

                   <p> <span>Understand First.</span> "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="card2">
                <h4 className='h4'> <span className='iconsecond'> <FontAwesomeIcon icon={faClone} /> </span> 
                <small>Strategy & Direction  </small>      
                  </h4>

                   <p> <span>Understand First.</span> "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>


            <div className="card2">
                <h4 className='h4'> <span className='iconthird'> <FontAwesomeIcon icon={faTerminal} /> </span> 
                <small>Strategy & Direction  </small>      
                  </h4>

                   <p> <span>Understand First.</span> "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="card2">
                <h4 className='h4'> <span className='iconforth'> <FontAwesomeIcon icon={faFillDrip} /> </span> 
                <small>Strategy & Direction  </small>      
                  </h4>

                   <p> <span>Understand First.</span> "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            </div>

            
        </div>
    );
};

export default Myskills;