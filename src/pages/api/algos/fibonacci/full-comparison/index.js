import { evalJs, evalPy } from '../../../../../../scripts/evalFibonacci';
import * as fs from 'fs';
import path from 'path';

export default async function handler(req, res) {

    try {
        // eval functions expect an array of arguments
        const args = [1474]
        await evalJs(args);
        await evalPy(args);

        // locations of the scripts to run
        const curDir = process.cwd();
        const dataFolder = path.join(curDir, 'data', 'fibonacci');
        const pyPath = path.join(dataFolder, 'python', 'fib-py-1474.json');
        const jsPath = path.join(dataFolder, 'javascript', 'fib-js-1474.json');

        // read the results from the files
        const jsData = fs.readFileSync(jsPath, 'utf8');
        const pyData = fs.readFileSync(pyPath, 'utf8');
        const data = { js: JSON.parse(jsData), py: JSON.parse(pyData) };

        // send the data as one JSON object
        return res.status(200).json({ data });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
