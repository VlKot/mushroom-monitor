export const dateMock = (startDate) => {
    const countLoop = 160;
    let mock = [];
    let mockDate = startDate;
    for (let index = 0; index < countLoop; index++) {
        mockDate = mockDate + (3 * 1200 * 1000);
        mock.push(formattedTime(mockDate));

    }
    return mock;
    mock.map((item) => {
        console.log(formattedTime(item));
    })
}

const monthsNamed = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct", "Nov", "Dec"];

const formattedTime = (unix_timestamp) => {
    var date = new Date(unix_timestamp);
    const day = date.getDate();
    //convert enum month to named values
    const month = monthsNamed[date.getMonth()];
    // const formattedDay = new Intl.DateTimeFormat().format(unix_timestamp);
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Will display in 10 Feb 10:00 format
    const formatted = day + ' ' + month + ' ' + hours + ':' + minutes.substr(-2);
    return formatted;
}

export const tempMock = (dates) => {
    var counterDo = 50;
    var intialRandom = Math.random() * 5 + 16;

    return dates.map((date) => {
        //float random from 16.0 to 21.0
        let currentRandom;

        for (let index = 0; index < counterDo; index++) {
            currentRandom = Math.random() * 6 + 16;

            if (currentRandom < intialRandom + 0.5 && currentRandom > intialRandom - 0.5) {
                intialRandom = currentRandom;
                break
            }
        }

        return [date, currentRandom.toFixed(1)]
    })
}

export const humidityMock = (dates) => {
    var counterDo = 50;
    var intialRandom = Math.floor(Math.random() * 80 + 20);

    return dates.map((date) => {
        //int random from 50 to 100
        let currentRandom;

        for (let index = 0; index < counterDo; index++) {
            currentRandom = Math.floor(Math.random() * 80 + 20);

            if (currentRandom < intialRandom + 5 && currentRandom > intialRandom - 5) {
                intialRandom = currentRandom;
                break
            }
        }


        return [date, currentRandom]
    })
}