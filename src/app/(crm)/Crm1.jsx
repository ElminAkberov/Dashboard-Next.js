"use client"
import { colors } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'series1',
                data: [21,30, 50, 60, 80, 85, 84, 86, 82, 87, 90, 95, 100]
            }, {
                name: 'series2',
                data: [46,55,75,85,105,110,109,111,107,112,115,120,125]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                colors:["#3C50DF","#C7D2E2"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
                },
                legend: {
                    show: false 
                  },
            },


        };
    }



    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}
export default ApexChart