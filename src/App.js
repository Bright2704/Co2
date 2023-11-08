import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import React from 'react';

import './background1.css'
import './background2.css'
import './background3.css'
import './logo1.css'
import logoImage from './logo1.jpg';


const Section = ({ className, title, children }) => (
  <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
);




function App() {
  
  return (
    <div > 
      <div className="background1"> 
      <div>
      
      <Navbar />
      
     
      
    </div>
      <Section>
      
       <div style={{
        marginTop: "300px",
        marginLeft: "50px",
        marginRight: "100px",}}>
          
          <p>This is some content inside the 'Welcome' section.</p>
          <h1>Welcome to Our Website</h1>
          <a className="btn animate" href="/launches/mission/?missionId=sl-6-26" aria-label="REWATCH Starlink mission" role="button" style={{
    opacity: 1,
    visibility: 'inherit',
    transform: 'translate3d(0px, 0px, 0px)'
  }}>
    <div className="hover"></div>
    <span className="text">REWATCH</span>
  </a>
        </div>
      </Section>
      </div>
      
<div style={{
  marginTop: "0px",
}}></div>
     <Section className="background2" >
     <h2>
    <section id="about" className="section">
      <img src={require('./logo1.jpg')} alt="About" className="logo1" />
    </section>
  </h2>
      <div style={{
  marginTop: "400px",
  marginLeft: "20pa",
  marginRight: "100px",
}}>
  
  <p>This is some content inside the 'Welcome' section.</p>
  <h1>Welcome to Our Website</h1>
  <a className="btn animate" href="/launches/mission/?missionId=sl-6-26" aria-label="REWATCH Starlink mission" role="button" style={{
    opacity: 1,
    visibility: 'inherit',
    transform: 'translate3d(0px, 0px, 0px)'
  }}>
    <div className="hover"></div>
    <span className="text">REWATCH</span>
  </a>
</div>

</Section>

      <Section className="background3"  > 

      <section id="pricing" className="section white-text">
  <img src={logoImage} alt="Pricing" className="logo1" />
  {/* ... rest of your pricing section content ... */}
</section>
 
      <div style={{
  marginTop: "400px",
  marginLeft: "50px",
  marginRight: "100px",
}}>
  
<p style={{ color: 'white' }}>This is some content inside the 'Welcome' section.</p>
<h1 style={{ color: 'white' }}>Welcome to Our Website</h1>
  <a className="btn animate" href="/launches/mission/?missionId=sl-6-26" aria-label="REWATCH Starlink mission" role="button" style={{
       color: 'white',
       opacity: 1,
       visibility: 'inherit',
       transform: 'translate3d(0px, 0px, 0px)'
   
  }}>
    <div className="hover"></div>
    <span className="text">REWATCH</span>
  </a>
</div>

      </Section>
      {/* ... other sections ... */}
    </div>
  );
}

export default App;

