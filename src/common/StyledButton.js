import styled from "styled-components";
import { device } from "./device";


const StyledButtonCont = styled.div`

& > input[type="checkbox"] {
    margin:10px;
    position:relative;
    width:50px;
    height:20px;
    -webkit-appearance: none;
    background: linear-gradient(0deg, #2d3e4f, #000);
    outline: none;
    border-radius: 20px;
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 2px #3e3e3e, inset 0 0 5px rgb(0,0,0,1);
  }

  & > input:checked[type="checkbox"]:nth-of-type(1) {
    background: linear-gradient(0deg, #2e79be, #1b83e2);
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 2px #3e3e3e, inset 0 0 5px rgba(0,0,0,1);
  }
  
  & > input:checked[type="checkbox"]:nth-of-type(2) {
    background: linear-gradient(0deg, #70a1ff, #1e90ff);
    box-shadow: 0 0 0 3px #2d3e4f, 0 0 0 2px #3e3e3e, inset 0 0 5px rgba(0,0,0,1);
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
        width:100px;
        height:35px;
        box-shadow: 0 0 0 2px #2d3e4f, 0 0 0 4px #3e3e3e, inset 0 0 8px rgb(0 0 0);
    }

    & > input:checked[type="checkbox"]:nth-of-type(1) {
        box-shadow: 0 0 0 2px #2d3e4f, 0 0 0 4px #3e3e3e, inset 0 0 8px rgba(0,0,0,1);
      }
      
      & > input:checked[type="checkbox"]:nth-of-type(2) {
        box-shadow: 0 0 0 2px #2d3e4f, 0 0 0 4px #3e3e3e, inset 0 0 8px rgba(0,0,0,1);
      }

    & > input[type="checkbox"]:before {
       
        width:70px;
        height:35px;
    }

    & > input:checked[type="checkbox"]:before {
        left:30px;
    }

    & > input[type="checkbox"]:after{
        left:60px;
        width:4px;
        height:4px;
    }

    & > input:checked[type="checkbox"]:after {
        left:89px;
    }
}
 
`

const StyledButton = ({isActive, activate}) => {

    return (
        <StyledButtonCont>
            <input type="checkbox" checked={isActive} name="" onChange={() => activate(!isActive)} />
        </StyledButtonCont>
    )
}

export default StyledButton;
