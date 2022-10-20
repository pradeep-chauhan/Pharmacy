import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/Faculty.jpg'
const facilitate = [
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,
   
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
  {
    "id": "1",
    "image": Image1,
    "heading": "Dr. Dhanraj Patidar",
    "paragraph": "Pharmaceutics"
  },
]
function Faculties() {
  return (
    <>
      <section className="faculties section1 section-background-color">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
            <h2 className="mb-5 text-center heading text-white"> Faculties</h2>
          </div>
        </div>
        <div className='row'>
          {
            facilitate.map((value) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-5">
                <div className="card card-service  mx-2 my-2">
                <Image src={Image1} className='image-service' /> 
                <div className="card-body">
                <h5 className="sub-heading">{value.heading}</h5>
                <small className="paragraph">{value.paragraph}</small>
              </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      </section>
    </>
  )
}

export default Faculties


// {
//   data.map((value) => (

//     <div className="col-sm-12 col-lg-4 col-xl-3 col-md-6 ">
//       <div className="card courses-card" >
//         <Image key={value.id} src={value.image} className="card-img-top" width={250} height={200} layout="responsive" />
//         <div className="card-body">
//           <h5 className="card-title" >
//             {value.heading}
//           </h5>
//           <p className="card-text card-para d-flex justify-content-start"> {value.body}</p>
//           <a className=" card-text-link d-flex justify-content-end" href="">Read more</a>
//         </div>
//       </div>
//     </div>
//   ))
// }