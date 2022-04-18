import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Experince from '../pages/Experince'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Test from '../pages/Test'





function Home() {
    return (
        <div>
            <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div class="container">
                    {/* <a class="navbar-brand js-scroll" href="#page-top">DevFolio</a> */}
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link js-scroll active" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll" href="#service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll" href="#work">Work</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link js-scroll" href="#blog">Blog</a>
                            </li> */}
                            <li>
                      
                              
                            </li>

                            <li class="nav-item">
                                <a class="nav-link js-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="home" class="intro route bg-image" style={{ backgroundImage: "url(img/banner1.jpg)" }}>
                <div class="overlay-itro"></div>
                <div class="intro-content display-table">
                    <div class="table-cell">
                        <div class="container">
                            {/* <!--<p class="display-6 color-d">Hello, world!</p>--> */}
                            <h1 class="intro-title mb-4">Hi,I am Harsh Shirvastava</h1>
                            <p class="intro-subtitle"><span class="text-slider-items">Web Developer,Frontend Developer</span><strong class="text-slider"></strong></p>
                            {/* <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
                        </div>
                    </div>
                </div>
            </div>
            <About />
      
            <Services />
            <Experince />
            <Projects />
            {/* <Test/> */}
         
            <Contact />
         

            <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
            {/* <div id="preloader">
             
            </div> */}
            <div id="preloader" >
                <h6>D</h6>
                <h6>E</h6>
                <h6>V</h6>
                <h6>L</h6>
                <h6>O</h6>
                <h6>P</h6>
                <h6>I</h6>
                <h6>N</h6>
                <h6>G</h6>

            </div>
        </div>
    )
}

export default Home
