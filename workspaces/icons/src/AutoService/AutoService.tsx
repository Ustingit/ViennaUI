import React, { SVGAttributes } from 'react';

export interface AutoServiceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AutoService: React.FC<AutoServiceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 10.831a8.009 8.009 0 00-8-8 7.917 7.917 0 00-3.675.9L8 3.9v1.345l3 3v1.586H9.414l-3-3H5.067l-.167.325A7.969 7.969 0 008 17.741v5.09h2v-6.35a5.994 5.994 0 01-3.831-7.066l2.417 2.416H13V7.417L10.584 5A6 6 0 0114 16.481v6.35h2v-5.09a7.983 7.983 0 004-6.91z' />
        </svg>
    );
};

AutoService.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AutoService.displayName = 'AutoService';
export default AutoService;
