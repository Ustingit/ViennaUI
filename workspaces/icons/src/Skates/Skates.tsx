import React, { SVGAttributes } from 'react';

export interface SkatesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Skates: React.FC<SkatesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 18a2 2 0 01-2 2h-.844v-2.315c1.9-.346 2.844-1.328 2.844-3v-.75c0-1.95-.938-4.1-3.583-4.1a3.45 3.45 0 01-2.8-1.17A5.221 5.221 0 0113 5.292c0-.295 0-.661.009-1.043 0-.422.011-.863.011-1.249V2H4v5.833a7.8 7.8 0 01-.507 2.019A7.333 7.333 0 003 11.833V18h2.031v2H2v2h17a4 4 0 004-4h-2zM5 11.843c.102-.468.235-.928.4-1.377A8.7 8.7 0 006 7.833V4h5.012v.226C11 4.615 11 4.99 11 5.292a7.186 7.186 0 002.215 4.8 5.187 5.187 0 003.827 1.621c.88 0 1.958.334 1.958 2.084v.9c0 .456 0 1.145-2.563 1.145a6.685 6.685 0 01-2.334-.566A10.716 10.716 0 009 13.833H8V16H5v-4.157zM6.969 18H10v-2.119a7.178 7.178 0 013.188 1.163 8.587 8.587 0 003.031.78V20h-9.25v-2z' />
        </svg>
    );
};

Skates.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Skates.displayName = 'Skates';
export default Skates;
