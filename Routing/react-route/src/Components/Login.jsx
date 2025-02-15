import React, { useRef } from 'react'

const Login = () => {
    let name=useRef()
    let password=useRef()
  return (
    <div>
        <form action="">
            Name :<input type="text" name="" id="" ref={name} />
            <br/>
            Password :<input type="password" name="" id="" ref={password} />
            <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login