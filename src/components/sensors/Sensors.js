import React from 'react'
import { Temp } from './Temp'
import { Humidity } from './Humidity'
import { CarbonDioxide } from './CarbonDioxide';


export const Sensors = () => {
    const tempValue = 21.5;
    const humidityValue = 95;
    const carbonDioxideValue = 5200;
    return (
        <div className="sensors">
            <Temp tempValue={tempValue}/>
            <Humidity humidityValue={humidityValue} />
            <CarbonDioxide carbonDioxideValue={carbonDioxideValue} />
        </div>
    )
}