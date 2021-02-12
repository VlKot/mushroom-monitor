import bulb from '../../assets/icons/bulb-tr.png'
import styled, { keyframes } from 'styled-components'
import { device } from '../../common/device'
import { useState } from 'react';


const LightControlStyled = styled.div`
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

const LightImg = styled.div`
    // animation: ${props => props.animate ? rotate : null} 0.5s linear infinite;

    position: relative;


    & > img {
        width: 100px
    }
    & > .bulb {
        height: 20px;
    width: 20px;
    background-color: #feed6b;
    border-radius: 50%;
    position: absolute;
    top: 24px;
    left: 40px;
    display: block;
    transition: 0.7s;
    box-shadow: inset 0 0 1px 3px #d1b82b, inset 0 0 6px 8px #ffc107, 0 20px 30px -10px rgb(0 0 0 / 40%);
    }
   
//   box-shadow: inset 0 0 1px 3px #4a426b, inset 0 0 6px 8px #423963, 0 20px 30px -10px rgba(0,0,0,0.4);
  
`
const StyledButton = styled.div`

& > input[type="checkbox"] {
    margin:10px;
    position:relative;
    width:50px;
    height:20px;
    -webkit-appearance: none;
    background: linear-gradient(0deg, #2d3e4f, #000);
    outline: none;
    border-radius: 20px;
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 1px #3e3e3e, inset 0 0 5px rgb(0,0,0,1);
  }

  & > input:checked[type="checkbox"]:nth-of-type(1) {
    background: linear-gradient(0deg, #2e79be, #1b83e2);
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 1px #3e3e3e, inset 0 0 5px rgba(0,0,0,1);
  }
  
  & > input:checked[type="checkbox"]:nth-of-type(2) {
    background: linear-gradient(0deg, #70a1ff, #1e90ff);
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 1px #3e3e3e, inset 0 0 5px rgba(0,0,0,1);
  }
  
  & > input[type="checkbox"]:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:36px;
    height:20px;
    background: linear-gradient(0deg, #000, #6b6b6b);
    border-radius: 20px;
    box-shadow: 0 0 0 1px #232323;
    transform: scale(.98,.96);
    transition:.5s;
  }
  
  & > input:checked[type="checkbox"]:before {
    left:14px;
  }
  
  & > input[type="checkbox"]:after{
    content:'';
    position:absolute;
    top:calc(50% - 2px);
    left:27px;
    width:3px;
    height:3px;
    background: linear-gradient(0deg, #2e79be, #000);
    border-radius: 50%;
    transition:.5s;
  }
  
  & > input:checked[type="checkbox"]:after {
    left:42px;
  }
  
  @media ${device.laptop} { 
    input[type="checkbox"] {
        width:120px;
        height:40px;
        box-shadow: 0 0 0 4px #2d3e4f, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0,0,0,1);
    }

    & > input:checked[type="checkbox"]:nth-of-type(1) {
        box-shadow: 0 0 0 4px #2d3e4f, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0,0,0,1);
      }
      
      & > input:checked[type="checkbox"]:nth-of-type(2) {
        box-shadow: 0 0 0 4px #2d3e4f, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0,0,0,1);
      }

    & > input[type="checkbox"]:before {
       
        width:80px;
        height:40px;
    }

    & > input:checked[type="checkbox"]:before {
        left:40px;
    }

    & > input[type="checkbox"]:after{
        left:70px;
        width:4px;
        height:4px;
    }

    & > input:checked[type="checkbox"]:after {
        left:110px;
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
            <LightImg animate={isActive} >
                <img src={bulb} alt="lamp" />
                {/* <span className="bulb"></span> */}
            </LightImg>

            <StyledButton>
                <input type="checkbox" checked={isActive} name="" onChange={() => activateLight(!isActive)} />
            </StyledButton>
        </LightControlStyled>
    )

}

export default LightControl;