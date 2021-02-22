import React, { useContext } from 'react';
import Chart from "react-apexcharts";
import styled from 'styled-components';
import { Context } from '../../common/Provider';

const TempChartBlock = styled.div`
    background-color: #e2e2e2;
    padding: 5px 0;
    margin: 0 0 10px 0;
`


const TempChart = ({ windowWidth }) => {

    const { temperatureFluctuations } = useContext(Context);

    const options = {
        options: {
            chart: {
                id: "temp-area",
                toolbar: {
                    show: windowWidth > 426 ? true : false
                },
            },
            colors: ['#2e79be', '#2e79be', '#2e79be'],
            xaxis: {
                type: 'datetime'
            },
            title: {
                text: 'Temperature, °C',
                align: 'center',
                
            },
            dataLabels: {
                enabled: windowWidth > 426 ? true : false,
            }
        },
        series: [
            {
                name: "Temperature",
                data: temperatureFluctuations
            },
        ],
    }

    return (
        <TempChartBlock>
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options.options}
                        series={options.series}
                        type="area"
                        width="100%"
                    />
                </div>
            </div>
        </TempChartBlock>
    )
}


export default TempChart;