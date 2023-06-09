import React from "react"
import containerStyles from "./container.module.css"

const container = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
export default container;