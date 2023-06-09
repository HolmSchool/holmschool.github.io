import React from 'react';
import { css } from '@emotion/react'

class Description extends React.Component {
    render() {
        return (
            <span>{renderDescription(this.props.description, this.props.challengeType, this.props.triggerWarning)}</span>
        )
    }
}

let renderDescription = (description, challengeType, triggerWarning) => {
    if (!!triggerWarning) {
        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <p><b>Note</b>: This resource carries <span css={css`color: red;`}>a trigger/content warning</span>.</p>
            </div>    
        )
    }
    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}

export default Description;
