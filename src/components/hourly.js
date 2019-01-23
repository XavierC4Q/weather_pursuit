import React from 'react'
import '../App.css'
const mapWeather = (arr) => {
    return (
        <React.Fragment>
            {arr.map((data, i) => {
                let time = data.time
                let theDate = new Date().getTime()
                let formatDate = new Date(theDate).toLocaleDateString()
                return(
                    <div className='hourly-weather'>
                        <label key={i}>{formatDate}</label>
                        <p>SUMMARY: {data.summary}</p>  
                        <p>TEMP: {data.temperature}</p>
                        <p>HUMIDITY: {data.humidity}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export const Hourly = ({ hourly_weather }) => {
    if(hourly_weather){
        const { data, summary } = hourly_weather
        return(
            <div>
                <h2>Summary of New York Weather Today</h2>
                <p>{summary}</p>
                {mapWeather(data)}
            </div>
        )
    }
    return (<div>loading hourly weather</div>)
}