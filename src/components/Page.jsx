import { useState } from "react"
import '../styles/Page.css'

function Page({data, eduinfo, profinfo}){

    return (
        <div className="Page">
            <div className="Content">
                <div className="GenInfo">
                    <div className="Top">
                        <p>{data.name}</p>
                        <p>Curriculum</p>
                    </div>
                    <div className="Bottom">
                        <p><strong>Email: </strong>{data.email}</p>
                        <p><strong>Phone: </strong>{data.phone}</p>
                    </div>
                <hr />
                </div>
                <div className="EduInfo">
                    <h2>Education Experience</h2>
                    {eduinfo && eduinfo.map((item) => (
                        <div key={item.id} className="EducationItem">
                            <div className="Top">
                                <p><strong>School name: </strong>{item.name}</p>
                                <p><strong>Date: </strong>{item.begin} - {item.end}</p>
                            </div>
                            <p><strong>Title of Study: </strong>{item.study}</p>
                            <h3>Description:</h3>
                            <p>{item.desc}</p>
                        <hr />
                        </div>
                    ))}
                </div>
                <div className="ProInfo">
                    <h2>Professional Experience</h2>
                    {profinfo && profinfo.map((item) => (
                        <div key={item.id} className="ProfessionalItem">
                            <div className="Top">
                                <p><strong>Company: </strong>{item.name}</p>
                                <p><strong>Date: </strong>{item.begin} - {item.end}</p>
                            </div>
                            <p><strong>Position: </strong>{item.position}</p>
                            <h3>Description:</h3>
                            <p>{item.desc}</p>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Page;