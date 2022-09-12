import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/contactus.svg'
function ContactUs() {
  return (
    <>
    <section className="form section1">
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <Image src={Image1} className='image-contactus' />
        </div>
        <div className="col-md-6">
          <h2 className="heading-text">Let's talk</h2>
          <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get
            back to you promptly</p>

          <form className="form-info">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">Name</label>
              <input type="text" value="" onchange="uname()" className="form-control" id="exampleInputName"
                aria-describedby="NameHelp" required />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" value="" onchange="uemail()" id="exampleInputEmail1"
                aria-describedby="emailHelp" required />
            </div>

            <div className="mb-3">
              <label for="message" className="form-label">Message</label>
              <textarea type="text" onchange="umessage()" className="form-control" id="exampleInputMessage" rows="4"
                required></textarea>
            </div>
            <button type="submit" onclick="dataofuser()" className="btn buttoninfo  form-control">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default ContactUs