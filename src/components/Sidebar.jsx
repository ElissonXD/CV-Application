import { useState } from 'react'
import '../styles/Sidebar.css'
import General from './General';
import Education from './Educational.jsx';
import Page from './Page.jsx'
import Professional from './Professional.jsx';

function Sidebar({data, datachange, eduinfo, educationChange, proinfo, professionalChange}){

    return( 
        <div className='Sidebar'>
            <div className='Card'>
                <div className = "CardContent">General Information</div>
                <General
                name = {data.name}
                email={data.email}
                phone={data.phone}
                onChange={datachange}
                />
                </div>
            <div className='Card'>
                <div className = "CardContent">Educational Experience</div>
                <Education 
                data={eduinfo}
                onChange={educationChange}/>
            </div>
            <div className='Card'>
                <div className = "CardContent">Professional Experience</div>
                <Professional 
                data = {proinfo}
                onChange={professionalChange}/>
            </div>

        </div>
    )
}

export default Sidebar;