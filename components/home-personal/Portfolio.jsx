'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
<div className="cards">
  {/* Royal Youth */}
  <div className="card-item sub-bg">
    <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">Instagram Strategy</a>
              <a href="/portfolio-grid" className="tag">Fashion</a>
            </div>
            <h4>Royal Youth</h4>
          </div>
          <div>
            <p>
              Built a strong brand voice and boosted engagement for this fashion brand by optimizing Instagram strategy.
            </p>
            <a href="/project-details/royal-youth" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/4.jpg" alt="Royal Youth" />
        </div>
      </div>
    </div>
  </div>

  {/* MS Shyam */}
  <div className="card-item sub-bg">
    <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">Social Media</a>
              <a href="/portfolio-grid" className="tag">Ethnic Wear</a>
            </div>
            <h4>MS Shyam</h4>
          </div>
          <div>
            <p>
              From scratch to 371K+ reach: managed content and strategy to grow this boutique’s social presence and customer base.
            </p>
            <a href="/project-details/ms-shyam" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/1.jpg" alt="MS Shyam" />
        </div>
      </div>
    </div>
  </div>

  {/* Indian Advertising Services */}
  <div className="card-item sub-bg">
    <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">Account Revival</a>
              <a href="/portfolio-grid" className="tag">Agency</a>
            </div>
            <h4>Indian Advertising Services</h4>
          </div>
          <div>
            <p>
              Helped a decade-old agency regain relevance with a custom strategy that resulted in a 5,366% reach increase in 7 days.
            </p>
            <a href="/project-details/indian-advertising" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/3.jpg" alt="Indian Advertising Services" />
        </div>
      </div>
    </div>
  </div>

  {/* Dolls & Guys */}
  <div className="card-item sub-bg">
    <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">Beauty</a>
              <a href="/portfolio-grid" className="tag">Content Design</a>
            </div>
            <h4>Dolls & Guys</h4>
          </div>
          <div>
            <p>
              Revamped their social identity with trendy content, improved visual storytelling, and better story performance.
            </p>
            <a href="/project-details/dolls-and-guys" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/2.jpg" alt="Dolls and Guys" />
        </div>
      </div>
    </div>
  </div>

  {/* Hansuja Attire */}
  <div className="card-item sub-bg">
    <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">Fashion</a>
              <a href="/portfolio-grid" className="tag">Instagram Growth</a>
            </div>
            <h4>Hansuja Attire</h4>
          </div>
          <div>
            <p>
              Established a stylish Instagram identity, created original reels, and improved interaction through targeted content.
            </p>
            <a href="/project-details/hansuja-attire" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/5.jpg" alt="Hansuja Attire" />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
