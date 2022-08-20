import { AVAILABLE_DATA_SETS } from './defaults';

export const buttons = [
    { label: 'Recursive', value: AVAILABLE_DATA_SETS.RECURSIVE },
    { label: 'Iterative', value: AVAILABLE_DATA_SETS.ITERATIVE },
    { label: 'Binets formula', value: AVAILABLE_DATA_SETS.BINETS_FORMULA },
    { label: 'Recursive optimized', value: AVAILABLE_DATA_SETS.RECURSIVE_OPTIMIZED },
    // { label: 'All non-recursive', value: AVAILABLE_DATA_SETS.FULL_NON_RECURSIVE },
    // { label: 'All solutions', value: AVAILABLE_DATA_SETS.FULL_RECURSIVE }
];

export function GenButtons({ callback, activeView }) {
    const activeClasses = 'text-pink-500 underline underline-offset-4 bg-zinc-800 scale-105 rounded';
    return buttons.map(({ label, value }) => {

        const isActive = label === activeView;
        const useActiveClasses = isActive ? activeClasses : '';
        const buttonClasses = `tracking-wide flex items-center text-base lg:text-lg ${useActiveClasses} hover:text-emerald-400 text-center
                py-2 px-4 m-2 hover:bg-[#1a1a1a] hover:scale-110 rounded`;

        return (
            <button
                key={value}
                onClick={async () => callback(value)}
                className={buttonClasses}
            >
                {label}
            </button>
        );
    });
}

export default function PlotViewButtons({ callback, activeView }) {
    return (
        <div className={`flex flex-wrap flex-row justify-evenly items-center
                    rounded-b-lg  bg-[#0d0d0d]`}>
            <GenButtons
                callback={callback}
                activeView={activeView}
            />
        </div>
    );
}

export { PlotViewButtons };
