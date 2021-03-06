import React, { SVGAttributes } from 'react';

export interface PhoneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Phone: React.FC<PhoneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.415 16.174l-2.589-2.589a2 2 0 00-2.825 0l-1.493 1.489a9.211 9.211 0 01-3.4-2.134 9.014 9.014 0 01-1.529-2.025L8.118 12.38c.45.718.98 1.383 1.582 1.98a11.237 11.237 0 004.8 2.814l.566.162L17.414 15 20 17.586l-2.6 2.6A15.124 15.124 0 018 15.764 15.147 15.147 0 013.814 6.6l2.6-2.6L9 6.586 6.66 8.922l.162.566c.15.517.336 1.022.557 1.512l3.2-3.2a1.991 1.991 0 00-.166-2.622L7.826 2.585a2 2 0 00-2.826 0L1.76 5.821l.025.447a17.188 17.188 0 004.784 10.894 17.156 17.156 0 0011.16 5.049l.445.025L21.415 19a2 2 0 000-2.826z' />
        </svg>
    );
};

Phone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Phone.displayName = 'Phone';
export default Phone;
