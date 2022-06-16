// import { a } from "react-router-dom";
import "./Navbar.css";
import { footerItems, homeImages } from '../../constants';
import { useRef } from 'react';



const Navbar = () => {
  // console.log(footerItems[0])
  const hidden = useRef();

  const toggleDropdown = () =>{
    if(hidden.current.className !== "hidden"){
      // hidden.current.style.className = "fade-out"
      // setTimeout(() => {
        hidden.current.className = "hidden";
      // }, 600);

    }
    else{
      hidden.current.className = "dropdown";
    }
  }

  return(
    <header>
    <nav>
      <div className="title_container">
        <img src={homeImages.logoBlue} alt="" />

        <div className="title">
          <h1 className="title-text">REGREV TECHNOLOGIES</h1>
          <p className="subtitle_text">
            ... we innovate
          </p>
        </div>

      </div>
      <ul>
        <li><a href="#">ORDER A TEST</a></li>
        <li><a href="#">LOG IN</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li className="hamburger">
          <button onClick={toggleDropdown} >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </li>
      </ul>
    </nav>

    <div className="hidden" ref={hidden} >
      <div className="dropdown_navbar">
        <h2>REGREV TECHNOLOGIES</h2>
        <button onClick={toggleDropdown} >
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <ul className="buttons">
        <li><a href="#">ORDER A TEST</a></li>
        <li><a href="#">LOG IN</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>

      <div className="footer_items">
      {
        // console.log(footerItem)
        footerItems.map((item, index) => (
          <ul key={index} >
            {
              item.map((entity, innerIndex) => (
                <li key={innerIndex}>
                  <a href={entity.link}>{entity.text}</a>
                </li>
              ))
            }
          </ul>
        ))
      }
      </div>
    </div>
    <div className="colorful_line"></div>
  </header>
  )
  }

export default Navbar;