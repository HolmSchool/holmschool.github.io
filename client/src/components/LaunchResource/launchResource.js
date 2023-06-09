import React from 'react';
import { css } from '@emotion/react'

import LaunchResourceButton from './launchResouceButton.js'
import CompleteResourceButton from './completeResourceButton.js'
import PreviousButton from './previousButton.js'
import NextButton from './nextButton.js'

class LaunchResource extends React.Component {
    render() {
        return (
            <span>{renderButtons(this.props.videoUrl, this.props.challengeType, this.props.id, this.props.nextName, this.props.nextSlug, this.props.prevName, this.props.prevSlug)}</span>
        )
    }
}


let renderButtons = (videoUrl, challengeType, id, nextName, nextSlug, prevName, prevSlug) => {
    
    console.log(challengeType);
    if (challengeType === 0) {
        // Video - No URL
        return (
        <div css={css`text-align:center;`}>
            <PreviousButton prevSlug={prevSlug} prevName={prevName}></PreviousButton>&nbsp;&nbsp;&nbsp;
            <CompleteResourceButton id={id}></CompleteResourceButton>&nbsp;&nbsp;&nbsp;
            <NextButton nextName={nextName} nextSlug={nextSlug}></NextButton>
        </div>
        )
    }
    return (
        <div css={css`text-align:center;`}>
            <PreviousButton prevSlug={prevSlug} prevName={prevName}></PreviousButton>&nbsp;&nbsp;&nbsp;
            <LaunchResourceButton videoUrl={videoUrl}></LaunchResourceButton>&nbsp;&nbsp;&nbsp;
            <CompleteResourceButton id={id}></CompleteResourceButton>&nbsp;&nbsp;&nbsp;
            <NextButton nextName={nextName} nextSlug={nextSlug}></NextButton>
        </div>
    );
}

export default LaunchResource;