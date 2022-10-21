import React from 'react'

function FooterWebsite() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
     
      <div className="container ">
      <hr></hr>
          <div className="row">
            <div className="col col-md-8 col-sm-12 col-xs-12 mt-3 mb-3 d-flex justify-content-start">
              © {year} Gurukul College of Pharmacy. All Rights Reserved
            </div>

            <div className="col col-md-4 col-sm-12 col-xs-12 mt-3 mb-3 d-flex justify-content-end ">
            <h6>Design and Developed By <strong> <a href="https://alvrio.io/">Alvrio Labs</a></strong></h6>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FooterWebsite

/*



*/

/*


<div className='container'>
        <div className='row'>
        <div class="d-flex">
        <div class="p-2 justify-content-start">
        © {year} Vinayak Steel Furniture. All Rights Reserved
        </div>
        <div class="p-2 justify-content-end">Website Design and Developed By <spam> <a href="https://alvrio.io/">Alvrio Labs</a></spam></div>
      </div>
        </div>
      </div>
*/