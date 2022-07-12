import React, { useEffect } from 'react';
import {FaCoins} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md'
import {RiArrowDownSFill} from 'react-icons/ri'
import {BsLightbulbFill} from 'react-icons/bs'
import {AiTwotoneSetting} from 'react-icons/ai'



import './Navbar.css'
import { useState } from 'react';
import useDarkMood from '../useDarkMood';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const[darkMood,setDarkMood  ]= useDarkMood()

    const [isActive, setIsActive] = useState(false)
    const [select, setSelect] = useState(localStorage.getItem('select') !== null  ? localStorage.getItem('select') : ' Default' )
    const [selectIcon, setSelectIcon] = useState(localStorage.getItem('select' ) === 'Default'  ? <AiTwotoneSetting/>  : 
    localStorage.getItem('select' ) == 'Dark' ? <MdDarkMode/> : localStorage.getItem('select' ) == 'Light' ?  <BsLightbulbFill className=' text-yellow-300'/> : <AiTwotoneSetting/> 
    ) 
    const options = [
        {name:'Default', icon:<AiTwotoneSetting/>,click:'default'},
       {name:'Light' ,icon:<BsLightbulbFill className=' text-yellow-300'/>,click: 'light'},
       {name:'Dark' ,icon:<MdDarkMode/>,click:'dark'}    
    ]
    useEffect(() => {
      localStorage.setItem('select',select)
   
    }, [select])
  
    
    return (
        <div className='   mx-auto  w-full p-4 space-x-1 flex justify-around h-20 items-center'>
           <div className='flex justify-center  lg:text-5xl '>
           <FaCoins className=' dark:text-purple  text-yellow-400 text-3xl lg:text-5xl'/>
           <Link to={'/'}><h2 className='dark:text-white lg:text-5xl   font-bold text-2xl  sm:text-3xl md:text-4xl '>Coin<span className='dark:text-purple text-yellow-400'>Search</span></h2></Link> 
           </div>
           <div className='dropdown' >
            <div onClick={() => setIsActive(!isActive)} className="dropdown-button"><span className=' flex items-center '>{select}<span className='m-2'>{selectIcon}</span></span><RiArrowDownSFill/></div>
            {
                isActive &&
                <div className='dropdown-content   inline-block'>
                    {
                        options.map((item,index) => {
                            return  <div className='dropdown-item flex justify-between items-center' key={index} onClick={() => {
                                setIsActive(false)
                                setSelect(item.name)
                                setSelectIcon(item.icon)
                                setDarkMood(item.click)
                            }}>
                            <span>{item.name}</span>{item.icon}
                        </div>
                        })
                    }
         
            </div>
            }
            </div>
           
            
           
           
        </div>
    );
};

export default Navbar;