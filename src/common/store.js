import { dateMock, tempMock, humidityMock } from "./chartMock";

export const intitialState = {

    temperature: 21.5,
    humidity: 95,
    carbonDioxide: 5200,
    isActiveFan: false,
    isActiveLight: false,
    isActiveSpray: false,
    temperatureFluctuations: tempMock(dateMock(1486684800000)),
    humidityFluctuations: humidityMock(dateMock(1486684800000))
}


