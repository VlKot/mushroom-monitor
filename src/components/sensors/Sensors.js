import React from 'react'
import { Temp } from './Temp'
import { Humidity } from './Humidity'
import { CarbonDioxide } from './CarbonDioxide';
import { device } from '../../common/device';
import styled from 'styled-components';

const SensorsDiv = styled.div`
    display: flex;
    justify-content: center;
    // margin: auto;
    text-align: center;
    font-size: calc(10px + 2vmin);
`

export const Sensors = () => {

    const tempValue = 21.5;
    const humidityValue = 95;
    const carbonDioxideValue = 5200;
    return (
        <SensorsDiv>
            <Temp tempValue={tempValue} />
            <Humidity humidityValue={humidityValue} />
            <CarbonDioxide carbonDioxideValue={carbonDioxideValue} />
        </SensorsDiv>
    )
}