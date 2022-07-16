import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {

  const [ buttonState, setButtonState ] = useState({
    sniff: "Start Sniff", scan: "Start Scan",
    intrusion: "Start Intrusion Check",
    monitoring: "Start Network Monitoring"
  })
  const handleSniffStateChange = (e) =>{
    const eventText = e.target.textContent;
    switch (eventText) {
      case "Start Sniff":
        setButtonState({...buttonState, sniff: "Stop Sniff"});
        break;

      case "Stop Sniff":
        setButtonState({...buttonState, sniff: "Start Sniff"});
        break;

      case "Start Scan":
        setButtonState({...buttonState, scan: "Stop Scan"});
        break;

      case "Stop Scan":
        setButtonState({...buttonState, scan: "Start Scan"});
        break;

      case "Start Intrusion Check":
        setButtonState({...buttonState, intrusion: "Stop Intrusion Check"});
        break;

      case "Stop Intrusion Check":
        setButtonState({...buttonState, intrusion: "Start Intrusion Check"});
        break;

      case "Start Network Monitoring":
        setButtonState({...buttonState, monitoring: "Stop Network Monitoring"});
        break;

      case "Stop Network Monitoring":
        setButtonState({...buttonState, monitoring: "Start Network Monitoring"});
    
      default:
        break;
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
          <button onClick={handleSniffStateChange} className="">{buttonState.sniff}</button>
          <button onClick={handleSniffStateChange} className="">{buttonState.scan}</button>
          <button onClick={handleSniffStateChange} className="">{buttonState.intrusion}</button>
          <button onClick={handleSniffStateChange} className="">Clear Mac Addresses</button>
          <button onClick={handleSniffStateChange} className="">{buttonState.monitoring}</button>
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

       <section className="upload_file">
           <form className="file_upload_form" action="">
             <label htmlFor="">
               <p>Upload Mac Address</p>
               <input type="file" />
             </label>
             <label htmlFor="ip-address">
               <p>Upload IP Address</p>
               <input type="file" />
             </label>
           </form>
       </section>

     </div>
    </main>
  )
}

export default Dashboard;