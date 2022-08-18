import { Fetch } from './Api';

export default function FetchFibEval() {
    return Fetch({ url: '/api/algos/fibonacci/full-comparison' });
}
