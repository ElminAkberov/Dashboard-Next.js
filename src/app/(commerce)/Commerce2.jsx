"use client"
import React from "react";
import ReactApexChart from "react-apexcharts";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43, 21]
            }, {
                name: 'PRODUCT B',
                color: "#80CAEE",
                data: [13, 23, 20, 8, 13, 27, 32]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        dataLabels: {
                            enabled: false,

                        }
                    },
                },
                xaxis: {
                    categories: ["M", "T", "W", "T", "F", "S", "S"],
                },
                legend: {
                    position: 'top',
                },
                fill: {
                    opacity: 1,
                    colors: ['#3C50E0', '#80CAEE']
                },

            },


        };
    }



    render() {
        return (
            <div className="w-1/3 max-[1400px]:w-full mb-10 bg-white">
                <div id="chart ">
                    <div className="p-[30px] flex justify-between">
                        <p className="text-[20px] font-medium"> Profit this week</p>
                        <select>
                            <option>This week</option>
                            <option>Last week</option>
                        </select>
                    </div>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}
export default ApexChart