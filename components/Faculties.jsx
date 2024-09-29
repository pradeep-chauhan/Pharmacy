import React from 'react'

const facilitate = [
  {
    "heading": "Aseem Shrivastava",
    "paragraph": "Principal"
  },
  {
    "heading": "Nikhil Kumar",
    "paragraph": "Assistant Professor"
  },
  {
    "heading": "Nirmal Solanki",
    "paragraph": "Assistant Professor"
  },
  {
    "heading": "Mangal Hari Khandelwal",
    "paragraph": "Assistant Professor"
  },
  {
    "heading": "Nikhil Kumar dave",
    "paragraph": "Assistant Professor"
  },
  {
    "heading": "Hemant kumar Jain",
    "paragraph": "Lecturer"
  },
  {
    "heading": "Dharam Chand Kalal",
    "paragraph": "Lecturer"
  },
  {
    "heading": "Rohit Yogi",
    "paragraph": "Lecturer"
  },
  {
    "heading": "Lalit Choudhary",
    "paragraph": "Lab Assistant"
  },
  {
    "heading": "Pragya Patidar",
    "paragraph": "Lab Assistant"
  },
  {
    "heading": "Shanta Menaria",
    "paragraph": "Liabrarian"
  },
  {
    "heading": "Itisha Patel",
    "paragraph": "Accountant"
  },
  {
    "heading": "Udailal Gameti",
    "paragraph": "Peon"
  },
  {
    "heading": "Suraj Bal",
    "paragraph": "Peon"
  },
  {
    "heading": "Pushpa Bai",
    "paragraph": "Peon"
  },
]
function Faculties() {
  return (
    <>
      <section itemscope itemtype="https://schema.org/Faculties" className="faculties section-margin ">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
              <h2 itemProp='heading' className="mb-5 text-center heading text-black"> Meet Our Staff</h2>
            </div>
          </div>
          <div className='row'>
            {facilitate.map((value) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="card card-service  mx-2 my-2">
                  <div className="card-body ">
                    <h5 itemProp='heading' className="sub-heading text-center my-3">{value.heading}</h5>
                    <p itemProp='description' className="subparagraph text-center">{value.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faculties
