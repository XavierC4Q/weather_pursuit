import React from 'react'

export const Current = ({ currently }) => {
    if(currently){
        const { humidity, temperature, summary } = currently
        return(
            <div>
                <h2>The Current Weather</h2>
                <p>SUMMARY: {summary}</p>
                <p>TEMP: {temperature}</p>
                <p>HUMIDTY: {humidity}</p>
            </div>
        )
    }
    return(<div>loading current weather</div>)
}