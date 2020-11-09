import React, { SVGAttributes } from 'react';

export interface ToysProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Toys: React.FC<ToysProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 15.051A3.492 3.492 0 1114.35 20h-4.7A3.492 3.492 0 116 15.051V14h-.5a3.5 3.5 0 110-7h.317c-.002.04-.008.079-.008.119A6.2 6.2 0 006.02 8.7H5.5a1.8 1.8 0 100 3.6H8v3.05A3.486 3.486 0 019.95 18h4.1A3.486 3.486 0 0116 15.35V12.3h2.5a1.8 1.8 0 000-3.6h-.516c.139-.516.21-1.047.212-1.581 0-.04-.008-.079-.008-.119h.312a3.5 3.5 0 010 7H18v1.051zM6.5 20.3a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm11 0a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM7 7c.007-.241.03-.481.072-.719a2.988 2.988 0 114.209-4.209c.238-.041.478-.065.719-.072.235.007.469.03.7.07a2.988 2.988 0 114.226 4.196c.043.242.068.488.074.734A5 5 0 017 7zm2-4.2A1.2 1.2 0 007.8 4c.004.352.164.685.438.907L9 5.552c-.14.47-.207.958-.2 1.448a3.2 3.2 0 106.4 0 6.386 6.386 0 00-.195-1.411l.747-.689c.268-.222.424-.552.427-.9a1.2 1.2 0 00-1.2-1.2 1.187 1.187 0 00-.906.434l-.643.758A5.613 5.613 0 0012 3.8a5.137 5.137 0 00-1.448.2l-.645-.766A1.188 1.188 0 009 2.8z' />
        </svg>
    );
};

Toys.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Toys.displayName = 'Toys';
export default Toys;
