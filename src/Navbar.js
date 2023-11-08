import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming your styles are defined here
import React from 'react';
import './logo1.css'
import logoImage from './logo1.jpg'; //


function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg transparent-navbar">
    <div className="container-fluid">
    <a className="navbar-brand" href="#home">
    <img src={logoImage} alt="LOGO" className="logo1" />
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          {/* You can add a disabled link or more functional links as needed */}
        </ul>
        
        
      </div>
    </div>
  </nav>

 

   );
}

export default Navbar;


//     <div className="App">
// <nav className="navbar navbar-expand-lg transparent-navbar">
//       <div class="container-fluid">
//     <a class="navbar-brand" href="#">LOGO</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>