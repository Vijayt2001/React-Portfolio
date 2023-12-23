import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'


const about = () => {
  return (
  <section id = 'about'> 
  <h5>Get to know </h5>
  <h2>About Me </h2>

    <div className='container about__container' >
      <div className='about__me'>

        <div className='about__me-image'>
          <img src={ME} alt="About Imaage "/>
      </div>
      </div>


    <div className='about__content'> 
    <div className='about__cards'>
      <article className='about__card'>
    <FaAward className ='about__icon ' />   
    <h5>Experience </h5> 
    <small>2+ years workiong</small>
    </article>
    
    <article className='about__card'>
    <AiFillFolderOpen className ='about__icon ' />   
    <h5> Projects </h5> 
    <small>10+ Completed</small>
    </article>

    <article className='about__card'>
    <FaAward className ='about__icon ' />   
    <h5>Experience </h5> 
    </article>
    </div>


    <p> I'm a recent a graduate from San Francisco State University with a Bachelor's degree in Computer Science. Learning about the latest tech, software, and computers has been my passion, and learning new topics and grow my knowledge in various fields is my goal. I've enrolled in computer science-related clubs and organizations like the AI club and Code good 2021 and I'm enrolled in a program called CTI Accelerate at California State University Monterey Bay. Currently, I have knowledge in C++ object-oriented programming, SQL, and basic knowledge in Swift, Python, and java.
I'm looking for any kind of job or internship to gain experience and knowledge.</p>

    <a href="#contact" className='btn btn-primary '> Let's Talk</a>
    </div>

  </div>
  
  
  </section>

    )
}

export default about