import React from 'react'

function FooterWebsite() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
     
      <div className="container ">
      <hr></hr>
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 col-xs-12 mt-3 mb-3 d-flex justify-content-start">
              © {year} Gurukul College of Pharmacy. All Rights Reserved
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-3 mb-3 d-flex justify-content-end ">
            <h6>Design and Developed By <strong> <a href="https://alvrio.io/">Alvrio Labs</a></strong></h6>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FooterWebsite
