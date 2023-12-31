import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

      <ul className="service__list"></ul>
      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>
      </article>
      {/* END OF UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

      <ul className="service__list"></ul>
      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      </article>
      {/* END OF Web Developmet */}

      <article className="service">
        <div className="service__head">
          <h3>Content creation</h3>
        </div>

      <ul className="service__list"></ul>
      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>

      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      <li>
        <BiCheck className = 'service__list-icon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </li>


      </article>
      {/* END OF content creation */}
      </div>
    </section>
  )
}

export default Services

