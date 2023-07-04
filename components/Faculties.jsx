import React from 'react'
const facilitate = [
  {
    "id": "1",
    "heading": "Rituraj Gaur",
    "paragraph": "Principal"
  },
  {
    "id": "2",
    "heading": "Vikram Choudhary    ",
    "paragraph": "Assistant Professor"
  },
  {
    "id": "3",
    "heading": "Shailesh Sen ",
    "paragraph": "Assistant Professor"
  },
  {
    "id": "4",
    "heading": "Rahul Pasola",
    "paragraph": "Lecturer"
  },
  {
    "id": "5",
    "heading": "Rohit Yogi",
    "paragraph": "Lecturer"
  },
  {
    "id": "6",
    "heading": "Prashant Mogra",
    "paragraph": "Lecturer"
  },
  {
    "id": "7",
    "heading": "Hemant k. Jain",
    "paragraph": "Lecturer"
  },
  {
    "id": "8",
    "heading": "Shanta Menaria",
    "paragraph": "Liabrarian"
  },
  {
    "id": "9",
    "heading": "Itisha Patel",
    "paragraph": "Accountant"
  },
  {
    "id": "10",
    "heading": "Guddi Patel",
    "paragraph": "Computer Assistant"
  },
  {
    "id": "11",
    "heading": "Hitesh Sirvi",
    "paragraph": "Lab Assistant"
  },
  {
    "id": "12",
    "heading": "Shravan K. Choudhary",
    "paragraph": "Lab Assistant"
  },
  {
    "id": "13",
    "heading": "Udailal Gameti",
    "paragraph": "Store Keepar"
  },
  {
    "id": "14",
    "heading": "Suraj Bal",
    "paragraph": "Lab Att./Helper"
  },
  {
    "id": "15",
    "heading": "Pushpa Bai",
    "paragraph": "Lab Att./Helper"
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
