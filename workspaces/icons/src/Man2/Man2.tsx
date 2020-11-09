import React, { SVGAttributes } from 'react';

export interface Man2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Man2: React.FC<Man2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.229 3.222l-.358-.21a7.755 7.755 0 01-8.883 3.699 5.913 5.913 0 015.935-2.632 6.28 6.28 0 001.486-1.707A8 8 0 004 10v2.958a8 8 0 1016 0V10a7.994 7.994 0 00-3.771-6.778zm-1.182 14.896a5.913 5.913 0 01-1.969.737V17h-2.031v1.875a5.954 5.954 0 01-2.094-.757v-.071a3.047 3.047 0 016.094 0v.071zM18 12.958c0 1.3-.424 2.564-1.208 3.6a5 5 0 00-9.579.006A5.957 5.957 0 016 12.964V10c.002-.487.063-.971.183-1.443A9.65 9.65 0 009.052 9a9.746 9.746 0 007.214-3.2A5.963 5.963 0 0118 10v2.958z' />
        </svg>
    );
};

Man2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Man2.displayName = 'Man2';
export default Man2;
