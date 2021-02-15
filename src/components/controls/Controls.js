import FanControl from "./FanControl"
import LightControl from "./LightControl"
import styled from 'styled-components';
import SprayerControl from "./SprayerControl";

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
            <FanControl />
            <LightControl />
            <SprayerControl />
        </ControlsDiv>
    )
}

export default Controls