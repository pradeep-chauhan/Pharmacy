/*
import React from 'react'
import Image from 'next/future/image'
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import Image1 from '../images/student-hand-removebg-preview.png'
import Image2 from '../images/people.jpeg'
import Image3 from '../images/contactus.svg'


var images = [Svg1,Svg2,Image1,Image2,Image3]

function Gallery() {
  return (
    <div>
      {images.map((s) =>{
        <div className="container">
          <div  className="row text-center mx-1 course-gap">
          <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
            <Image src={s} />
          </div>
          </div>
        </div>
      })}

      
    </div>
  )
}

export default Gallery
*/








/*
import React from 'react'
import Image from 'next/future/image'
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import Image1 from '../images/student-hand-removebg-preview.png'
import Image2 from '../images/people.jpeg'
import Image3 from '../images/contactus.svg'
//var images = [Svg1,Svg2,Image1,Image2,Image3]

const images = [
  { Imageq: Image1 },
  { Imageq: Image1 },
  { Imageq: Image3 },
  { Imageq: Svg1 },
  { Imageq: Image1 },
]

export default function Gallery() {
  return (
    <>
      <section className="gallery section1">
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Our Lovely Movements
            </h2>
          </div>
          <div className="container">
            <div className="row text-center mx-1 course-gap">
              {
                images.map(({ Imageq }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={Imageq} src={Imageq} />
                  </div>
                ))
              }



            </div>
          </div>
        </div>
      </section>

    </>


  )
}

*/





/*

<div className="container-fluid">
          <div className="d-flex flex-row flex-wrap justify-content-center">
              
              
              <div className="d-flex flex-column">
                  
              </div>
              
              <div className="d-flex flex-column">
                  
              </div>
              
              <div className="d-flex flex-column">
                  
              </div>
          </div>
      </div>

      */







/*
import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/student1.jpg'
import Image2 from '../images/student2.jpg'
import Image3 from '../images/student3.jpg'
import Image4 from '../images/student4.jpeg'
import Image5 from '../images/student5.jpg'
import Image6 from '../images/student6.jpg'
import Image7 from '../images/student7.jpg'
import Image8 from '../images/student8.jpeg'


function Gallery() {
  return (
    <div>
      <section className="gallery section1">
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Our Lovely Movements
            </h2>
          </div>
          <div className="container">
            <div className="row text-center mx-1 course-gap">
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                <Image src={Image1} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                <Image src={Image2} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                <Image src={Image4} className="galleryimages" />

              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                <Image src={Image3} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-4">
                <Image src={Image5} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-4">
                <Image src={Image6} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-4">
                <Image src={Image7} className="galleryimages" />
              </div>
              <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-4">
                <Image src={Image8} className="galleryimages" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

*/




import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/student1.jpg'
import Image2 from '../images/student2.jpg'
import Image3 from '../images/student3.jpg'
import Image4 from '../images/student4.jpeg'
import Image5 from '../images/student5.jpg'
import Image6 from '../images/student6.jpg'
import Image7 from '../images/student7.jpg'
import Image8 from '../images/student8.jpeg'


const images = [
  { Imageq: Image1 },
  { Imageq: Image2 },
  { Imageq: Image3 },
  { Imageq: Image4 },
  { Imageq: Image5 },
  { Imageq: Image6 },
  { Imageq: Image7 },
  { Imageq: Image8 },

]


export default function Gallery() {
  
  return (
    <>
      <section className="gallery section1">
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Our Lovely Movements
            </h2>
          </div>
          <div className="container">
            <div className="row text-center mx-1 course-gap">
              {
                images.map(({ Imageq }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={Imageq} src={Imageq} className="galleryimages card-img-top" />
                  </div>
                ))
              }



            </div>
          </div>
        </div>
      </section>

    </>


  )
}