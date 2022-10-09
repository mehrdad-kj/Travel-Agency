
import React, { useContext, useEffect, useState } from 'react'
import Resort from './Resort'
import { UserContext } from '../UserContext'


export default function Resorts() {

    const context = useContext(UserContext);
    const {
        serverData,
        handleFilterByTitle,
        handleBySort,
        resortsData,
        sortedData,
        setResortsData,
        setSortedData,
    } = context;
    
    

    // const [mainData, setMainData] = useState([])
    // const [resortsData, setResortsData] = useState([])
    // const [sortedData, setSortedData] = useState([])


    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMainData(data)
    //             setResortsData(data)
    //         })
     
    // }, [])




    // const handleFilterByTitle = (e) => {
    //     const searchValue = e.target.value;
    //     if (searchValue === '') {
    //         if (sortedData.length === 0) {
    //             setResortsData(mainData)
    //         } else {
    //             setSortedData(mainData)
    //         }
    //     } else {
    //         const filteredData = mainData.filter((item) => item.title.includes(searchValue))
    //         if (sortedData.length === 0) {
    //             setResortsData(filteredData)
    //         } else {
    //             setSortedData(filteredData)
    //         }
    //     }
    // }


    // const handleBySort = () => {
    //     const sorted = mainData.sort(
    //         (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0
    //     )
    //     setSortedData(sorted)
    //     setResortsData([])
    // }

    // useEffect(() => {
    //     setResortsData(serverData)
    // },[])



    return (
        <div>
            {/* <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                        <img src='../../public/img/header.jpg' />
                    </div>
                </div>
            </header> */}
            <section className="py-5 mb-5">
                <div className="container px-4 px-lg-5 mt-5 mb-5">
                    <div className='d-flex align-items-center mb-5 justify-content-between'>
                        <input className='input-name w-50 form-control' type='text' placeholder='Search Resorts By Title' onChange={handleFilterByTitle}></input>
                        <button className='btn btn-primary' onClick={handleBySort}>Sort By Price</button>
                    </div>
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                        {sortedData.length === 0 ?
                            resortsData.map((item) => {
                                return (
                                    <Resort {...item} key={item.id} />
                                )
                            })
                            :
                            sortedData.map((item) => {
                                return (
                                    <Resort {...item} key={item.id} />
                                )
                            })}
                    </div>
                </div>
            </section>
        </div>
    )
}
