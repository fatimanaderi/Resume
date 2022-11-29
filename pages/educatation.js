import React, { Fragment } from 'react';
import All from './components/common/all';
import Header from './components/common/header';
import S from "../styles/educate.module.css";

const educatation = () => {
    return ( 
        <Fragment>
           <All>
        <div className='pt-4'>
        <div className={S.content}>
          <div className="row mt-5">
            <h1 className='text-white m-1'>Education</h1>
            <div className="col-12 col-lg-6">
              <div className={S.uni}>
                <div className={S.university}>
                  <img src="/image/zanjan.png" alt="" />
                  <p>University</p>
                  <div className={S.unic}>
                    <span className={S.nameU}>Zanjan University</span>
                    <br />
                    <span className={S.cU}>
                      Bachelor's student of Computer Sciences
                    </span>
                    <br />
                    <span className={S.date}>2019 - Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3">
              <div className={S.uni}>
                <div className={S.school}>
                  <i
                    className="fa fa-graduation-cap fa-4x"
                    aria-hidden="true"
                  ></i>
                  <p>High School</p>
                  <div className={S.unic1}>
                    <span className={S.nameU}>Masome School</span>
                    <br />
                    <span className={S.cU}>
                      Diploma's student of Mathematical Sciences
                    </span>
                    <br />
                    <span className={S.date}>2016 - 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Header />
      </All>
        </Fragment>
     );
}
 
export default educatation;