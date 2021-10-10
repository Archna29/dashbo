import React from 'react'
 import './App.css';
 import Card from './Card';
const Navbar=()=>{
    return(
        <>
      <div id="sidenav">
      <i className="fa fa-bars fa-lg " aria-hidden="true"></i>
<ul className="nav flex-column nav-pills" id="sideul">
  <a className="nav-link active bg-success" href="#"><i className="fa fa-home fa-fw fa-lg" aria-hidden="true"></i></a>
  <a className="nav-link" href="#"><i className="fa fa-calendar-o fa-lg"  aria-hidden="true"></i></a>
  <a className="nav-link" href="#"><i className="fa fa-cog fa-fw fa-lg" aria-hidden="true"></i></a>
</ul>
</div>
  
  {/* <div id="nav">

  <ul className="nav justify-content-end" id="horul">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#"><i class="fa fa-bell" aria-hidden="true"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i class="fa fa-circle-thin fa-2x" aria-hidden="true"></i>&nbsp;Mott </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
  </li>
  
</ul>
     </div> */}
     <nav class="navbar" id="nav">
    <h4 class="text-success">hubeg</h4>
    <ul className="nav justify-content-end" id="horul">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#"><i class="fa fa-bell" aria-hidden="true"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i class="fa fa-circle-thin fa-2x" aria-hidden="true"></i>&nbsp;Mott </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
  </li>
  
</ul>
  </nav>
  




        </>
    )
}
export default Navbar;