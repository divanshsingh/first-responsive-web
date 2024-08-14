import React from 'react'
import vg from "../assets/home2img.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Digital Codesmith</h1>
        <p>I write a code to solve a problem, tell me, what's your?</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>I write code to solve problems, turning complex challenges into elegant solutions. My passion lies in leveraging technology to enhance efficiency and creativity, whether it's automating tasks, developing applications, or optimizing processes. What's your approach to problem-solving?</p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
        <h1>Who I am?</h1>
        <p>I am a passionate problem-solver and coder dedicated to using technology to create innovative solutions. With a strong foundation in programming and a keen interest in understanding complex issues, I thrive on transforming ideas into functional code. My curiosity drives me to explore new technologies and methodologies, continuously improving my skills and expanding my knowledge. Whether working on personal projects or collaborating with others, I aim to make a positive impact through my work in the tech world.</p>
    </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div
          style={{animationDelay: ".3s"}}
          >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div
          style={{animationDelay: ".5s"}}
          >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div
          style={{animationDelay: ".7s"}}
          >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div
          style={{animationDelay: ".9s"}}
          >
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
