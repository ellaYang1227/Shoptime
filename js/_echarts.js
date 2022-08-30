const chartDom = document.getElementById('js-echarts');
if(chartDom){
  const chart = echarts.init(chartDom);
  const theme = {
    primary: '#4A90E2',
    success: '#7ED321',
    danger: '#D0021B',
    lightGrey200: '#EBEBEB',
    darkGrey: '#9B9B9B'
  };
  
  const option = {
    tooltip: {
      show: true,
      formatter: ({ value }) => {
        return value.toLocaleString('en-US');
      }
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '6 JUN',
          '7 JUN',
          '8 JUN',
          '9 JUN',
          '10 JUN',
          '11 JUN',
          '12 JUN',
          '13 JUN'
        ],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: theme.lightGrey200
          }
        },
        axisLabel: {
          margin: 28,
          color: theme.darkGrey,
          fontFamily: 'HelveticaNeue-Medium',
          fontSize: 16
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        interval: 2000,
        axisLabel: {
          margin: 28,
          color: theme.darkGrey,
          fontFamily: 'HelveticaNeue-Medium',
          fontSize: 16
        },
        splitLine: {
          lineStyle: {
            color: theme.lightGrey200
          }
        }
      }
    ],
    series: [
      {
        data: [550, 550, 2600, 2910, 2430, 550, 982, 1985],
        type: 'line',
        itemStyle: {
          color: theme.danger
        }
      },
      {
        data: [6120, 5320, 1910, 4010, 3720, 5340, 6530, 4960],
        type: 'line',
        itemStyle: {
          color: theme.primary
        }
      },
      {
        data: [7250, 6980, 5460, 7200, 5870, 6130, 7220, 7450],
        type: 'line',
        itemStyle: {
          color: theme.success
        }
      }
    ]
  };
  
  chart.setOption(option);  
}
