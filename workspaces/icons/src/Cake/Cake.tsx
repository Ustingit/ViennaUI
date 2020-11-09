import React, { SVGAttributes } from 'react';

export interface CakeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cake: React.FC<CakeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 17v2H4v-6a2 2 0 012-2h12a2 2 0 012 2v6h-2v-6H6v2h11v2H6zm-4 3h20v1l-1 1H3l-1-1v-1zM7 6h2v4H7V6zm4 0h2v4h-2V6zm4 0h2v4h-2V6zM9 4a1 1 0 11-2 0 3.49 3.49 0 011-2 3.27 3.27 0 011 2zm3.94 0a1 1 0 01-2 0 3.49 3.49 0 011-2 3.27 3.27 0 011 2zM17 4a1 1 0 01-2 0 3.49 3.49 0 011-2 3.27 3.27 0 011 2z' />
        </svg>
    );
};

Cake.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cake.displayName = 'Cake';
export default Cake;
