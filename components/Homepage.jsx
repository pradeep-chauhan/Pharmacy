import React from 'react'
import { Whatsapp } from 'react-bootstrap-icons'

const Homepage = () => {
  return (
    <section id='home' className='mt-5'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-interval="10000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2">
          </button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3">
          </button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="image-1 homepage-image-2">
            </div>
          </div>
          <div class="carousel-item">
            <div class="image-1 homepage-image-1">
            </div>
          </div>
          <div class="carousel-item">
            <div class="image-1 homepage-image-3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class=" move-text card-box card-move" >
        <h1 className=" text-center heading-home home-heading">Best Pharma Education</h1>
        <h1 className="text-center heading-home home-heading">Solution</h1>

        <div className='text-center home-paragraph'>
        <p>Gurukul College of Pharmacy managed by Nahar Singh mata Jan vikas sanasthan. The college is endowed with excellent infrastructure,state of the art laboratories and a team of dedicated faculty members with affluent research interests.</p>
      </div>
        <div className="mt-3">
          <button type="button" className="btn button button-homepage"><a href="#contactus" className="button-homepage">Contact Us</a></button>
        </div>
      </div>
      <div className="icon-bar">
        <a href="https://api.whatsapp.com/send?phone=918107973076" className="float whatsapp" target="_blank">
          <Whatsapp className='className="fa fa-whatsapp my-float"'></Whatsapp>
        </a>
      </div>
    </section>
  )
}

export default Homepage