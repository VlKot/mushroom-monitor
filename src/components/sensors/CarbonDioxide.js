import React from 'react'
import carbonDioxide_icon from '../../assets/icons/carbon-dioxide.png'

export const CarbonDioxide = (props) => {
    const { carbonDioxideValue } = props;

    return (
        <div className="carbonDioxide">
            <header>Carbon dioxide</header>
            <img src={carbonDioxide_icon} alt="Carbon Dioxide" />
            <span className="carbonDioxideValue">{carbonDioxideValue}
                <span className="carbonDioxideSymbol">ppm</span>
            </span>
        </div>
    )
}