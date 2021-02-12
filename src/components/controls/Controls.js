import FunControl from "./FunControl"
import LightControl from "./LightControl"
import styled from 'styled-components';

const ControlsDiv = styled.div`
    display: flex;
    justify-content: center;
    // margin: auto;
    text-align: center;
    font-size: calc(10px + 2vmin);
`
const Controls = () => {
    return (
        <ControlsDiv>
            <FunControl />
            <LightControl />
        </ControlsDiv>
    )
}

export default Controls