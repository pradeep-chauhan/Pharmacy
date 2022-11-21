import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/gallery/gallery1.jpg'
import Image2 from '../images/gallery/gallery13.JPG'
import Image3 from '../images/gallery/gallery3.JPG'
import Image4 from '../images/gallery/gallery4.JPG'
import Image5 from '../images/gallery/gallery15.JPG'
import Image6 from '../images/gallery/gallery6.JPG'
import Image7 from '../images/gallery/gallery20.JPG'
import Image8 from '../images/gallery/gallery8.JPG'
import Image9 from '../images/gallery/gallery14.JPG'
import Image10 from '../images/gallery/gallery17.JPG'
import Image11 from '../images/gallery/gallery19.JPG'
import Image12 from '../images/gallery/gallery12.JPG'

const images = [
  { picture: Image1 },
  { picture: Image2 },
  { picture: Image3 },
  { picture: Image4 },
  { picture: Image5 },
  { picture: Image6 },
  { picture: Image7 },
  { picture: Image8 },
  { picture: Image9 },
  { picture: Image10 },
  { picture: Image11 },
  { picture: Image12 },

]

export default function Gallery() {

  return (
    <>
      <section itemscope itemtype="https://schema.org/Gallary" className="gallery section-margin" id='gallery'>
        <div>
          <div className="container">
            <h2 className="text-center mb-5 text-center heading">
              Gallery
            </h2>
          </div>
          <div className="container ">
            <div itemProp='image' className="row text-center mx-1 course-gap">
              {
                images.map(({ picture }) => (
                  <div className="col-sm-6 col-xs-6 col-lg-3 col-xl-3 col-md-6 mt-3">
                    <Image key={picture} src={picture} className="gallery-images card-img-top img-fluid"
                    loading="eager"
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