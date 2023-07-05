import React from 'react'

function FooterWebsite() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div itemscope itemtype="https://schema.org/Footerwebsite" className="container ">
        <div className="row">
          <div className="col-12 col-md-8 col-sm-12 col-xs-12 mt-2  ">
            <p itemprop="datePublished"> © {year} Gurukul College of Pharmacy. All Rights Reserved</p>
          </div>

          <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-2 ">
            <p className='text-end footer-paragraph' itemProp='designer'>Design and Developed By <strong> <a href="https://alvrio.io/" className='footer-website'>Alvrio Labs</a></strong></p>
          </div>
          {/* <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-3 mb-2  text-end">
            <p className='footer footerLink'>Design and Developed By <strong> <a className='text-black' href="https://alvrio.io/">Alvrio Labs</a></strong></p>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default FooterWebsite
