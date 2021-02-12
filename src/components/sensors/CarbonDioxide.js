import React from 'react'
import carbonDioxide_icon from '../../assets/icons/carbon-dioxide-sm.png'
import styled from 'styled-components'
import { device } from '../../common/device'

const CarbonDioxideStyled = styled.div`
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

export const CarbonDioxide = (props) => {
    const { carbonDioxideValue } = props;

    return (
        <CarbonDioxideStyled>
            <header>Carbon dioxide</header>
            <img src={carbonDioxide_icon} alt="Carbon Dioxide" />
            <div><b>{carbonDioxideValue}</b>
                <span className="carbonDioxideSymbol">ppm</span>
            </div>
        </CarbonDioxideStyled>
    )
}