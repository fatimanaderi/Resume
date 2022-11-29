import React, { Fragment } from "react";
import All from "./components/common/all";
import Header from "./components/common/header";
import S from "../styles/about.module.css";
const About = () => {
  return (
    <Fragment>
      <All>
      <div className="content1"> 
          <div className="row">
            <div className="col-12 col-lg-6  mt-5 mt-lg-0">
              <div className={S.wrapperBgPurple}>
                <div className={S.bgPurple}>
                  <h1>Fatima Naderi</h1>
                  <h4 className="mt-lg-4">Front End Developer</h4>
                  <div className={S.location}>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Iran , Tehran</p>
                  </div>
                  <div className={S.date}>
                    <i className="bi bi-calendar-event"></i>
                    <p>2001 / 7 / 26 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-lg-3  pb-3">
              <div className={S.contentAbout}>
                <div className={S.bgsqure}></div>
                <div className={S.bgsqure1}></div>

                <h1>About me</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  In cursus turpis massa tincidunt dui ut. Lorem ipsum dolor sit
                  amet consectetur. Mattis molestie a iaculis at erat
                  pellentesque. Bibendum at varius vel pharetra vel turpis nunc
                  eget lorem. Feugiat scelerisque varius morbi enim nunc
                  faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Header />
      </All>
    </Fragment>
  );
};

export default About;
