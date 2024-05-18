import React from 'react'
import { More, MoreVert, PlaylistAdd, WatchLater } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
export const VideoCubo = (props) => {
  return (
    <div className='videoCubo'>
            <img className="videoImg" src={props.miniatura}/>
            <div className="duration">
            {props.duration}
            </div>
            <div className="videoDat">
            <Avatar src={props.locoCanal} />
            <div className='channelDetails'>
            <h5>{props.titulo}</h5>
            <p className='Canal'>{props.NameCanal}</p>
            <p>{props.Views} &bull;{props.Tiempo}</p>
            </div>
            <MoreVert className="moreIcon" />
            </div>
        </div>
  )
}
