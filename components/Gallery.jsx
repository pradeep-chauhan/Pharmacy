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
  { Images: Image1 },
  { Images: Image2 },
  { Images: Image3 },
  { Images: Image4 },
  { Images: Image5 },
  { Images: Image6 },
  { Images: Image7 },
  { Images: Image8 },

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
                images.map(({ Images }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={Images} src={Images} className="gallery-images card-img-top" />
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