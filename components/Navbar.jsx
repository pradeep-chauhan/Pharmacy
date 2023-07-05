import { useEffect, useState } from "react";

export default function Navigation() {

  return (
    <nav
      class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <a className="navbar-brand mx-3 " href="#home"><strong className='text-white'>Gurukul Pharmacy</strong></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav navbar-nav-drop">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#aboutUs">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#infrastructure">Infrastructure</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#committees">Committees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}