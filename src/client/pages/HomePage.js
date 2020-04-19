import React from 'react'


const Home =()=>{
    return(

        <div>
            <h1>this is server side page  this is laukesh</h1>
            <button onClick={()=>console.log("this is clientside page")}>PressHere</button>
        </div>
    )

}
export default {
    component:Home
}