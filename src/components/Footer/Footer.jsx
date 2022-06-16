import './Footer.css';
import { footerItems, homeImages } from '../../constants';

export default function Footer(){
  return(
    <footer>
      <div className="footer_container">
        <div className="footer_left">
          <div className="button_group">
            <ul className="buttons">
              <li><a href="#">ORDER A TEST</a></li>
              <li><a href="#">LOG IN</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
            <ul className="social">
              <li><a href=""><img src={homeImages.fbWhite} alt="" /></a></li>
              <li><a href=""><img src={homeImages.inWhite} alt="" /></a></li>
              <li><a href=""><img src={homeImages.twWhite} alt="" /></a></li>
              <li><a href=""></a></li>
            </ul>
        </div>
          </div>
        <div className="footer_right">
          {
            footerItems.map((item, index)=>(
              <ul key={index}>
                {
                  item.map((entity, innerIndex)=>(
                    <li key={innerIndex}><a href={entity.link}>{entity.text}</a></li>
                  ))
                }
              </ul>
            ))
          }
          <ul>
            <li><a href="">Responsible Disclosure</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Media Library</a></li>
            <li><a href="">Document Library</a></li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <h2 className="title">REGREV TECHNOLOGIES</h2>
        <ul>
          <li>All Content Copyright 2022</li><span>|</span>
          <li><a href="">Privacy Policy</a></li><span>|</span>
          <li><a href="">Terms Of Use</a></li><span>|</span>
          <li><a href="">Notice Of Privacy Practices</a></li>
          
        </ul>
      </div>
    </footer>
  )
}