import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/gallery/student1.jpg'
import Image2 from '../images/gallery/student2.jpg'
import Image3 from '../images/gallery/student3.jpg'
import Image4 from '../images/gallery/student4.jpeg'
import Image5 from '../images/gallery/student5.jpg'
import Image6 from '../images/gallery/student6.jpg'
import Image7 from '../images/gallery/student7.jpg'
import Image8 from '../images/gallery/student8.jpeg'

const images = [
  { picture: Image1 },
  { picture: Image2 },
  { picture: Image3 },
  { picture: Image4 },
  { picture: Image5 },
  { picture: Image6 },
  { picture: Image7 },
  { picture: Image8 }
]

export default function Gallery() {
  
  return (
    <>
      <section className="gallery section-margin" id='gallery'>
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Our Lovely Movements
            </h2>
          </div>
          <div className="container">
            <div className="row text-center mx-1 course-gap">
              {
                images.map(({ picture }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={picture} src={picture} className="gallery-images card-img-top img-fluid" />
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