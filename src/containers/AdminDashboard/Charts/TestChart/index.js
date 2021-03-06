import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import theme from '../../../../configs/theme';
import Wrapper from './styles';
import * as StatisticAction from '../../../../redux/statistic/actions';

class TestChart extends Component {
  constructor(props) {
    super(props);
    const { tags } = this.props;
    if (!tags) {
      this.props.retrieveTagsAndCountTest();
    }
    this.options = {
      chart: {
        id: 'test-bar',
        height: 300,
      },
      colors: ['#2772FB'],
      xaxis: {
        categories: ['Programming', 'Computer', 'Other', 'Geography'],
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // barHeight: '100%',
          // distributed: true,
          // dataLabels: {
          //   position: 'bottom',
          // },
        },
      },
      noData: {
        text: 'No data to display',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '14px',
        },
      },
    };
  }

  render() {
    const { tags } = this.props;
    let dataset = [];
    let categories = [];
    if (tags && tags.length > 0) {
      dataset = [...tags.map((e) => e.countTest)];
      categories = [...tags.map((e) => e.name)];
    }
    const series = [
      {
        data: dataset,
      },
    ];
    return (
      <Wrapper>
        <Card>
          <Chart
            options={{
              ...this.options,
              xaxis: {
                type: 'string',
                categories,
              },
            }}
            series={series}
            type="bar"
          />
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const { tags } = statistic;
  return {
    tags,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveTagsAndCountTest: () => {
    dispatch(StatisticAction.getTagStatisticAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestChart);
