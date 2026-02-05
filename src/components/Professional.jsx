import { useState } from "react";
import '../styles/Professional.css'

function Professional({data, onChange}){

    function handleLabel(id, label, value){
        const newData = data.map((item) => {
            if (item.id === id){
                return {...item, [label]: value}
            }
            return item
        })

        onChange(newData)

    }

    function handleAdd(){
        const newitem = {id: crypto.randomUUID(), name:'', position:'', begin:'', end:'', desc:''}
        const newData = [...data, newitem]

        onChange(newData)
    }

    function handleDelete(id){
        const newData = data.filter(item => item.id !== id)

        onChange(newData)
    }


    return (
        <div className="Professional">
            {data.map((item) => (
                <div className="Forms">
                    <div className="Form">
                        <label htmlFor={`name-${item.id}`}>Company name</label>
                        <input 
                        id={`name-${item.id}`}
                        value={item.name}
                        onChange={(e) => handleLabel(item.id, 'name', e.target.value)}
                        placeholder="Type the company name..."
                        />
                    </div>

                    <div className="Form">
                        <label htmlFor={`position-${item.id}`}>Position worked</label>
                        <input 
                        id={`position-${item.id}`}
                        placeholder="What position you worked on?"
                        value={item.position}
                        onChange={(e) => handleLabel(item.id, 'position', e.target.value)}
                        />
                    </div>

                    <div className="Form">
                        <label htmlFor={`begin-${item.id}`}>Begin date</label>
                        <input 
                        id={`begin-${item.id}`}
                        type="date" 
                        value={item.begin}
                        onChange={(e) => handleLabel(item.id, 'begin', e.target.value)}
                        />
                    </div>

                    <div className="Form">
                        <label htmlFor={`end-${item.id}`}>end date</label>
                        <input 
                        id={`end-${item.id}`}
                        type="date" 
                        value={item.end}
                        onChange={(e) => handleLabel(item.id, 'end', e.target.value)}
                        />
                    </div>

                    <div className="Form">
                        <label htmlFor={`desc-${item.id}`}>Description</label>
                        <textarea 
                        id={`desc-${item.id}`}
                        value={item.desc}
                        placeholder="Tell more about your experience, like the responsabilities..." 
                        onChange={(e) => handleLabel(item.id, 'desc', e.target.value)}
                        />
                    </div>

                    <button onClick={() => handleDelete(item.id)}>Delete Experience</button>
                    <hr></hr>

                </div>

            ))}
        <button className = "add" type = "button" onClick={handleAdd}>Add Experience</button>
        </div>
    )
}

export default Professional