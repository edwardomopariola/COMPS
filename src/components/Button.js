import className from 'classnames';

// using tailwindcss classes
function Button({ 
    children, 
    primary,
    secondary,
    warning,
    danger,
    success,
    outline,
    rounded,
    ...rest
}) {
    // using the className function from the classnames package
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border',{
        'px-3 py-1.5 border border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-green-500 bg-green-500 text-white': success,
        'border-black bg-white text-black': !primary && !secondary && !warning && !danger && !success,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-blue-500': outline && secondary,
        'text-blue-500': outline && success,
        'text-blue-500': outline && warning,
        'text-blue-500': outline && danger,
    });

    return (
        <button {...rest} className={classes}>{children}</button>
    );
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, warning, danger, success, }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!danger) + Number(!!success);

        if (count > 1) {
            return new Error(
                `You can only use one variation at a time. You have used ${count}.`
            );
        }
    },
};

export default Button;