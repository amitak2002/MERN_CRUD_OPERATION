import React from 'react'

function Card({name , email , age , gender , password}) {
  return (
    <div className='card'>
        <div className='carddiv'>
            <h3 className='data'>name : {name}</h3>
            <h3 className='data'>email : {email}</h3>
            <h3 className='data'>age : {age}</h3>
            <h3 className='data'>gender : {gender}</h3>
            <h3 className='data'>password : {password}</h3>
        </div>
    </div>
  )
}

export default Card