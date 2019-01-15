import React from 'react'

const Rainbow = (WrappedComponent) =>{
    const colours = ['red','green','blue','yellow',"pink", 'orange', 'teal','purple']
    var colour = colours[Math.floor(Math.random()*(colours.length-1))] +'-text'
    return ()=>{
        return(
            <div className={colour}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default Rainbow