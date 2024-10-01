"use client"
import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 400))
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
          }
        },
        fill: {
          opacity:1,
          colors: ['#3C50E0']
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: Array.from({ length: 30 }, (_, i) => i + 1),
          labels: {
            style: {
              colors: "#64748B",
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "#64748B",
              fontSize: '12px'
            }
          }
        }

      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart " className='p-[20px] bg-white'>
          <h3 className="text-[20px] font-medium">Visitors Analytics</h3>
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default ApexChart;
