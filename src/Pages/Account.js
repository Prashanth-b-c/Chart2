import React, { useEffect, useState } from 'react'
import { Card } from 'antd'

const Account = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    // const [phone, setPhone] = useState()

    useEffect(() => {
        let data = localStorage.getItem("formData")
        let data3 = JSON.parse(data)
        console.log("data3", data3)
        // console.log("User", user)
        console.log('**', data3.username)
        setName(data3.username)
        setEmail(data3.email)

    }, [])

    return (
        <div className="site-card-border-less-wrapper">
            <Card title="User Details" bordered={false} style={{ width: 300, alignContent: "center",border: "2px solid black" }}>
                <strong>Name - {name}</strong><br/>
                <strong>Email - {email}</strong>
                <p></p>
            </Card>
        </div>
    )
}

export default Account
