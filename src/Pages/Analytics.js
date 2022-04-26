import React from 'react'
import Charts from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import { Space } from 'antd'
const Analytics = () => {
    return (
        <div>
            <Space>
            <Charts
                type='bar'
                width={600}
                height={600}
                series={[
                    {
                        name: 'Oneplus',
                        data: [100, 200, 232, 132, 422, 132],
                        color: "#00ffff"
                    },
                    {
                        name: 'Sumsung',
                        data: [200, 100, 132, 232, 322, 112],
                        color: "#8b008b"
                    },
                    {
                        name: 'Apple',
                        data: [300, 150, 262, 152, 222, 156],
                        color: "#ff1493"
                    },
                    {
                        name: 'Redmi',
                        data: [400, 250, 202, 182, 352, 132],
                        color: '#d3d3d3'

                    }

                ]}
                options={{
                    colors: ["black"],
                    theme: {
                        mode: 'dark'
                    },
                    chart: {
                        stacked: true,
                        background:'#00f8'
                    },
                    plotOptions:{
                        bar:{
                            borderRadius:14
                        }
                    },
                    noData:{
                        text:"Empty Chart",
                        style:{
                            fontSize:30,
                            color:'#f00'
                        }
                    },
                    tooltip: {
                        followCursor: true
                    },
                    dataLabels: {
                        formatter: (val) => {
                            return `$${val}`
                        }
                    },
                    style: {
                        colors: ['#f00', '#fff'],
                        fontSize: 16
                    },
                    xaxis: {
                        tickPlacement: 'on',
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun'],
                        title: {
                            text: 'Month',
                            style: {
                                color: ['#f0']
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            formatter: (val) => {
                                return `$${val}`
                            },
                            styles: {
                                colors: ['#ff0']
                            }
                        },
                        title: {
                            text: 'Amount',
                            style: {
                                color: ['#f0']
                            }
                        }
                    },
                    legend: {
                        show: true,
                        position: 'bottom'
                    },
                    title: {
                        text: 'Bar Chart',
                        style: {
                            fontSize: 30
                        }
                    },
                    subtitle: {
                        text: 'This chart shows data of companies by month',
                        style: {
                            color: '#f0f'
                        }
                    },
                    grid: {
                        borderColor: '#f00'
                    }
                }}
            >

            </Charts>
            <Charts
            type="donut"
            width={600}
            height={600}
            series={[350,330,332,110,209,242]}
            options={{
                labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun'],
                tooltip:{
                    y:{
                        formatter:(val)=>{
                            return `$${val}`
                        }
                    }   
                },
                title:{
                    text:'Pie chart'
                },
                colors:['#000', '#f00', '#f0d', '#0ad', '#0fd', '#fd0']
            }}
            >
 
            </Charts>
            </Space>
        </div>
    )
}
export default Analytics