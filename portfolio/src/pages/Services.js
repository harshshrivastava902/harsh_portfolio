import React from 'react'
import './style.css'

function Services() {
    return (

        <section id="service" class="services-mf route" style={{ backgroundImage: "url(img/banner2.jpg)" }}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-box text-center">
                            <h3 class="title-a" >
                                Skills
                            </h3>
                            <p class="subtitle-a">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div class="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="ion-monitor"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Web Design</h2>
                                <p class="s-description text-center" class="animate__animated animate__lightSpeedInLeft">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="ion-code-working"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Web Development</h2>
                                <p class="s-description text-center" class="animate__animated animate__lightSpeedInLeft">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="ion-android-phone-portrait"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Responsive Design</h2>
                                <p class="s-description text-center" class="animate__animated animate__lightSpeedInLeft">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
         


        </section>

    )
}

export default Services
