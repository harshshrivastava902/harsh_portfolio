import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function About() {
    return (
        <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <img src="img/profile.jpg" class="img-fluid rounded b-shadow-a" alt=""/>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info" align="left">
                          <p><span class="title-s">Name: </span> <span>Harsh Shirvastava</span></p>
                          <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                          <p><span class="title-s">Email: </span> <span>shrivastavaharsh878@gmail.com</span></p>
                          
                        </div>
                      </div>
                    </div>
                    <div class="skill-mf">
                      
                      <h5 align="right" >HTML</h5> 
                      <ProgressBar completed={60} bgColor="#2E3C71" />
                 
                      <h5 align="right">CSS3</h5> 
                      <ProgressBar completed={60}  bgColor="#2E3C71" />
                   
                      <h5 align="right">React JS</h5> 
                      <ProgressBar completed={70}  bgColor="#2E3C71" animation/>
                    
                      <h5 align="right">JAVASCRIPT</h5> 
                      <ProgressBar completed={50}  bgColor="#2E3C71"/>
                    
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left" >
                          About me
                        </h5>
                      </div>
                      <p class="lead">
                       Hello,Everyone &#128516;
                      </p>
                      <p class="lead">
                      I have experience in JavaScript, React JS for 4 months.And I am working as an intern  as Web Developer. I've learnt many new things on my way here. At the same time I would like to develop my skills in cloud services or other IT related fields. Learning new technologies is my first priority while applying the current knowledge on the project and improving myself constantly. In the near future, I will be using all of my expertise to work on big projects.
                      </p>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
