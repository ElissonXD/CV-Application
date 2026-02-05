import { useState } from "react"
import '../styles/General.css'

function General({name, email, phone, onChange}){
    const [data, setData] = useState({name: name, email: email, phone: phone})

    function handleNameChange(e){
        const newData = {...data, name: e.target.value}
        setData(newData)
        if (onChange) onChange('name', e.target.value)

    }

    function handleEmailChange(e){
        const newData = {...data, email: e.target.value}
        setData(newData)
        if (onChange) onChange('email', e.target.value)

    }

    function handlePhoneChange(e){
        const newData = {...data, phone: e.target.value}
        setData(newData)
        if (onChange) onChange('phone', e.target.value)

    }

    return (
        <div className="General">
            <div className="Form">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter your full name..." 
                value={data.name} onChange={handleNameChange}/>
            </div>

            <div className="Form">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter your email..." 
                value={data.email} onChange={handleEmailChange}/>
            </div>

            <div className="Form">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" placeholder="Enter your Phone Number..." 
             value={data.phone} onChange={handlePhoneChange}/>
             </div>

        </div>
    )
}

export default General