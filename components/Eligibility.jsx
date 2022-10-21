import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/1611030245phpBxvmpI-removebg-preview.png'
function Eligibility() {
  return (
    <>

      <section className="course section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2 className="mb-5 text-center heading"> Eligibility Criteria</h2>
            </div>
            <div className='row'>

              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12'>
                <p className='sub-heading mb-1'>
                  Minimum qualification for admission to Diploma in Pharmacy Part-I course is to pass in any of the following examinations with Physics, Chemistry and Biology or Mathematics.
                </p>
                <div className="my-3" >
                  <div className="bullet-point-1">
                    <ul>
                      <li className="paragraph">Intermediate examination in Science</li>
                      <li className="paragraph">The first year of the three year degree course in Science</li>
                      <li className="paragraph">10+2 examination (academic stream) in Science</li>
                    </ul>
                  </div>
                  <div className="bullet-point-2">
                    <ul>
                      <li className="paragraph">Pre-degree examination</li>
                      <li className="paragraph"> Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examination.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Eligibility