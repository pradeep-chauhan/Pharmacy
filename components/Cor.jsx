import React, { useState } from 'react'
//import Categories from './Categories'
import Image from 'next/future/image';

import Image1 from '../images/course1.png'
import Image2 from '../images/course2.jpg'
import Image3 from '../images/course3.jpeg'
import Image4 from '../images/course4.jpg'
import Image5 from '../images/course5.jpeg'
import Image6 from '../images/course6.jpeg'
import Image7 from '../images/course7.jpg'
import Image8 from '../images/course8.jpg'


const Categories = [
    {
        
        "id": "1",
        "image": Image1,
        category: "diploma",
        "heading": "Diploma in Radiation Technology (DRT)",
        "body": "This is a unique professional diploma course combining various aspects of radio ...."
    },
    {
        "id": "2",
        "image": Image2,
        category: "diploma",
        "heading": "Diploma in Ophthalmic Technology",
        "body": "Ophthalmic Technology has evolved then to be known throughout the country... "
    },
    {
        "id": "3",
        "image": Image3,
        category: "graduate",
        "heading": "BSc Cardiac Perfusion Technology",
        "body": "The Health Sciences course includes an interdisciplinary set of skill,  understanding ... "
    },
    {
        "id": "4",
        "image": Image4,
        category: "graduate",
        "heading": "Bachelor of Dental Surgery",
        "body": "Conservative Dentistry deals with prevention and treatment of disease and injuries ... "
    },
    {
        "id": "5",
        "image": Image5,
        category: "postGraduate",
        "heading": "Doctorate of Medicine [MD] (Biochemistry)",
        "body": "The knowledge acquired in this program helps  students to integrate molecular ..."
    },
    {
        "id": "6",
        "image": Image6,
        category: "postGraduate",
        "heading": "Doctorate of Medicine [MD] (Pathology)",
        "body": "Pathology is a division of medical science, which deals with effects... "
    },
    {
        "id": "7",
        "image": Image7,
        category: "superSpeciality",
        "heading": "Doctorate of Medicine [DM](Neurology)",
        "body": "Neurology is the branch of medicine concerned with the study of nervous system... "
    },
    {
        "id": "8",
        "image": Image8,
        category: "superSpeciality",
        "heading": "Doctorate of Medicine [DM] (Cardiology)",
        "body": ">Cardiology is a branch of medicine that deals with disorders of the heart ... "
    },
]


const Category = () => {

    const[data, setData] = useState(Categories);

    //Filter for category
    const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }

  return (
    <>
      <section class="courses section1">
        <div class="container">
          <div class="row">
            <div class="col text-courses mx-auto text-center">
              <h2 class="mb-5 text-center heading"> Most Popular
                Courses</h2>
              <p class="paragraph mb-4">Choose from hundreds of courses from specialist organizations</p>
            </div>
          </div>
          <ul class="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab"
            role="tablist">


            <li class="nav-item me-2 me-sm-5 list" data-filter="all">
              <button class="nav-link mb-2 mb-md-0 active button-list" id="course-pills-tab-1" data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1"
                aria-selected="false" onClick={() => setData(Categories)}>All</button>
            </li>

            <li class="nav-item me-2 me-sm-5 list" data-filter="development">
              <button class="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-2" data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"
                aria-selected="false" onClick={() => filterResult('diploma')}> Diploma </button>
            </li>

            <li class="nav-item me-2 me-sm-5 list">
              <button class="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-3" data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3"
                aria-selected="false" onClick={() => filterResult('graduate')}> Graduate </button>
            </li>

            <li class="nav-item me-2 me-sm-5">
              <button class="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-4" data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4"
                aria-selected="false" onClick={() => filterResult('postGraduate')}>Post Graduate </button>
            </li>

            <li class="nav-item me-2 me-sm-5">
              <button class="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-5" data-bs-toggle="pill"
                data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5"
                aria-selected="false" onClick={() => filterResult('superSpeciality')}> Super Speciality</button>
            </li>
          </ul>
          <div class="tab-content">
            <div class="row mx-1 course-gap ">
              {
                data.map((values) => (
                    
                  <div className="col-sm-12 col-lg-4 col-xl-3 col-md-6 ">
                    <div class="card courses-card" >
                      <Image key={values.id} src={values.image} class="card-img-top" width={250} height={200} layout="responsive" />
                      <div class="card-body">
                        <h5 class="card-title" >
                          {values.heading}
                        </h5>
                        <p class="card-text card-para d-flex justify-content-start"> {values.body}</p>
                        <a class=" card-text-link d-flex justify-content-end" href="">Read more</a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category


/*






<div className="container">
<div className="row">
    <div className="col">
        <h1 className='title'>Filter by Category</h1>
    </div>
</div>
<div className="row">
    <div className="col">
        <button className='btn' onClick={() => setData(Categories)}>All</button>
        <button className='btn' onClick={() => filterResult('Men')}>Men</button>
        <button className='btn' onClick={() => filterResult('Women')}>Women</button>
        <button className='btn' onClick={() => filterResult('Kids')}>Kids</button>
    </div>
    <div className="col">
          <div className="cards">
              {data.map((values) => {
                  const{id, title, price, image} = values;
                  return (
                      <>
                          <div className="card" key={id}>
                              <div className="card-header">
                                  <img src={image} alt={title} />
                              </div>
                              <div className="card-body">
                                  <h2 className='titleProduct'>{title}</h2>
                                  <span className="price">${price}</span>
                              </div>
                          </div>
                      </>
                  )
              })}
              
          </div>
    </div>
</div>
</div>



*/