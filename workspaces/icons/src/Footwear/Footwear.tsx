import React, { SVGAttributes } from 'react';

export interface FootwearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Footwear: React.FC<FootwearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.326 8.785l3.5-2.334 1.109 1.665-3.5 2.333-1.11-1.664zm1.848 2.782l3.5-2.334 1.11 1.665-3.5 2.333-1.11-1.664zM18 13c3.712 0 4 2.3 4 3v2c0 2.566-1.851 3-6 3a6.134 6.134 0 01-2.92-.9A8.193 8.193 0 0010 19.054 1.946 1.946 0 018.054 21H3.946A1.946 1.946 0 012 19.054V14c.07-.795.255-1.575.552-2.316.21-.543.36-1.108.448-1.684V5.1C3 3.94 3.94 3 5.1 3h4.917C11.112 3 12 3.888 12 4.983v.4L9.979 6.721c0-.621.054-1.261.041-1.721H5v5a8.115 8.115 0 01-.552 2.316A7.986 7.986 0 004 14v5h4v-2h1a9.828 9.828 0 015 1.322c.6.388 1.288.62 2 .678 4 0 4-.441 4-1v-2c0-.247 0-1-2-1a8.35 8.35 0 01-4.152-1.1l1.941-1.285A6.465 6.465 0 0018 13z' />
        </svg>
    );
};

Footwear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Footwear.displayName = 'Footwear';
export default Footwear;
