import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/7001-removebg-preview.png'

function Vision() {
  return (
    <div>
      <section itemscope itemtype="https://schema.org/Vision" className='section-margin vision'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className="text-center mb-5 text-center heading" itemProp='name'>
                Our Vision
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className="col-xl-12 col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <p className='paragraph' itemProp='description'>
                Indian Pharmaceutical Industries are rapidly growing sector which stand the third largest industries among the world in drug manufacturing. Students should have the basic knowledgeabout the drug, its manufacturing, and its uses in different area. Proper knowledge of medicine makes our community healthier which is very important for the growth of our country, So many students of this College giving their services in reputed pharmaceutical industry as well as in government sector. I wish good luck to all the student’s and hope for their bright future.
              </p>
              <h4 className="sub-headings fw-bold" itemProp='Principal'>Mrs Rituraj Gaur </h4>
              <p className="paragraphs fw-bold" itemProp='description'>Principal, M Pharm ( Pharmaceutics )</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision