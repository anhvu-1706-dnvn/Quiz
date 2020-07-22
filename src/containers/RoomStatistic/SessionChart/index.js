import React, { Component } from 'react'
import { Card, Col, Row, Table } from 'antd'
import { connect } from "react-redux";
import Chart from 'react-apexcharts'
import { LeftCircleFilled } from '@ant-design/icons';
import Wrapper from './styles'

class SessionChart extends Component {
  constructor(props) {
    super(props)
    this.options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
     
      noData: {
        text: "No data to display",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "14px",
        },
      },
    };
  }

  render() {
    const { roomDetail } = this.props;
    const categories = []
    const series = []
    if(roomDetail) {
      const {scores} = roomDetail;
      const sortedScores = Object.keys(scores).map(e=>+e).sort()
      const min = sortedScores.length && sortedScores[0] 
      const max = sortedScores.length && sortedScores[sortedScores.length-1]
      for (let i = 0; i <= roomDetail.test.maximumScore; i+=1) {
        if(scores[i]) {
          categories.push(i)
          series.push(scores[i])
        } 
        else if(i%10 ===0 && (i < min || i >max)) {
          categories.push(i)
          series.push(0)
        }
      }
    }
    return (
      <Wrapper>
        <Card
          title="Score spectrum"
         >
          <Chart
            options={{
              ...this.options,
              xaxis: {
                labels: {
                  show: true,
                },
                type: "string",
                categories,
              },
            }}
            series={[{data: series}]}
            type="area"
            height={350}
          />
        </Card>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const {roomDetail} = statistic
  return {
    roomDetail,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionChart);
