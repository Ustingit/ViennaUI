import React, { SVGAttributes } from 'react';

export interface GlassesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Glasses: React.FC<GlassesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.276 15A1.992 1.992 0 0115 14h7v4.984A2 2 0 0120 21h-5a2 2 0 01-2-2v-2h-2v1.984A2.015 2.015 0 018.984 21H4.016A2.015 2.015 0 012 18.984V14h6.984a2.008 2.008 0 011.733 1h2.559zM9 19v-3H4v3h5zm6-3v3h5.016v-3H15zM6 3v1.414l-2 2V13H2V5.586L4.586 3H6zm13.414 0L22 5.586V13h-2V6.414l-2-2V3h1.414z' />
        </svg>
    );
};

Glasses.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Glasses.displayName = 'Glasses';
export default Glasses;
