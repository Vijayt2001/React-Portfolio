import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Info </a>
        <a href="https://vtolnoorkar577b.myportfolio.com/" className='btn btn-photo'>Photography Portfolio</a>
        <a href=""></a>


        
    </div>
  )
}

export default CTA