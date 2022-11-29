/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import S from "../../styles/main.module.css";
import All from "./common/all";
import Header from "./common/header";
const MainIndex = () => {
  return (
    <Fragment>
      <All>
        <div className="content">
          <div className="row">
            <div className="col-12 col-lg-8 order-1 order-lg-0 mt-5 mt-lg-0">
              <h1 className={S.tithid}> Resume Fatima Naderi</h1>
              <div className={S.contentText}>
                <h1 className="mt-2  ">Hello ! </h1>
                <h3 className="mt-1">
                  <span className="text-dark">I'm</span> Front End Develper{" "}
                </h3>
                <p className="mt-2">
                  I'm <span className="text-purple">Fatima Naderi</span> , I
                  work in field of programming and web design .
                </p>
                <img src="/image/signature.png" alt="" />
                <div className={S.iconSocial}>
                  <i className="fa fa-linkedin linkedin fa-lg"></i>
                  <i className="fa fa-instagram instagram fa-lg"></i>
                  <i className="fa fa-telegram telegram fa-lg"></i>
                  <i className="fa fa-whatsapp whatsapp fa-lg"></i>
                  <i className="fa fa-envelope-o envelope fa-lg"></i>
                  <i className="fa fa-github github fa-lg"></i>
                </div>
              </div>
            </div>

            <div className={S.bglight}></div>
            <div className="col-11 col-lg-4 order-0 order-lg-1 mt-1 mt-lg-0 d-flex justify-content-center ">
              <div className={S.bgImg1}></div>
              <div className={S.bgImg2}></div>
              <div className={S.code}>
                <i className="bi bi-code-slash"></i>
              </div>
              <div className={S.code1}>
                <i className="bi bi-front"></i>
              </div>
              <div className={S.code2}>
                <i className="bi bi-x-lg"></i>
              </div>
              <div className={S.bgImg}>
                <div className={S.imageMe}>
                  <img src="/image/me.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={S.nameMy}>
          <h1>Fatima Naderi</h1>
        </div>
        <Header />
      </All>
    </Fragment>
  );
};

export default MainIndex;
