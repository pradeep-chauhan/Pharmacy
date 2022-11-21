import React from 'react'

function Eligibility() {
  return (
    <>
      <section itemscope itemtype="https://schema.org/Eligibility" className="course section-margin section-background-color">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2 className="mb-5 mt-5 text-center text-white heading" itemProp='title'> Eligibility Criteria</h2>
            </div>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 mb-5'>
                <p className='sub-heading mb-1 text-white' itemProp='description'>
                  Minimum qualification for admission to Diploma in Pharmacy Part-I course is to pass in any of the following examinations with Physics, Chemistry and Biology or Mathematics.
                </p>
                <div className="my-3" >
                  <div className="bullet-point-1">
                    <ul>
                      <li itemProp='about' className="paragraph text-white">Intermediate examination in Science</li>
                      <li itemProp='about' className="paragraph text-white">The first year of the three year degree course in Science</li>
                      <li itemProp='about' className="paragraph text-white">10+2 examination (academic stream) in Science</li>
                    </ul>
                  </div>
                  <div className="bullet-point-2">
                    <ul>
                      <li itemProp='about' className="paragraph text-white">Pre-degree examination</li>
                      <li itemProp='about' className="paragraph text-white"> Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examination.</li>
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