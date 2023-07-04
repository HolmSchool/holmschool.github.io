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
    // Video, roadSign, justText
    if (challengeType === 0 || challengeType === 3 || challengeType === 4) {
        // Video - No URL
        return (
        <div css={css`text-align:center;display:flex;flex-flow: row wrap;justify-content: center;`}>
            <PreviousButton prevSlug={prevSlug} prevName={prevName} css={css`flex-grow: 1;`}></PreviousButton>&nbsp;&nbsp;&nbsp;
            <CompleteResourceButton id={id} css={css`flex-grow: 2;`}></CompleteResourceButton>&nbsp;&nbsp;&nbsp;
            <NextButton nextName={nextName} nextSlug={nextSlug} css={css`flex-grow: 3;`}></NextButton>
        </div>
        )
    }
    return (
        <div css={css`text-align:center;display:flex;display:flex;flex-flow: row wrap;justify-content: center;`}>
            <PreviousButton prevSlug={prevSlug} prevName={prevName} css={css`flex-grow: 1;`}></PreviousButton>&nbsp;&nbsp;&nbsp;
            <LaunchResourceButton videoUrl={videoUrl} css={css`flex-grow: 2;`}></LaunchResourceButton>&nbsp;&nbsp;&nbsp;
            <CompleteResourceButton id={id} css={css`flex-grow: 2;`}></CompleteResourceButton>&nbsp;&nbsp;&nbsp;
            <NextButton nextName={nextName} nextSlug={nextSlug} css={css`flex-grow: 3;`}></NextButton>
        </div>
    );
}

export default LaunchResource;