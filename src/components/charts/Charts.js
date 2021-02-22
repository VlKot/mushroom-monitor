import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../common/useWindowSize';
import HumidityChart from './HumidityChart';
import TempChart from './TempChart';

const ChartsDiv = styled.div`
    padding: 5px 5px
`
const Charts = () => {

    //control width for chart additional info
   const width = useWindowSize();

    return (
        <ChartsDiv>
            <TempChart windowWidth={width}/>
            <HumidityChart windowWidth={width} /> 
        </ChartsDiv>
    )
}

export default Charts