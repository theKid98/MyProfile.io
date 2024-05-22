import React from 'react'
import '../App.css'
import { FcMultipleDevices } from "react-icons/fc";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const ContentCard = ({ selectedOption }) => {
  let content;
  switch (selectedOption) {
    case 'about':
      content = <div>
        <h3>About <hr></hr></h3>
        <p style={{color:'grey', fontWeight:600}}>I am a passionate front-end developer with over 2 years of experience in building user-friendly and responsive web applications. Currently, I am proud to be a part of the talented team at Datalake Solutions. </p>
        
        <p style={{color:'grey', fontWeight:600}}>My expertise lies in HTML, CSS, and JavaScript, with a strong focus on React.js for building interactive and dynamic user interfaces. I also have hands-on experience with Express.js and Node.js for server-side development, as well as Angular for front-end frameworks. I am dedicated to continuously learning and improving my skills to deliver high-quality software solutions that meet and exceed client expectations.</p>
        <h5>What I Do!</h5>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
            <div className="card" style={{background:'#ffcccb'}}>
                <FcMultipleDevices size={30} />
                <h3>Web Development</h3>
                <p style={{color:'grey', fontWeight:600}}>Learn about building responsive and dynamic websites.</p>
            </div>
            <div className="card" style={{background:'#add8e6'}}>
                <HiOutlineDevicePhoneMobile size={30} />
                <h3>App Development</h3>
                <p style={{color:'grey', fontWeight:600}}>Explore the world of mobile app development.</p>
            </div>
        </div>
      </div>;
      break;
    case 'work':
      content = <div>Work Content</div>;
      break;
    case 'resume':
      content = <div>Resume Content</div>;
      break;
    case 'contact':
      content = <div>Contact Content</div>;
      break;
    default:
      content = <div>About Content</div>;
  }

  return <div>{content}</div>;
};

export default ContentCard;
