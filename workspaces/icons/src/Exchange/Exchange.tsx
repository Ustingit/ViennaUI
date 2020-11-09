import React, { SVGAttributes } from 'react';

export interface ExchangeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Exchange: React.FC<ExchangeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4.264 10H2.2A10.022 10.022 0 0111 2.051v2.018A8.007 8.007 0 004.264 10zm15.472 4H21.8a10.02 10.02 0 01-8.8 7.949v-2.018A8.007 8.007 0 0019.736 14zm-9.103.692l-1.932.001v-.3c0-.473-.441-1.026-1.685-1.026-.515 0-1.715.101-1.715 1.033 0 .909 1.307 1.009 1.707 1.019 2.996.07 3.625 1.647 3.625 2.959a3.066 3.066 0 01-2.666 2.942v1.38H6.033v-1.39a3.72 3.72 0 01-2.636-1.892l-.03-.13V18.1h1.926l.008.293c.016.592.747 1.041 1.7 1.041.821 0 1.7-.278 1.7-1.056 0-.371 0-.991-1.709-1.033-2.504-.062-3.625-1.524-3.625-2.945a2.835 2.835 0 012.666-2.929V10.1h1.934v1.378a3.478 3.478 0 012.643 1.941l.023.113v1.16zM18 8h-1.344v1.281H21V11h-4.344v2H15v-2h-2V9.281h2V8h-2V6.313h2V2h4a3 3 0 010 6h-1zm-1.3-4.3v2.6H19a1.3 1.3 0 100-2.6h-2.3z' />
        </svg>
    );
};

Exchange.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Exchange.displayName = 'Exchange';
export default Exchange;
