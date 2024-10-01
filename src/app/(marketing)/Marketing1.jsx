"use client"
import { colors } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: Array.from({length:7},()=>Math.floor(Math.random() * 400))
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
            columnWidth: '20%',
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
          categories: ["M", "T", "W", "T", "F", "S", "S"],
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
        <div id="chart " className='p-[20px] h-[485px] bg-white'>
          <h3 className=" font-medium flex justify-between text-[26px]">Campaign Visitors <p>784K</p></h3>
          <div className='text-[#64748b] flex justify-between'>Last Campaign Performance <p className='flex items-center text-[#FB5454]'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0157 4.74683C12.7532 4.74683 12.5344 4.96558 12.5344 5.22808V7.6562L9.4063 5.57808C8.94693 5.27183 8.37818 5.27183 7.9188 5.57808L5.0313 7.50308C4.92193 7.59058 4.7688 7.59058 4.63755 7.50308L1.24693 5.24995C1.02818 5.09683 0.721929 5.16245 0.568804 5.3812C0.415679 5.59995 0.481304 5.9062 0.700054 6.05933L4.09068 8.31245C4.55005 8.6187 5.1188 8.6187 5.57818 8.31245L8.46568 6.38745C8.57505 6.29995 8.72818 6.29995 8.85943 6.38745L11.6594 8.2687H9.49381C9.23131 8.2687 9.01255 8.48745 9.01255 8.74995C9.01255 9.01245 9.23131 9.2312 9.49381 9.2312H13.0157C13.2782 9.2312 13.4969 9.01245 13.4969 8.74995V5.22808C13.5188 4.96558 13.2782 4.74683 13.0157 4.74683Z" fill="#FB5454"></path></svg>-1.5%</p></div>
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default ApexChart;
