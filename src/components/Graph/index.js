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
            },
            revision: 0
        };
    }

    async componentDidMount() {
        const Plot = await initPlot();
        this.setState({
            Plot: Plot.default,
        });
        Plot && this.plotLoaded(true);
    }

    componentDidUpdate(prevProps) {
        if (this.props.layout.title !== prevProps.layout.title) {
            ;
            const updatedState = {
                ...this.state,
                data: this.props.data,
                layout: {
                    ...this.state.layout,
                    title: this.props.title || '',
                    ...this.props.layout
                },
                revision: this.state.revision + 1
            };
            this.setState(updatedState);
        }
    }

    render() {
        const Plot = this.state?.Plot;
        return (Plot ?
            <Plot
                useResizeHandler
                data={this.state.data}
                layout={this.state.layout}
                className=' w-full h-full'
                config={{ displayModeBar: false }}
            /> : <LoadingSpinner />);
    }

}

export default Graph;

