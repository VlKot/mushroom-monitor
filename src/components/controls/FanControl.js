import fan from '../../assets/icons/fan.png'
import styled, { keyframes } from 'styled-components'
import { device } from '../../common/device'
import { useState } from 'react';
import StyledButton from '../../common/StyledButton';



const FanControlStyled = styled.div`
    background-color: #e2e2e2;
    margin: 5px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;

    
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
const rotate = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const FanImg = styled.img`
    animation: ${props => props.animate ? rotate : null} 0.5s linear infinite;
`


const FanControl = () => {
  const [isActive, setActive] = useState(false);

  const activateFan = (action) => {
    setActive(action)
  }

  return (
    <FanControlStyled >
      <header>Fan</header>
      <FanImg src={fan} alt="fan" animate={isActive} />

      <StyledButton isActive={isActive} activate={activateFan} />
    </FanControlStyled>
  )
}

export default FanControl