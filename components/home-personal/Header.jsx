'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="Wave Icon" />
                </span>{' '}
                Welcome!
              </h6>
              <h1 className="fw-700 mb-10">
                I’m Ashish <span className="main-color">Kaushik</span>
              </h1>
          <h3>Your Trusted Partner for Business Growth</h3>

              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
         <p>
  I’m Ashish — your go-to growth consultant. I help businesses bridge the gap between strategy and execution with smart digital solutions. Whether you're a startup or scaling brand, I deliver data-driven insights and action plans that fuel real growth.
</p>

                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Let’s Talk</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt="Down Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">shellbyashish@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+91 99115 67766</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">B-55, Sector 2 Noida </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
