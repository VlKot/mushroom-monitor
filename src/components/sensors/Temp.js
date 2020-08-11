import React from 'react'
import temp_icon from '../../assets/icons/temp.png'

export const Temp = (props) => {
    const { tempValue } = props

    return (
        <div className="temp">
            <header>Temperature</header>
            <img src={temp_icon} alt="temp" />
            <span className="tempValue">{tempValue}
                <span className="tempSymbol">°C</span>
            </span>
        </div>
    )
}