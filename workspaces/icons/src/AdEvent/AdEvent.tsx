import React, { SVGAttributes } from 'react';

export interface AdEventProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AdEvent: React.FC<AdEventProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.99 11l.002 2H5V5.984C5 4.888 5.888 4 6.984 4H9V2h2v5H9V6H6.988v3H21v2H6.99zm14.026-7A1.984 1.984 0 0123 5.984v14.032A1.984 1.984 0 0121.016 22H8v-1.985L21.016 20 21 6h-1V4h1.016zM17 7V6h-5V4h5V2h2v5h-2zm-7 10v2H7v3H5v-3H2v-2h3v-3h2v3h3z' />
        </svg>
    );
};

AdEvent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AdEvent.displayName = 'AdEvent';
export default AdEvent;
