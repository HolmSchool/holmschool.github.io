import React from 'react';
import { css } from '@emotion/react'

class OpenSourceNotice extends React.Component {
    render() {
        return (
            <span>All these curricula are open source, so please <a href={`https://github.com/holmschool/holmschool.github.io`}>visit our Github page</a> to contribute to the markdown for each subject! Need an introduction to github? <a href={`https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV`}>Github for Poets</a>.</span>
        )
    }
}


export default OpenSourceNotice;
