import React, { SVGAttributes } from 'react';

export interface VeterinarianProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Veterinarian: React.FC<VeterinarianProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.864 9.007A8.469 8.469 0 0115 18.975v-2a6.476 6.476 0 005.893-7.615l-.011-.06-.007-.063-.431-3.712-2.085 1.94-.575.535h-6.573l-.576-.535-2.085-1.94L8.15 9H6.137l.713-6.149L7.7 2 12 6h5l4.3-4 .85.851.714 6.156zM11 13h1.02A1.98 1.98 0 0114 14.98v2.041A1.98 1.98 0 0112.02 19H11v1.021A1.98 1.98 0 019.02 22H6.98A1.98 1.98 0 015 20.021V19H3.98A1.98 1.98 0 012 17.021V14.98A1.98 1.98 0 013.98 13H5v-1.02A1.98 1.98 0 016.98 10h2.04A1.98 1.98 0 0111 11.98V13zm1 4v-2H9v-3H7v3H4v2h3v3h2v-3h3z' />
        </svg>
    );
};

Veterinarian.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Veterinarian.displayName = 'Veterinarian';
export default Veterinarian;
