import "./Dashboard.css";

const Dashboard = () => {

  return(
    <main className="dashboard_body" >
     <div className="main_content">
       <div className="logo_container">
          <h1 className="centralize" >Network Monitor</h1>
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