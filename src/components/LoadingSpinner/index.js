const widthAndHeight = {
    'xs': 'w-5 h-5',
    'sm': 'w-8 h-8',
    'md': 'w-12 h-12',
    'lg': 'w-16 h-16',
    'xl': 'w-24 h-24'
};

/**
 * Renders a Loading Spinner
 * @param {string?} param.size - The size of the spinner. Options are 'xs', 'sm', 'md', 'lg', 'xl'
 * @param {string?} param.color - The color of the spinner. This binds to the border-color of the spinner.
 * Any valid Tailwindcss color can be used. Defaults to `emerald-400`
 * @param {string?} param.text - The text to display inside the spinner. Defaults to `Loading...` can be turned off by passing false
 */
export default function LoadingSpinner({ size = widthAndHeight['sm'], color = 'emerald-400', text = 'Loading...' }) {
    size = widthAndHeight[size] || widthAndHeight['sm'];
    const spanClasses = `${size} border-b-2 border-${color} rounded-full animate-spin`;
    const sectionClasses = 'w-full h-auto flex flex-row justify-center items-center gap-x-5';

    return (
        <section className={sectionClasses}>
            {text && <p>{text}</p>}
            <span className={spanClasses} role="status"></span>
        </section>
    );
}
