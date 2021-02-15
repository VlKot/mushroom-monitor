import React, { useContext } from 'react'
import humidity_icon from '../../assets/icons/humidity-sm.png'
import styled from 'styled-components'
import { device } from '../../common/device'
import { Context } from '../../common/Provider'


const HumidityStyled = styled.div`
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

export const Humidity = () => {
    const {humidity} = useContext(Context);

    return (
        <HumidityStyled>
            <header>Humidity</header>
            <img src={humidity_icon} alt="humidity" />
            <div><b>{humidity}</b>
                <span className="humiditySymbol"> %</span>
            </div>
        </HumidityStyled>
    )
}