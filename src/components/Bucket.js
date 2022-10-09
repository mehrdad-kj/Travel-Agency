import React, {useContext} from 'react'
import { UserContext } from '../UserContext'

function Bucket() {
    const context = useContext(UserContext);
    const {
        addedResorts,
    } = context;



  return (
    <>
        {addedResorts.map((item) => {
            return(
                <h1>{item.title}</h1>
            )
        })}
    </>
  )
}

export default Bucket