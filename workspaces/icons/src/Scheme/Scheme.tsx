import React, { SVGAttributes } from 'react';

export interface SchemeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Scheme: React.FC<SchemeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.018 14h-4.036A1.983 1.983 0 0014 15.982V17h-1v-4.016h3.018A1.982 1.982 0 0018 11V3.982A1.983 1.983 0 0016.018 2H7.982A1.983 1.983 0 006 3.982V11c0 1.095.887 1.982 1.982 1.982H11V17h-1v-1.018A1.983 1.983 0 008.018 14H3.982A1.983 1.983 0 002 15.982v4.036c0 1.094.888 1.981 1.982 1.982h4.036A1.983 1.983 0 0010 20.018V19h4v1.018c0 1.094.888 1.981 1.982 1.982h4.036A1.983 1.983 0 0022 20.018v-4.036A1.983 1.983 0 0020.018 14zM8 4h8v7H8V4zm0 16.016H4V16h4v4.016zm12 0h-4V16h4v4.016z' />
        </svg>
    );
};

Scheme.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Scheme.displayName = 'Scheme';
export default Scheme;
