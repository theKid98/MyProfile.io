import React from 'react'
import '../App.css'
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FaDownload,FaLinkedin } from "react-icons/fa";
import profileImage from '../Assets/profile1.jpeg';

const ContactsCard =()=>{
    return(
        <div>
            <img src={profileImage} style={{height:'120px',width:'90px', borderRadius:'8px'}}/>
            <h5>Thalla Venkateswara Reddy</h5>
            <h6 style={{fontWeight:600}}>Front End Developer</h6>
            <div style={{ marginBottom: '10px' }}>
                <a href='https://www.linkedin.com/in/thallavenkateswarareddy/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ fontSize: '24px', color: '#0e76a8', cursor: 'pointer' }} />
                </a>
            </div>
            <div style={{background:'#F0F0F0' ,borderRadius:'8px'}}>
                <div class="contact-info">
                    <span class="icon"><IoMdPhonePortrait style={{color:'red', fontWeight:'bold'}} /></span> 
                    <span class="info">+91 7981238132</span>
                </div><hr></hr>
                <div class="contact-info">
                    <span class="icon" style={{color:'green',fontWeight:'bold'}}><MdEmail /></span> 
                    <span class="info">venkateshthalla1998@gmail.com</span>
                </div><hr></hr>
                <div class="contact-info">
                    <span class="icon" style={{color:'red',fontWeight:'bold'}}><IoLocationSharp /></span> 
                    <span class="info">Hyderabad</span>
                </div>
            </div>
            <Button style={{fontWeight:500}}> <FaDownload /> Download CV</Button>
        </div>
    )
}

export default ContactsCard