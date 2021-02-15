import bulb from '../../assets/icons/bulb-tr.png'
import bulbOn from '../../assets/icons/bulb-tr-on.png'
import styled, { keyframes } from 'styled-components'
import { device } from '../../common/device'
import { useContext, useState } from 'react';
import StyledButton from '../../common/StyledButton';
import { Context } from '../../common/Provider';


const LightControlStyled = styled.div`
    background-color: #e2e2e2;
    margin: 5px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
`

const LightImg = styled.div`
    position: relative;

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

const LightControl = () => {

  const {isActiveLight, toggleLight} = useContext(Context);

  return (
    <LightControlStyled >
      <header>Light</header>
      <LightImg animate={isActiveLight} >
        <img src={isActiveLight ? bulbOn : bulb} alt="lamp" />
      </LightImg>

      <StyledButton isActive={isActiveLight} activate={toggleLight} />
    </LightControlStyled>
  )

}

export default LightControl;