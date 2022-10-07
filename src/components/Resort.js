import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Resort(props) {
    const {type} = useParams();

  return (
        <div className="col mb-5" >
            <div className="card h-100" >
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body p-4">
                    <div className="">
                        <Link to={`resorts/${props.id}`}><h5 className="fw-bolder">{props.title}</h5></Link>
                    </div>
                    <div>
                        <p>{`price: ${props.price}`}</p>
                    </div>
                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
            </div>
        </div>
  )
}

export default Resort