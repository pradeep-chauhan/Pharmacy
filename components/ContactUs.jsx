import React from 'react'
import Image from 'next/image'
import Image1 from '../images/contactus/placeholder.png'
import Image2 from '../images/contactus/phone.png'
import Image3 from '../images/contactus/email.png'

const ContactUs = () => {
  return (
    <div className='section-background-color '>
      <div className="container" id='contact'>
        <div className="row ">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
            <h3 className='mb-3 text-heading text-white fs-3' itemProp='name'>Contact Us</h3>
            <p className='mb-4 fs-5 text-white' itemProp='description'>We Will love to here from you</p>
            <div className='row mt-3 mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image1} alt="Gurukul location" itemProp='image'/>
              </div>
              <div className='col-md-10 col-xl-10 col-lg-10 col-sm-11'>
                <p className='contactUs text-white' itemProp='address'>Gurukul College of Pharmacy
                Village - Budal, Tehsil- Girwa, Udaipur, Rajasthan 313703
              </p>
              </div>
            </div>
            <div className='row mx-1 mt-2'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image2} alt="Gurukul Phone" itemProp='image'/>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
              <a href="tel:+918107973076" className="text-white" itemProp='number'>+91-8107973076</a>
              </div>
            </div>
            <div className='row mt-3 mx-1'>
              <div className='col-md-1 col-xl-1 col-lg-1 col-sm-1'>
                <Image src={Image3} alt="Gurukul email" itemProp='image'/>
              </div>
              <div className='col-md-11 col-xl-11 col-lg-11 col-sm-11'>
              <a href="mailto:gurukulcollegepharmacy@gmail.com" className="text-white" itemProp='email'> gurukulcollegepharmacy@gmail.com </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14529.2940673613!2d73.925506!3d24.4395586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967c0c89381f373%3A0x3d61c5ac06b2bf9a!2sThe%20Gurukul%20college%20%26%20School!5e0!3m2!1sen!2sin!4v1666853344782!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs