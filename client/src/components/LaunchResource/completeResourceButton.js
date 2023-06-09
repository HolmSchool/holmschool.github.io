import React from 'react';
import { css } from '@emotion/react'

class CompleteResourceButton extends React.Component {
    render() {
        return (
            <span>{renderButton(this.props.id)}</span>
        )
    }
}


let renderButton = (id) => {
    const confetti = require("../../js/confetti.js")
    return (
        <button css={css`
  appearance: button;
  background-color: #33807E;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 5px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
:focus {
  text-decoration: none;
}

:hover {
  text-decoration: none;
}

:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
   {
    padding: 12px 5px;
  }
}
        `} onClick={() => {console.log("CONGRATS!!!!");confetti.DoConfetti();}}>Mark as Completed (TBD)</button>
    );
}

export default CompleteResourceButton;