import React from 'react'

export default function Login() {
  return (
    <>
     <div>Login</div>
     <div>
       <div>
             <input placeholder='Email' type='text' />
       </div>
       <div>
             <input placeholder='password' type='password' />
       </div>
       <div>
            <button className='btn btn-success'>Login</button>
       </div>
     </div>
    </>
   
  )
}
