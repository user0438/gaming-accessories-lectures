function Button({ children, textOnly = false, className = '', ...props }) {
    const variantClass = textOnly ? 'text-button' : 'button';
    const classes = [variantClass, className].filter(Boolean).join(' ');
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
export default Button;