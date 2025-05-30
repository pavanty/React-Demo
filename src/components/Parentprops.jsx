import React from 'react'
import Childprops from './Childprops'
export default function Parentprops() {
    function Parentprops() {
        window.alert('hello world')
    }
  return (
   <Childprops  callthefunction={Parentprops}>  greetparent  </Childprops>
  )
}
