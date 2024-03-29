import React from 'react'

function Course() {
  return (
    <>
      <section itemscope itemtype="https://schema.org/Course" className="course section-margin" id='aboutUs'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h2 itemProp='title' className="mb-5 mt-5 text-center heading"> About Us </h2>
            </div>
            <div className=''>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12'>
                  <p itemProp='description' className='about-us-paragraph'>
                    Diploma in Pharmacy (D.Pharma) is a two-year academic programme streamlined to endow in-depth knowledge of science and technique behind the formulation of pharmacy practice and medicines management. The programme fundamentally provides an overview of the conjecture principles and practices implicated in the science of pharmacy including core subjects like Pharmaceutical Chemistry Pharmacognosy Pharmacology and Pharmaceutics.
                  </p>
                  <p itemProp='description' className='about-us-paragraph'>The curriculum and syllabus for the programme are as per the Pharmacy Council of India (PCI) the statutory body governing pharmacy profession in India. In this programme students will gain insights into the chemical and physical properties chemical structure and uses of pharmaceutical formulae. </p> <p className='about-us-paragraph' >The programme encompasses knowledge about the natural medicines which are obtained from plants animals marine and biological sources</p>
                  <p itemProp='description' className='about-us-paragraph'>In addition the programme focuses on imparting knowledge about drugs used for different diseases dosage absorption mechanism of action drug action drug interaction adverse reaction. Candidates seeking advance knowledge in the discipline can apply for higher education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
