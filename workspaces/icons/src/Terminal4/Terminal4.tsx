import React, { SVGAttributes } from 'react';

export interface Terminal4Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Terminal4: React.FC<Terminal4Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 20h3v2H2v-2h3V3.982C5 2.888 5.888 2.001 6.982 2h10.036c1.094 0 1.981.888 1.982 1.982V20zm-1.984 0V4H7v16h10.016zM9 12.125h6v1.75H9v-1.75zM16 5v6H8V5h8zm-1.7 4.3V6.7H9.7v2.6h4.6z' />
        </svg>
    );
};

Terminal4.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Terminal4.displayName = 'Terminal4';
export default Terminal4;
