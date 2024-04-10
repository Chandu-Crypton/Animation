import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav classname="nav-items">
        
            <div className='conti'>

                <a href='#'>Services <span></span></a>
                <a href='#'>Solutions <span></span></a>
                <a href='#'>Industries <span></span></a>
                <a href='#'>About Us <span></span></a>
                <a href='#'>Contact Us <span></span></a>
                <a href='#'>sales@nigussystems.com</a>
                <a href='#'>+91 9880756332</a>
            <button className='btn'>
                Sales
            </button>
            <button className='btn'>
                Support
            </button>
            </div>
            
         </nav>
      <ul className='items-2'>
                <li className='list-2'>Web Development</li>
                <li className='list-2'>Application Development</li>
                <li className='list-2'>Software Development</li>
                <li className='list-2'>AL/ML Development</li>
                <li className='list-2'>System Integration</li>
            </ul>
    </div>
  )
}

export default Navbar