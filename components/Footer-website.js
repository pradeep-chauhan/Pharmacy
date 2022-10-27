import React from 'react'

function FooterWebsite() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
     
      <div className="container ">
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 col-xs-12 mt-3 mb-2 ">
              © {year} Gurukul College of Pharmacy. All Rights Reserved
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-3 mb-2  ">
            <p>Design and Developed By <strong> <a href="https://alvrio.io/">Alvrio Labs</a></strong></p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FooterWebsite
