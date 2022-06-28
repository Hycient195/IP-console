import './Home.css';
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <body className='home_body' >
      <video  autoPlay preload  loop muted className="home_page_container">
        <source src="/assets/home/network background hd.mp4" type="video/mp4" />
        browser does not support video playback
      </video>
     <div className="home_page_content">
       <div className="centralize">
         <div className="texts">
          <h1>
             Administrator Network Monitor
          </h1>
          <h4>Analysis, Report Generation and Troubleshooting</h4>
         </div>

         {/* <h1>hello</h1> */}
         
        <Link to="/login" className="" >Sign In</Link>
       </div>
     </div>
    </body>
  )
}