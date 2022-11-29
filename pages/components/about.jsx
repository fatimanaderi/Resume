import React, { Fragment } from "react";
import Slider from "react-slick";
import All from "./common/all";
import Header from "./common/header";
import S from "../../styles/projects.module.css";
const AboutMe = () => {
  const settings = {
    dots: true,
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <All>
        <div className={S.content}>
          <h1>Projects</h1>
          <div className="row">
            <div className={S.wrapper}>
              <div className="col-12 col-md-4">
                <h5>Dress shop</h5>
                <div className={S.project}>
                  <Slider {...settings}>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-1.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-3.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-4.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-5.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-6.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project1/project1-7.png" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h5>Coffee shop</h5>
                <div className={S.project}>
                  <Slider {...settings}>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-1.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-2.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-3.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-4.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-5.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-6.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project2/project2-7.png" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h5>Wheater app</h5>
                <div className={S.project}>
                  <Slider {...settings}>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project3/project3-1.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project3/project3-2.png" />
                    </div>
                    <div className={S.epro}>
                      <img src="/image/projectImg/project3/project3-3.png" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
      </All>
    </Fragment>
  );
};

export default AboutMe;
