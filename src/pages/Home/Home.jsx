// import heroVideo from '/assets/home/hero-loop.mp4';
// import Hycient from '/Hycient.png'
import { useState } from "react";
import { exploreMenu } from '../../constants';


import "./Home.css";

const Home = () => {
  // const [ explore, setExplore ] = useState({
  //   title: exploreMenu[0].title, image: exploreMenu[0].image, content: exploreMenu[0].content
  // })
  
  // const loadExploreItem = e =>{
  //   console.log(e)
  //   exploreMenu.forEach(item =>{
  //     if(item.title == e){
  //       setExplore({
  //         title: item.title, image: item.image, content: item.content
  //       })
  //     }
  //   })
  // }


  return(
    <main>
     <div className="main_content">
       <div className="logo_container">
          <h1>Network Monitor</h1>
       </div>

       <div className="action_buttons">
         <div className="buttons_container">
          <button className="">Sniff Packets</button>
          <button className="">Scan Network</button>
          <button className="">Check For Intrusions</button>
          <button className="">Clear Mac Addresses</button>
          <button className="">Monitor Network</button>
         </div>
       </div>

       <div className="console">
         <h3 className="">Console</h3>
         <div className="console_screen">
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>
          <p>address 192.168.0.0.1 active</p>

          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 inactive</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
          <p>address 192.168.0.0.1 disabled</p>
         </div>
       </div>

      <div className="bottom">
        <div className="bottom_container">
          <input type="text" placeholder="Enter email" />
          <button className="">Send To Admin</button>
        </div>
      </div>

     </div>
    </main>
  )
}

export default Home;