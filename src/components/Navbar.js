import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  

    const [selectedSection, setSelectedSection] = useState('home');

    const handleNavClick = (section) => {
      const element = document.getElementById(section);
  
      if (element && section !== selectedSection) {
        setSelectedSection(section);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(()=>{
      setSelectedSection(selectedSection)
    },[selectedSection])


  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  };


  return (
    <div className={`navbar  ${state ? "whiteBg" : "transparent"} `}>
      <div className="container">
        {/* <div className="navbar__content">
          <div className="navbar__left">
            <img
              src={state ? "/images/nitex_logo.png" : "/images/nitex_logo.png"}
              alt="logo"
            />
          </div>
          <ul className="navbar__right">
            
            <li>
              <a href="#" onClick={() => handleNavClick("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavClick("aboutUs")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavClick("services")}>
                Services
              </a>
            </li>

            <li>
              <a href="#" onClick={() => handleNavClick("OurMission")}>
                Our Mission
              </a>
            </li>

            <li>
              <a href="#" onClick={() => handleNavClick("OurTeam")}>
                 Our Team
              </a>
            </li>

            <li>
              <a href="#" onClick={() => handleNavClick("ShowCase")}>
                ShowCase
              </a>
            </li>

            <li>
              <a href="#" onClick={() => handleNavClick("Testimonial")}>
               Testimonial
              </a>
            </li>

            <li>
              <a href="#" onClick={() => handleNavClick("ContactUs")}>
               Contact
              </a>
            </li>

          </ul>
        </div> */}

<nav className="navigation navbar__content">
       <div className="navbar__left">
            <img
              src={state ? "/images/nitex_logo.png" : "/images/nitex_logo.png"}
              alt="logo"
            />
          </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
       
       <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        
          <ul className="navbar__right">
            
            <li>
              <a href="#home" onClick={() => handleNavClick("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#aboutUs" onClick={() => handleNavClick("aboutUs")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => handleNavClick("services")}>
                Services
              </a>
            </li>

            <li>
              <a href="#OurMission" onClick={() => handleNavClick("OurMission")}>
                Our Mission
              </a>
            </li>

            <li>
              <a href="#OurTeam" onClick={() => handleNavClick("OurTeam")}>
                 Our Team
              </a>
            </li>

            <li>
              <a href="#showcase" onClick={() => handleNavClick("showcase")}>
                ShowCase
              </a>
            </li>

            <li>
              <a href="#Testimonial" onClick={() => handleNavClick("Testimonial")}>
               Testimonial
              </a>
            </li>

            <li>
              <a href="#ContactUs" onClick={() => handleNavClick("ContactUs")}>
               Contact
              </a>
            </li>

          </ul>
      </div>
    </nav>



      </div>
    </div>
  );
};

export default Navbar;
