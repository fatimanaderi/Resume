import React, { Fragment } from "react";
import All from "./components/common/all";
import Header from "./components/common/header";
import S from "../styles/contact.module.css";
const contact = () => {
  return (
    <Fragment>
      <All>
        <div className="content2">
          <div className="row">
            <div className="col-12 col-lg-6 mt-lg-3 order-1 order-lg-0 pb-3 mb-5 mb-lg-0">
              <div className={S.formall}>
                <h1>Contact Me</h1>
                <form className={S.contactForm}>
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Phone" />
                  <textarea placeholder="message"></textarea>
                  <button>Submit</button>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6 order-0 order-lg-1 mt-5 mt-lg-0">
              <div className={S.wrapperBgPurple}>
                <div className={S.bgPurple}>
                  <h1>Fatima Naderi</h1>
                  <h4 className="mt-lg-4">Front End Developer</h4>
                  <div className={S.ContactIcon}>
                    <div className={S.eachIcon}>
                      <i className="fa fa-phone fa-lg"></i>
                      <p>+98 992 461 2587</p>
                    </div>
                    <div className={S.eachIcon}>
                      <i className="fa fa-envelope-o fa-lg"></i>
                      <p>fatimaanader@gmail.com</p>
                    </div>
                    <div className={S.eachIcon}>
                      <i className="fa fa-github fa-lg"></i>
                      <p>
                        <a href="https://github.com/Fateme-Naderi">
                          Fatima-Naderi
                        </a>
                      </p>
                    </div>
                    <div className={S.eachIcon}>
                      <i className="fa fa-linkedin fa-lg"></i>
                      <p>
                        <a href="https://www.linkedin.com/in/fatemeh-naderi">
                          fatimanaderi
                        </a>
                      </p>
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
};

export default contact;
