import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/gallery/gallery1.jpg'
import Image2 from '../images/gallery/gallery2.JPG'
import Image3 from '../images/gallery/gallery3.JPG'
import Image4 from '../images/gallery/gallery4.JPG'
import Image5 from '../images/gallery/gallery5.JPG'
import Image6 from '../images/gallery/gallery6.JPG'
import Image7 from '../images/gallery/gallery7.JPG'
import Image8 from '../images/gallery/gallery8.JPG'

const images = [
  { picture: Image2 },
  { picture: Image8 },
  { picture: Image3 },
  { picture: Image4 },
  { picture: Image5 },
  { picture: Image6 },
  { picture: Image7 },
  { picture: Image1 }
]

export default function Gallery() {

  return (
    <>
      <section className="gallery section-margin" id='gallery'>
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Gallery
            </h2>
          </div>
          <div className="container">
            <div className="row text-center mx-1 course-gap">
              {
                images.map(({ picture }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={picture} src={picture} className="gallery-images card-img-top img-fluid"
                    loading="lazy"
                    />
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