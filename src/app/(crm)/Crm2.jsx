"use client"
import { colors } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 13, 33],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                fill: {
                    opacity: 1,
                    colors: ['#3C50E0', '#80CAEE', "#0FADCF", "#6577F3"]
                },
                dataLabels: {
                    enabled: false
                },
                labels: ['Desktop', 'Legend 2', 'Legend 3', 'Legend 4'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                    labels: {
                        colors: ['#3C50E0', '#80CAEE', '#0FADCF', '#6577F3'],
                    }
                },

            },


        };
    }
    render() {
        return (
            <>
                <div className="bg-white ">
                    <div class="chart-wrap">
                        <div className="p-[20px] flex justify-between">
                            <p className="text-[24px] font-medium"> Visitors Analytics</p>
                            <select>
                                <option>Yearly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div id="chart" className="flex justify-center">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={430} />
                        </div>
                    </div>
                </div>
                <div id="html-dist"></div>
            </>
        );
    }
}
export default ApexChart