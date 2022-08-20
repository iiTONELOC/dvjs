import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

async function initPlot() {
    return import('react-plotly.js');
}

const plotTheme = {
    layout: {
        autosize: true,
        font: {
            color: 'rgb(241 245 249)'
        },
        paper_bgcolor: '#0d0d0d',
        plot_bgcolor: '#0d0d0d',
        legend: { title: { color: 'white' } },
        xaxis: { title: "n" },
        yaxis: { title: "time in seconds" },
    }
};

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.plotLoaded = this.props.plotLoaded || null;
        this.state = {
            Plot: null,
            data: props.data,
            layout: {
                ...plotTheme.layout,
                title: props.title || '',
                ...this.props.layout
            }
        };
    }

    async componentDidMount() {
        const Plot = await initPlot();
        this.setState({
            Plot: Plot.default
        });
        Plot && this.plotLoaded(true);
        // scrolls the chart into view when it is mounted
        setTimeout(() => {
            document
                .getElementById('fib-plotter')
                .scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        }, 250);
    }
    render() {
        const Plot = this.state?.Plot;
        return (Plot ?
            <Plot
                useResizeHandler
                data={this.state.data}
                layout={this.state.layout}
                carpet={false}
                className=' w-full h-full'
                config={{ displayModeBar: false }}
            /> : <LoadingSpinner />);
    }

}

export default Graph;

