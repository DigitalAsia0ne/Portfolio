'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },

    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };
  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Testimonials</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trusted <span className="fw-200">by Clients.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Heavy-Duty Excellence</h6>
      <div className="text">
        <p>
          “ Truckberg is a trusted global distributor with over 20,000 truck and trailer components — delivering unmatched service and support across the USA. ”
        </p>
      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/truckberg.jpg" alt="Truckberg" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">Truckberg Inc.</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            California, USA
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Built on Trust</h6>
      <div className="text">
<p>
  “ At The New Brick, we design and build more than structures — we craft timeless spaces that reflect our clients’ vision, lifestyle, and values with precision, creativity, and heart. ”
</p>

      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/thenewbrick.jpg" alt="The New Brick" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">The New Brick</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            Builders & Architects
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Packaging Innovation Since 1984</h6>
      <div className="text">
<p>
  “ Marudhara has delivered trusted plastic packaging solutions since 1984 — from woven sacks to multilayer films, with a focus on quality, innovation, and long-term client satisfaction. ”
</p>


      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/marudhara.jpg" alt="Marudhara Packaging" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">Marudhara</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            Noida, Since 1984
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Bridge Support Innovation</h6>
      <div className="text">
        <p>
          “ Made of high-grade neoprene, our elastomeric bearing pads are engineered to sit between bridge beams and piers, ensuring flexibility and long-term structural stability. ”
        </p>
      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/elastomeric.jpg" alt="Elastomeric Bearing Pad" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">AARDHA</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            Infrastructure Components
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Your Digital Factory Partner</h6>
      <div className="text">
        <p>
          “ With 20+ years in automation, SMIC empowers intelligent manufacturing with precision, sustainability, and a forward-looking vision — driving industrial transformation through innovation. ”
        </p>
      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/smic.jpg" alt="SMIC - SM Informatics & Controls" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">SM INFORMATICS & CONTROLS</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            Factory Automation Experts
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="item">
    <div className="cont">
      <h6 className="sub-title mb-15">Service Availability</h6>
      <div className="text">
        <p>
          “ Our services are currently available only in the following locations: Mumbai, Delhi, Meerut, Hapur, Muzaffarnagar, Gurugram, Modinagar, Navi Mumbai, Vasai Virar, Ghaziabad and Faridabad. ”
        </p>
      </div>
    </div>
    <div className="info">
      <div className="d-flex align-items-center">
        <div>
          <div className="img fit-img">
            <img src="/assets/imgs/testim/wiom.jpg" alt="WIOM Service Areas" />
          </div>
        </div>
        <div className="ml-20">
          <h6 className="fz-18">WIOM</h6>
          <span className="p-color opacity-8 fz-15 mt-5">
            Broadband Service Coverage
          </span>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>



          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
