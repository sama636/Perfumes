import React, { useEffect, useState } from "react";
import "./MainHeader.scss"
// import { IoMenuSharp } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { $Current_Width } from "../../Store/atoms";
import { Link, useLocation } from "react-router-dom";

export default function MainHeader() {
  // const [current_width] = useRecoilState($Current_Width);
  // const [CurrentIndex, setCurrentIndex] = useState(0);

  // const headerLinKs = [
  //   { path: "/", name: "Home" },
  //   { path: "/about", name: "About" },
  // ];
  // const location = useLocation();

  // useEffect(() => {
  //   let finalIndex = null;
  //   headerLinKs.filter((link, index) => {
  //     if (Link.path == location.pathname) {
  //       finalIndex = index;
  //     }
  //   });
  //   setCurrentIndex(finalIndex)
  // }, []);
  return (
    <>
      {/* <header className="col-12" id="MainHeader">
        <img />
        {current_width <= 767 ? (
          <IoMenuSharp />
        ) : (
          <nav>
            {headerLinKs.map((link, index) => {
              return (
                <Link
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  key={index}
                  to={link.path}
                  // className={CurrentIndex === index ? "activeLink" : null}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </header> */}
      <h1>sama</h1>
    </>
  );
}
