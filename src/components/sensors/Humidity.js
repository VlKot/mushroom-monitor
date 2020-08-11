import React from 'react'
import humidity_icon from '../../assets/icons/humidity.png'

export const Humidity = (props) => {
    const { humidityValue } = props

    return (
        <div className="humidity">
            <header>Humidity</header>
            <img src={humidity_icon} alt="humidity" />
            <span className="humidityValue">{humidityValue}
                <span className="humiditySymbol">%</span>
            </span>
        </div>
    )
}