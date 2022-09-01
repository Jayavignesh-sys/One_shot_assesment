import React from 'react'
import "../Styles/Page-body.css"

export default function PageBody({toggle, setToggle}) {

    var College_color = ""
    var College_text = ""

    var Student_color = ""
    var Student_text = ""

    if(toggle==="College")
    {
        College_color = "#2A4D69"
        College_text = "white"
    }
    else
    {
        Student_color = "#2A4D69"
        Student_text = "white"
    }

    return (
        <div className='body-cont'>
            <div className='toggle-cont'>
                <div className='t-left' style={{"backgroundColor":College_color, "color":College_text}} onClick={()=>{setToggle("College")}}>
                    <p>Colleges</p>
                </div>
                <div className='t-right' style={{"backgroundColor":Student_color, "color":Student_text}} onClick={()=>{setToggle("Chart View")}}>
                    <p>Chart view</p>
                </div>
            </div>
        </div>
    )
}
