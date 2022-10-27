import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/7001.jpg'

function Vision() {
  return (
    <div>
      <section className='section1 vision'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Our Vision</h1>
            </div>
          </div>
          <div className='row'>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <Image src={Image1} />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
              Indian Pharmaceutical Industries are rapidly growing sector which stand the third largest industries among the world in drug manufacturing. Students should have the basic knowledgeabout the drug, its manufacturing, and its uses in different area. Proper knowledge of medicinemakes our community healthier which is very important for the growthof our country. To fulfillthisdream we promote high quality education, training and research in Pharmaceutical science, produce competent pharmacist with entrepreneurship and innovative skills. So many students ofthis College giving their services in reputed pharmaceutical industry as well as in government sector. I wish good luck to all the student’s and hope for their bright future.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision