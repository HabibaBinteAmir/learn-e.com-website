import React from 'react'

const Heading = (props,text) => {
  return (
    <props.as className={props.className}>{props.text}</props.as>
  )
}

export default Heading