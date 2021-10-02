import React, { useState } from 'react'
import "./SignIn.css"

function SignIn() {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    return (
        <div className="singin">
            <label>이메일</label>
            <input type="email" value={Email} />
            <label>비밀번호</label>
            <input type="password" value={Password}/>
        </div>
    )
}

export default SignIn
