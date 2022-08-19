import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

async function initPlot() {
    return import('react-plotly.js');
}

const plotTheme = {
    layout: {
        autosize: true,
        title: 'Fibonacci Sequence Algorithm Performance',
        font: {
            color: 'rgb(241 245 249)'
        },
        paper_bgcolor: '#000000',
        plot_bgcolor: '#000000'
    }
};

class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Plot: undefined,
            data: props.dataSet,
            layout: { ...plotTheme.layout }
        };
    }

    async componentDidMount() {
        const Plot = await initPlot();
        this.setState({ Plot: Plot.default });
    }

    render() {
        const Plot = this.state?.Plot;
        return (Plot ?
            <Plot data={this.state.data} layout={this.state.layout} useResizeHandler className='w-full h-full bg-gray-900 ' /> : <LoadingSpinner />);
    }

}

export default LineGraph;

