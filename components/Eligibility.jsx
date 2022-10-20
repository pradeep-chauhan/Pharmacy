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
              <h2 className="mb-5 text-center heading"> Eligibility </h2>
            </div>
            <div className='row'>
              
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12'>
                <p className='sub-heading mb-1'>
                  Minimum qualification for admission to Diploma in Pharmacy Part-I course is to pass in any of the following examinations with Physics, Chemistry and Biology or Mathematics.
                </p>
                {/* <ul>
                  <li>
                    Intermediate examination in Science;
                  </li>
                  <li>
                    The first year of the three year degree course in Science,
                  </li>
                  <li>
                    10+2 examination (academic stream) in Science;
                  </li>
                  <li>
                    Pre-degree examination;
                  </li>
                  <li>
                    Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examination.
                  </li>
                </ul> */}
                   <div class="my-3" >
                                      <div class="bullet-point-1">
                                        <ul>
                                          <li className="paragraph">Intermediate examination in Science</li>
                                          <li className="paragraph">The first year of the three year degree course in Science</li>
                                          <li className="paragraph">10+2 examination (academic stream) in Science</li>
                                        </ul>
                                          
                                      </div>
                                      <div class="bullet-point-2">
                                      <ul>
                                          <li className="paragraph">Pre-degree examination</li>
                                          <li className="paragraph"> Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examination.</li>
                                        </ul>
                                          
                                      </div>
                                  </div>
                {/* <p className='course-paragraph'>Intermediate examination in Science</p>
                <p className='course-paragraph'>The first year of the three year degree course in Science</p>
                <p className='course-paragraph'>10+2 examination (academic stream) in Science</p>
                <p className='course-paragraph'>Pre-degree examination</p>
                <p className='course-paragraph'>Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examination.</p> */}
              </div>
              {/* <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-sm-12'>
                <Image className="img-fluid" src={Image1} />
              </div> */}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Eligibility