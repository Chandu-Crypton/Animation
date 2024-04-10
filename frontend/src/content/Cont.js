import React from 'react'
const Cont = () => {
  return (
    
      <div class="row">
        <div className='portion'>
         <h1 className='pe'>
     
        {"Revolutionizing Enterprise with Innovative Solutions".split("").map((child,idx)=> 
        (
          <span className={'hoverText'} key={idx}>
            {child}

          </span>
        ))}
         </h1>
         <div className='lap'>

        Modernize the organization with innovative software solutions, applications and integrations
         </div>
        </div>
        <div className='portion'>

        <img src='../images/ment.png' id='set' alt='img' height='300px' with='130px'/>
        </div>
       
      </div>
     
  
  )
}

export default Cont
