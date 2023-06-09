import React from 'react';

class Video extends React.Component {
    render() {
        return (
            <p>{renderPlayer(this.props.videoUrl, this.props.challengeType)}</p>
        )
    }
}

let renderPlayer = (videoUrl, challengeType) => {
    if (challengeType !== 0) {
        return;
    }
    if (videoUrl.match(/youtube\.com/)) {
        let re = /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
        let id = videoUrl.match(re)[8];
        console.log(id)
        // TODO: Center
        return (
        <p>
            <iframe width="700" height="400" src={`https://www.youtube-nocookie.com/embed/${id}`}

            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title={id}></iframe>
        </p>
        )

    } else if (videoUrl.match(/vimeo\.com/)) {
        return (
        <p>Vimeo!!!!</p>
        )
    }
}

export default Video;