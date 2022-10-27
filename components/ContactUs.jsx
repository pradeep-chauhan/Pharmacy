import Image from 'next/future/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Contact from '../images/contact-img.svg'
function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // async function onSubmit(values) {
  //   let config = {
  //     method: "post",
  //     url: 'http://localhost:3000/api/contact',
  //     headers: { "Content-Type": "application/json" },
  //     data: values
  //   };
  //   alert("")
  //   try {
  //     const response = await axios(config)
  //     console.log(response)
  //     if (response.data.status == 200) {
  //       console.log('success')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }


  async function onSubmit(values) {
    let config = {
      method: "post",
      url: 'http://localhost:3000/api/contact',
      headers: { "Content-Type": "application/json" },
      data: values
    };
    alert("We will get back to you shortly")
  }
  return (
    <div>
      <section className="form" id='contactus' onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <div itemProp='image' className="col-md-6 ">
              <Image src={Contact} className='image-contactus' />
            </div>
            <div className="col-md-6">
              <h2 itemProp='name' className='heading'>Contact Us</h2>
              <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>
              <form className="form-info">
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label" name="name">Name</label>
                  <input type="text" {...register('name', {
                    required: {
                      value: true,
                      message: "You must enter your name"
                    },
                    minLength: {
                      value: 2,
                      message: "name cannot be less than 2"
                    },
                    pattern: {
                      pattern: /^[A-Za-z]+$/
                    },
                    maxLength: {
                      value: 75,
                      message: "name cannot be more than 75"
                    },
                  })} className="form-control" id="exampleInputName" aria-describedby="NameHelp" required />
                  <span id="nameerror" className="text-danger font-weight-bold" ></span>
                  {errors.name && <p>Please check the name , name cannot be less than 2 </p>}
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
                  <input type="email" {...register("email", {
                    required: {
                      value: true,
                      message: "You must enter your Email"
                    }, minLength: {
                      value: 10,
                      message: "Email cannot be less than 5"
                    },
                    pattern: {
                      pattern: /^[A-Za-z]+$/
                    },
                    maxLength: {
                      value: 75,
                      message: "Email cannot be more than 75"
                    },
                  })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                  <span id="emailerror" className="text-danger font-weight-bold" ></span>
                  {errors.email && <p>Please check the Email</p>}
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label" name="message" >Message</label>
                  <textarea type="text"{...register("message")} className="form-control" id="exampleInputMessage" rows="4" required></textarea>
                </div>
                <button type="submit" onClick={(e) => { handleSubmit(e) }} className="buttoninfo form-control">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactUs