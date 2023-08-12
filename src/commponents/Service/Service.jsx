import './Service.css'
import { FaChromecast,FaDesktop,  FaRegEnvelope } from "react-icons/fa";
import { BiLayer, BiGroup, BiCopy } from "react-icons/bi";




const Service = () => {
    return (
        <div className='services padding' id='#service'>
          <br /><br /><br /><br />
          <p className='p'>-Services</p>
          <h2>My Services</h2>
          <div className="all-service">

            <div  className='signal-sevice'>
              <div className="icon first">
              <FaChromecast></FaChromecast>
              </div>
              
              <div className="content">
                <h3>Business Stratagy</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>

              </div>



            <div  className='signal-sevice'>
              <div className="icon second">
              <BiLayer></BiLayer>
              </div>
              <div className="content">
                <h3>Marketing & Reporting</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              </div>


            <div  className='signal-sevice'>
              <div className="icon third">
              <BiGroup></BiGroup>
              </div>
              <div className="content">
                <h3>Business Stratagy</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
              </div>



            <div  className='signal-sevice'>
              <div className="icon forth">
              <FaDesktop></FaDesktop>
              </div>
              <div className="content">
                <h3>Mobile Development</h3>
                <p>Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              </div>



            <div  className='signal-sevice'>
              <div className="icon fivth">
              <FaRegEnvelope></FaRegEnvelope>
              </div>
              <div className="content">
                <h3>Email Marketing</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.</p>
              </div>
              </div>


            <div  className='signal-sevice'>
              <div className="icon sixth">
              <BiCopy></BiCopy>
              </div>
              <div className="content">
                <h3>Copywriting</h3>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.</p>
              </div>
              </div>





            </div>
          </div>
    );
};

export default Service;