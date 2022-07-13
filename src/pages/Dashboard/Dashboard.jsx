import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {

  const [ sniffState, setSniffState ] = useState("Start Sniff")
  const handleSniffStateChange = () =>{
    if (sniffState === "Start Sniff") {
      setSniffState("Stop Sniff")
    }else if(sniffState === "Stop Sniff"){
      setSniffState("Start Sniff")
    }
  }
  

  return(
    <main className="dashboard_body" >
     <div className="main_content">
       <div className="logo_container">
          <h1 className="centralize" >Network Monitor</h1>
       </div>

       <div className="action_buttons">
         <div className="buttons_container">
          <button onClick={handleSniffStateChange} className="">{sniffState}</button>
          <button className="">Scan Network</button>
          <button className="">Check For Intrusions</button>
          <button className="">Clear Mac Addresses</button>
          <button className="">Monitor Network</button>
         </div>
       </div>

       <div className="console">
         <h3 className="orange-text">Console:</h3>
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

     </div>
    </main>
  )
}

export default Dashboard;