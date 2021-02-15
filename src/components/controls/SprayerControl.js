import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../../common/device";
import StyledButton from "../../common/StyledButton";
import sprayer from '../../assets/icons/sprayer.png'


const SprayerControlStyled = styled.div`
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
const animationSpeed = "0.2s";
const move1 = keyframes`

  0% {
    opacity: 1;
  }

  100% {
    right: -55px;
    bottom: -9px
  }
`;

const move2 = keyframes`

  0% {
    bottom: -15px;
    opacity: 1;
  }
   
  100% {
    right: -55px;
  }
`;


const move3 = keyframes`

  0% {
    opacity: 1;
    bottom: -15px;
  }

  100% {
    right: -55px;
    bottom: -20px
  }
`;


const Spray = styled.i`
    position: relative;
    top:-59px;
    left:-11px;

    & > .drop1, & > .drop2, & > .drop3 {
        display: block;
        background-color: #2e79be;
        position: absolute;
        right: -30px;
        border-radius: 50%;
        bottom: -15px;
        transition: 0.4s;
        opacity: 0; 
        height: 3px;
        width: 4px;
    }

    & > .drop1 {
        animation: ${props => props.animate ? move1 : null} ${animationSpeed} ease-in-out infinite;
    }
    & > .drop2 {
        animation: ${props => props.animate ? move2 : null} ${animationSpeed} ease-in-out infinite;
    }
    & > .drop3 {
        animation: ${props => props.animate ? move3 : null} ${animationSpeed} ease-in-out infinite;
    }

    @media ${device.mobileS} { 
        top:-59px;
        left:-11px;
    }
    
    @media ${device.laptop} { 
        top: -100px;
        left: 2px;
      }

`

const SprayerControl = () => {
    const [isActive, setActive] = useState(false);

    const activeSpray = (action) => {
        setActive(action)
    }

    return (
        <SprayerControlStyled>
            <header>Spray</header>
            <img src={sprayer} alt="sprayer" />
            <Spray animate={isActive}>
                <i className="drop1"></i>
                <i className="drop2"></i>
                <i className="drop3"></i>
                <i className="drop4"></i>
            </Spray>


            <StyledButton isActive={isActive} activate={activeSpray} />
        </SprayerControlStyled>
    )
}

export default SprayerControl;