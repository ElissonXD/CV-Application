import { useState } from "react";
import '../styles/Educational.css';

function Education({ data, onChange }) {

  function handleFieldChange(id, field, value) {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onChange(newData);
  }

  function handleAdd() {
    const newItem = { id: crypto.randomUUID(), name: '', study:'', begin: '', end: '', desc: '' };
    onChange([...data, newItem]);
  }

  function handleDelete(id) {
    const newData = data.filter(item => item.id !== id);
    onChange(newData);
  }

  return (
    <div className="Educational">
      {data.map((item) => (
        <div className="Forms" key={item.id}>
          <div className="Form">
            <label htmlFor={`school-${item.id}`}>School name</label>
            <input 
              id={`school-${item.id}`}
              value={item.name}
              placeholder="Enter your school name..." 
              onChange={(e) => handleFieldChange(item.id, 'name', e.target.value)} 
            />
          </div>

          <div className="Form">
            <label htmlFor={`study-${item.id}`}>Title of study</label>
            <input 
              id={`study-${item.id}`}
              value={item.study}
              placeholder="Enter your study name..." 
              onChange={(e) => handleFieldChange(item.id, 'study', e.target.value)} 
            />
          </div>

          <div className="Form">
            <label htmlFor={`begin-${item.id}`}>Begin date</label>
            <input 
              id={`begin-${item.id}`}
              type="date" 
              value={item.begin}
              onChange={(e) => handleFieldChange(item.id, 'begin', e.target.value)}
            />
          </div>

          <div className="Form">
            <label htmlFor={`end-${item.id}`}>End date</label>
            <input 
              id={`end-${item.id}`}
              type="date" 
              value={item.end}
              onChange={(e) => handleFieldChange(item.id, 'end', e.target.value)}
            />
          </div>

          <div className="Form">
            <label htmlFor={`desc-${item.id}`}>Description</label>
            <textarea 
              id={`desc-${item.id}`}
              value={item.desc}
              placeholder="What you did here?" 
              onChange={(e) => handleFieldChange(item.id, 'desc', e.target.value)}
            />
          </div>

          <button type="button" onClick={() => handleDelete(item.id)}>Remove Education</button>
          <hr />
        </div>
      ))}
      <button className = "add" type="button" onClick={handleAdd}>Add Education</button>
    </div>
  );
}

export default Education;