import React, { Fragment } from "react";
import All from "./components/common/all";
import Header from "./components/common/header";
import S from "../styles/skills.module.css";

const skils = () => {
  return (
    <Fragment>
      <All>
        <div className="pt-5 pb-5">
          <div className="content4 ">
            <div className="row ">
              <div className={S.titleSkill}>
                <h1>Skills</h1>
              </div>
              <div className="col-12 col-lg-6 mt-1">
                <div className={S.wrapperProgress}>
                  <div className={S.wrappr}>
                    <span>Python 3</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "50%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1s" }}
                        ></div>
                      </div>
                      <p>50%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Java Script</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "65%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <p>65%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>React.js</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "65%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.2s" }}
                        ></div>
                      </div>
                      <p>65%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Next.js</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "65%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1s" }}
                        ></div>
                      </div>
                      <p>65%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Redux.js</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "70%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.2s" }}
                        ></div>
                      </div>
                      <p>70%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>ECMA Script</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "70%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.2s" }}
                        ></div>
                      </div>
                      <p>70%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-2">
                <div className={S.bgsqure}></div>
                <div className={S.bgsqure1}></div>
                <div className={S.bgsqure2}></div>
                <div className={S.wrapperProgress}>
                  <div className={S.wrappr}>
                    <span>CSS3</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "80%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Sass</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "70%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.2s" }}
                        ></div>
                      </div>
                      <p>70%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>HTML5</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "80%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Bootstrap 4</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "80%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>SEO</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "50%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1s" }}
                        ></div>
                      </div>
                      <p>50%</p>
                    </div>
                  </div>
                  <div className={S.wrappr}>
                    <span>Git / GitHub</span>
                    <div className={S.progress}>
                      <div className={S.sp} style={{ width: "70%" }}>
                        <div
                          className={S.progressValue}
                          style={{ animationDuration: "1.2s" }}
                        ></div>
                      </div>
                      <p>70%</p>
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

export default skils;
