import React, { useEffect } from 'react'

export default function Greet(props) {
  useEffect (() => {  






console.log("imitiated")

  })
  
  return (
    <div>
      <div>
      Greet hi {props.name}
      </div>
      {props.children}
     </div>
  )
}
