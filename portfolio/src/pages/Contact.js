import React from 'react'

function Contact() {
  return (
    <section class="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}>
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Send Message
                      </h5>
                    </div>
                    <div>
                      <form action="" method="post" role="form" class="contactForm">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                              <div class="validation"></div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left line-1 anim-typewriter" >
                        Give me a tinkle on the blower...
                      </h5>
                      <hr style={{width:100,border:"2px solid rgb(26,36,60)"}}></hr>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”
                        – Martin Golding
                      </p>
                      {/* <ul class="list-ico">
                          <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, </li>
                          <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                          <li><span class="ion-email"></span> contact@example.com</li>
                        </ul> */}
                    </div>

                    <div class="socials">
                        <ul>
                          <li><a href=""><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                          <li><a href=""><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                          <li><a href=""><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                      
                        </ul>
                      </div>

                    <div class="letter-image" >
                      <div class="animated-mail">
                        <div class="back-fold"></div>
                        <div class="letter">
                          <div class="letter-border"></div>
                          {/* <div class="letter-title"></div> */}
                          <div class="letter-context">Hey,Everyone <span>&#128151;</span> &#128516;</div>
                          <div class="letter-stamp">
                            <div class="letter-stamp-inner"></div>
                          </div>
                        </div>
                        <div class="top-fold"></div>
                        <div class="body"></div>
                        <div class="left-fold"></div>
                      </div>
                      <div class="shadow"></div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <footer>

        <div class="container">
          <div class="row">
            <div class="col-sm-12">

            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
