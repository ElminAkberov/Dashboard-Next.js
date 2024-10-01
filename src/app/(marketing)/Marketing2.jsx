"use client"
import React from "react";
import ReactApexChart from "react-apexcharts";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'series1',
                data: [160, 240, 160, 240, 160, 240, 160, 240, 160, 240, 160, 400]
            }, {
                name: 'series2',
                data: [240, 160, 240, 160, 240, 160, 240, 160, 240, 160, 240, 160]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
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