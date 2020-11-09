import React, { SVGAttributes } from 'react';

export interface TrayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tray: React.FC<TrayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 7.05c5.053.501 9 4.765 9 9.95h-2a8 8 0 00-16 0H2c0-5.185 3.947-9.449 9-9.95V4h2v3.05zM22 20H2l-1-1v-1h22v1l-1 1zM6 17a6 6 0 016-6v1.8A4.2 4.2 0 007.8 17H6z' />
        </svg>
    );
};

Tray.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tray.displayName = 'Tray';
export default Tray;
