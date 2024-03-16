import React, { useEffect, useState } from "react";
import "./MainHeader.scss";
import { FiMenu } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { $Current_Width, $Side_Menu_Index } from "../../Store/atoms";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import Logo from "../../assets/Logo.png"
import { BsCart4 } from "react-icons/bs";
import { MdPerson } from "react-icons/md";


export default function MainHeader() {
  const [current_width] = useRecoilState($Current_Width);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [sideMenuIndex, setSideMenuIndex] = useRecoilState($Side_Menu_Index);

  const headerLinKs = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/men", name: "Men" },
    { path: "/women", name: "Women" },
    { path: "/perfumes", name: "Buy Perfumes" },
    { path: "/exclusive", name: "Exclusive" },
    { path: "/contact", name: "Contact" },
  ];
  const location = useLocation();

  useEffect(() => {
    let finalIndex = null;
    headerLinKs.filter((link, index) => {
      if (Link.path == location.pathname) {
        finalIndex = index;
      }
    });
    setCurrentIndex(finalIndex);
  }, []);
  return (
    <>
      <header className="col-12 " id="MainHeader">
      {current_width <= 767 && sideMenuIndex == true ? <SideMenu /> : null}
        <img src={Logo} />
        {current_width <= 767 ? (
          <FiMenu className="icon"
          onClick={(e) => {
            e.stopPropagation();
            sideMenuIndex == true
              ? setSideMenuIndex(false)
              : setSideMenuIndex(true);
          }}/>
        ) : (
          <nav>
            {headerLinKs.map((link, index) => (
              <Link
                onClick={() => {
                  setCurrentIndex(index);
                }}
                key={index}
                to={link.path}
                className={CurrentIndex == index ? "activeLink" : null}
              >
                {link.name}
              </Link>
            ))}
          </nav> 
          
        )}
        <div className="icons d-flex gap-4">
        <BsCart4 className="icon"/>
        <MdPerson className="icon"/>
        </div>
      </header>
    </>
  );
}
