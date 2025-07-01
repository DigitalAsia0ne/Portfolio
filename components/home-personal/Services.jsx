import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialties</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="Business Strategy Icon" />
              </div>
             <h5>Strategic Planning for Business Growth</h5>

     <div className="text mt-40">
<div className="mb-10">
  <span className="tag">Strategy</span>
  <span className="tag">Consulting</span>
</div>

<p>
  I craft customized growth strategies that align with your business goals — ensuring sustainable scalability, strong market positioning, and measurable outcomes that drive success.
</p>

</div>

              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="Marketing Icon" />
              </div>
              <h5>Marketing & Positioning</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Digital</span>
                  <span className="tag">Branding</span>
                </div>
<p>
  At Digital Asia, I, Ashish, lead with a clear mission — to help businesses grow online through data-driven digital strategies, smart branding.Deliver measurable results across SEO, social media, paid ads, and web presence
</p>

              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="Operations Icon" />
              </div>
              <h5>Operations Optimization</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Efficiency</span>
                  <span className="tag">Scaling</span>
                </div>
  <p>
    I help businesses streamline operations by optimizing internal systems, automating workflows, and reducing inefficiencies — enabling scalable growth and improved team productivity.
  </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Services;
