import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import React from 'react';

import './background1.css'
import './background2.css'
import './background3.css'

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
      <Navbar/>
      <Section>
      
       <div style={{
        marginLeft: "50px",
        marginRight: "100px",}}>
          <h1>Welcome to Our Website</h1>
          <p>This is some content inside the 'Welcome' section.</p>
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


      <Section className="background2" title="Welcome to Our Website">

<div style={{
  marginTop: "300px",
  marginLeft: "50px",
  marginRight: "100px",
}}>
  <h1>Welcome to Our Website</h1>
  <p>This is some content inside the 'Welcome' section.</p>
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

      <Section className="background3" title="Welcome to Our Website">
      <div style={{
  marginTop: "300px",
  marginLeft: "50px",
  marginRight: "100px",
}}>
  <h1>Welcome to Our Website</h1>
  <p>This is some content inside the 'Welcome' section.</p>
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
      {/* ... other sections ... */}
    </div>
  );
}

export default App;

