import React from 'react'
import './Shorts.css'

export const Shorts = (props) => {
  return (
    <div className='shorts'>
            <img className="shortImg" src={props.miniatura}/>
            <div className="shortDat">
            <div className='channelDetails'>
            <h5>{props.titulo}</h5>
            <p>{props.Views}</p>
            </div>
            </div>
        </div>
  )
}
