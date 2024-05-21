import React from 'react'
import '../App.css'
import { GoPersonFill } from "react-icons/go";
import { BiSolidReport } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { useState } from 'react';
const OptionsCard =( )=>{
    const [selected, setSelected] = useState(null);
    return(
        <div style={{width:'100%'}}>
            <div style={{background: selected === 'about' ? '#077df2' : '#F0F0F0',color:selected === 'about' ? '#ffff' : '', textAlign:'center', borderRadius:'10px',width:'80px',marginRight:'auto',marginLeft:'auto',marginBottom:'25px',marginTop:'25px'}} onClick={() => setSelected('about')}>
               <GoPersonFill size={25} />
               <p className='info'>About</p>
            </div>
            <div style={{background: selected === 'resume' ? '#077df2' : '#F0F0F0',color:selected === 'resume' ? '#ffff' : '', textAlign:'center', borderRadius:'10px',width:'80px',marginRight:'auto',marginLeft:'auto',marginBottom:'25px'}} onClick={() => setSelected('resume')}>
               <BiSolidReport size={25} />
               <p className='info'>Resume</p>
            </div>
            <div style={{background: selected === 'work' ? '#077df2' : '#F0F0F0',color:selected === 'work' ? '#ffff' : '', textAlign:'center', borderRadius:'10px',width:'80px',marginRight:'auto',marginLeft:'auto',marginBottom:'25px'}} onClick={() => setSelected('work')}>
               <MdWork size={25} />
               <p className='info'>Work</p>
            </div>
            <div style={{background: selected === 'contact' ? '#077df2' : '#F0F0F0', color:selected === 'contact' ? '#ffff' : '', textAlign:'center', borderRadius:'10px',width:'80px',marginRight:'auto',marginLeft:'auto',marginBottom:'25px'}} onClick={() => setSelected('contact')}>
               <TiContacts size={25} />
               <p className='info'>Contact</p>
            </div>
        </div>
    )
}

export default OptionsCard