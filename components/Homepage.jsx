import React from 'react'
import { Nav, Button, Container } from 'react-bootstrap';
import Image from 'next/future/image'
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import Image1 from '../images/student-hand-removebg-preview.png'



function Homepage() {
  return (
    <div>
      <section className="home section1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                  <a className="navbar-brand mx-3" href="#">Gurukul Pharmacy</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mx-auto">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mx-2" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mx-2" href="#">Course</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mx-2" href="#">Academics</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Nav>
              <div className="container  ">

                <div className="row mx-2">
                  <div className="d-none d-sm-block d-md-block">
                    <Image src={Svg1} className='homepagesvg1' />
                  </div>
                  <h1 className=" mt-5 homepageheading">Your Best </h1>

                  <h1 className=" mt-2 homepageheading">Education</h1>
                  <h1 className="mt-2  homepageheading">Solution</h1>
                </div>
                <div className="mt-3 mx-2">
                  <button type="button" className="btn button buttonhomepage">Get Started</button>

                </div>

              </div>
              <div className="d-none d-sm-block d-md-block ">
                <Image className="homepagesvg2" src={Svg2}  />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 home-background">
              <div className="container backgroundhomepage">
                <div className="row">
                  <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                    <div className="d-none d-sm-block d-md-block d-xs-block ">
                      <svg className="mt-5 roundtext svgText" viewBox="0 0 100 100" >
                        <defs>
                          <path id="circle"
                            d="
                          M 50, 50
                          m -37, 0
                          a 37,37 0 1,1 74,0
                          a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text className="round-text">
                          <textPath xlinkHref="#circle">
                            Gurukul Pharmacy Education
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                    <div className="imagehomepage mt-4">
                    </div>
                    <div>
                      <p className="mt-3 paragraphhomepage">This university of Gurukul Pharmacy is leading with mordern university
                        with a
                        tradition of providing academic excellence dating back nearly 190 years</p>
                    </div>
                    <div className="mt-3">
                      <button type="button" className="btn button btn-light p-3">Play Video </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imagehomepage2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block d-md-block">
              <Image className="imagehomepage3" src={Image1} />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Homepage