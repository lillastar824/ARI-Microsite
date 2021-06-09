import React from 'react';
import { observer } from 'mobx-react-lite';
import { Video } from '../../app/models/video';

interface Props {
    video: Video
}

export default observer(function Video({ video }: Props) {
    return (
        <video id={video.id} preload='preload' controls>
            <source src={video.src} type='video/mp4' />
        </video>
    )
})