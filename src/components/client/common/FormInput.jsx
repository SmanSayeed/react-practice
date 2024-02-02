import React from 'react'

export default function FormInput(props) {
    const {name,value="",type="text",id="",label}=props
  return (
    <>
     <input placeholder={name} value={value} type="text" name={name} />
    </>
  )
}
