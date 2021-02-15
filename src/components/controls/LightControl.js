import bulb from '../../assets/icons/bulb-tr.png'
import bulbOn from '../../assets/icons/bulb-tr-on.png'
import styled, { keyframes } from 'styled-components'
import { device } from '../../common/device'
import { useState } from 'react';
import StyledButton from '../../common/StyledButton';


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
  const [isActive, setActive] = useState(false);

  const activateLight = (action) => {
    setActive(action)
  }

  return (
    <LightControlStyled >
      <header>Light</header>
      <LightImg animate={isActive} >
        <img src={isActive ? bulbOn : bulb} alt="lamp" />
      </LightImg>

      <StyledButton isActive={isActive} activate={activateLight} />
    </LightControlStyled>
  )

}

export default LightControl;