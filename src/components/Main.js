import React from 'react'
import { LightBlock } from './light/Light'
import { Sensors } from './sensors/Sensors'

export const Main = () => {
    return (
        <div>
            <Sensors/>
            <LightBlock />
        </div>
    )

}