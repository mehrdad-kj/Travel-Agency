import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Resortdetail() {


  const { id } = useParams();

  const context = useContext(UserContext);
  const {
    serverData,
    handleFilterByTitle,
    handleBySort,
    resortsData,
    sortedData,
    setResortsData,
    setSortedData,
    bucket, 
    setBucket,
    handleAddBucket,
  } = context;

// console.log(id);
// console.log(serverData);
// const item = serverData.find(item => item.id === id)
// debugger

  return (
    <div>
      {serverData.map((item) => {
        if (id == item.id) {
          return (
            <section class="py-5">
              <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={item.img} alt="" /></div>
                  <div class="col-md-6">
                    {/* <div class="small mb-1">SKU: BST-498</div> */}
                    <h1 class="display-5 fw-bolder">{item.title}</h1>
                    <div class="fs-5 mb-5">
                      {/* <span class="text-decoration-line-through">$45.00</span> */}
                      <span>{item.price}</span>
                    </div>
                    <p class="lead">{item.description}{item.description}</p>
                    <div class="d-flex">
                      {/* <input class="form-control text-center me-3"/> */}
                        <button class="btn btn-outline-dark flex-shrink-0" type="button" value={item.id} onClick={handleAddBucket}>
                          <i class="bi-cart-fill me-1"></i>
                          Add to Bucket
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      })}
    </div>
  )
}

export default Resortdetail