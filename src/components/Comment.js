import React from 'react'
import "../assets/css/comment.css"
export default function Comment(props) {
  console.log(props)
  const url = "https://backend-eexu.onrender.com"
  return (
    <div className='w100 myFlex'>
      <div className='w15 '>
        <img className="cm-im" src={`${url}/media/${props.data.avatar}`} alt="" />

      </div>
      <div className='w85'>
        <div className='cm-bx w100'>
          <span className='cm-us'>{props.data.username}&nbsp;</span>
          <span>
            {props.data.entry}
          </span>
        </div>
      </div>


    </div>
  )
}
