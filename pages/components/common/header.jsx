import React, { Fragment, useState } from "react";
import S from "../../../styles/main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="d-flex justify-content-md-start justify-content-center ">
        <div className={S.iconMenu}>
          <Link href={"/"}>
            <i
              className={`${
                router.pathname == "/" ? "text-purple-active" : "noactivep"
              } bi bi-house-fill`}
            ></i>
          </Link>
          <Link href={"/about"}>
            <i
              className={`${
                router.pathname == "/about" ? "text-purple-active" : "noactivep"
              } bi bi-person-fill`}
            ></i>
          </Link>
          <Link href={"/skills"}>
            <i
              className={`${
                router.pathname == "/skills" ? "text-purple-active" : "noactivep"
              } bi bi-gear-fill`}
            ></i>
          </Link>
          <Link href={"/educatation"}>
            <i
              className={`${
                router.pathname == "/educatation"
                  ? "text-purple-active"
                  : "noactivep"
              } fa fa-graduation-cap`}
            ></i>
          </Link>
          <Link href={"/projects"}>
            <i
              className={`${
                router.pathname == "/projects" ? "text-purple-active" : "noactivep"
              } bi bi-file-earmark-code-fill`}
            ></i>
          </Link>
          <Link href={"/contact"}>
            <i
              className={`${
                router.pathname == "/contact"
                  ? "text-purple-active"
                  : "noactivep"
              } bi bi-telephone-fill`}
            ></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
