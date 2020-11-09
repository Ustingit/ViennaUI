import React, { SVGAttributes } from 'react';

export interface MastercardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mastercard: React.FC<MastercardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.018 4c1.094 0 1.981.888 1.982 1.982v12.036A1.983 1.983 0 0120.018 20H3.982A1.983 1.983 0 012 18.018V5.982C2 4.888 2.888 4.001 3.982 4h16.036zM20 6H4v2h16V6zM4 18.016h16V10H4v8.016zM12 11a3 3 0 11-2 5.221 3 3 0 110-4.442c.547-.5 1.26-.777 2-.779zm0 4.3a1.3 1.3 0 100-2.6 1.28 1.28 0 00-.862.342l-.266.239H9.128l-.266-.239A1.28 1.28 0 008 12.7a1.3 1.3 0 100 2.6 1.28 1.28 0 00.862-.342l.388-.349h1.5l.388.349c.234.218.542.34.862.342z' />
        </svg>
    );
};

Mastercard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mastercard.displayName = 'Mastercard';
export default Mastercard;
