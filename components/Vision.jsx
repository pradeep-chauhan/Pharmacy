import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/7001-removebg-preview.png'

function Vision() {
  return (
    <div>
      <section className='section1 vision'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className="text-center mb-5 text-center heading">
                Our Vision
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <Image className="img-fluid" src={Image1} />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <p className='paragraph'>
                Indian Pharmaceutical Industries are rapidly growing sector which stand the third largest industries among the world in drug manufacturing. Students should have the basic knowledgeabout the drug, its manufacturing, and its uses in different area. Proper knowledge of medicine makes our community healthier which is very important for the growth of our country, So many students of this College giving their services in reputed pharmaceutical industry as well as in government sector. I wish good luck to all the student’s and hope for their bright future.
              </p>
              <h4 className="sub-heading">Mrs Rituraj Gaur </h4>
              <p className="paragraph">Principal, M Pharm ( Pharmaceutics )</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision