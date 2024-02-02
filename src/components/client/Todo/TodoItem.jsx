import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function TodoItem() {
  const params = useParams();
  const navigate = useNavigate()
  const {item} = params;
  const getBack= () => {
    navigate(-1)
  }
  return (
    <>
    <button onClick={getBack}>Get back</button>
    <div>{item}</div>
    </>
  )
}
