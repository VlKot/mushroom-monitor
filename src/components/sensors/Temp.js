import React, { useContext } from 'react'
import temp_icon from '../../assets/icons/temp-sm.png'
import styled from 'styled-components'
import { device } from '../../common/device'
import TempControl from '../controls/TempControl'
import { Context } from '../../common/Provider'

const TempStyled = styled.div`
    // width: 230px;
    background-color: #e2e2e2;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;

    & > img {
        width: 50px
    }

    @media ${device.mobileS} { 

        & > img {
            width: 50px
        }
    }

    @media ${device.laptop} { 
        & > img {
            width: 100px
        }
      }
    
`


export const Temp = () => {

    const {temperature} = useContext(Context);

    return (
        <TempStyled >
            <header>Temperature</header>
            <img src={temp_icon} alt="temp" />
            <div><b>{temperature}</b>
                <span className="tempSymbol"> °C</span>
            </div>
        </TempStyled>
    )
}