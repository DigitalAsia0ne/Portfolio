import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt="Ashish Kaushik" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="Icon 1" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="Icon 2" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="Icon 3" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="Icon 4" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Me</h6>
              <div className="text">
    <h4 className="mb-30">
  I'm <span className="fw-200">a Growth Consultant & Business Strategist</span> based in India — helping companies scale, innovate, and succeed in today’s competitive digital landscape.
</h4>

     <p> Over the years, I’ve helped businesses — from early-stage startups to growing enterprises — scale smarter and faster. My approach combines strategic thinking, digital marketing, and real-world execution to turn vision into results.
</p>


                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
 <div>
  <h3 className="fw-300 mb-10">100%</h3>
  <h6 className="p-color sub-title">
    Client Satisfaction Rate
  </h6>
</div>

                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="Arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100+</h3>
                          <h6 className="p-color sub-title">
                            Businesses Transformed
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="Arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default About;
