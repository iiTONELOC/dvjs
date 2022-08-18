import { useState, useEffect } from 'react';
import LineGraph from '../LineGraph';

export default function FibonacciComparativeScatter() {
    const { data, error } = useFetchFibEval();
    const [dataSet, setDataSet] = useState({
        recursive: [],
        iterative: [],
        binets: [],
        recursiveMemoized: []
    });
}