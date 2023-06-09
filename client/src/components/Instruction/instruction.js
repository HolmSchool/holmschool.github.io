import React from 'react';
import { css } from '@emotion/react'

class Instruction extends React.Component {
    render() {
        return (
            <div>
                <p css={css`color: #96d7af;filter: brightness(50%);`}><b><i>Instructions:</i></b></p>
                {renderInstruction(this.props.instructions, this.props.challengeType)}
            </div>
        )
    }
}

let renderInstruction = (instructions, challengeType) => {
    if (challengeType === 1) {
        return (
            <span>
                <span dangerouslySetInnerHTML={{ __html: instructions }}></span>
                <p><b>Note:</b>  All Holm School E-Reserves (via Archive.org's Controlled Digital Lending library) require a free <a href={`https://help.archive.org/help/borrowing-from-the-lending-library/`} target={`_blank`}>Archive.org account</a> to lend books.</p>
            </span>
        )
    }
    return (
        
        <span dangerouslySetInnerHTML={{ __html: instructions }}></span>
    )
}

export default Instruction;
