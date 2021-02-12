import React from 'react'
import { Sensors } from './sensors/Sensors'
import styled from 'styled-components'
import { device } from '../common/device'
import Controls from './controls/Controls'


const MainStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    text-align: center;
    flex-direction: column;

    @media ${device.mobileS} { 
        max-width: 320px;
    }
    @media ${device.mobileM} { 
        max-width: 375px;
    }
    @media ${device.mobileL} { 
        max-width: 425px;
    }

    @media ${device.laptop} { 
        max-width: 800px;
        // flex-direction: row;
    }
    
    @media ${device.desktop} {
        max-width: 1400px;
    }
`


export const Main = () => {
    return (
        <MainStyled>
            <Sensors/>
            <Controls />
        </MainStyled>
    )

}