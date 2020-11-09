import React, { SVGAttributes } from 'react';

export interface FlasherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Flasher: React.FC<FlasherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 2h2v3h-2V2zm0 12h2v5h-2v-5zm-9-1v-2h3v2H2zm1.262-7.277L4.471 4.13l2.39 1.813-1.209 1.594-2.39-1.814zm15.139 1.855l-1.24-1.57 2.355-1.858 1.24 1.57L18.4 7.577zM19 13v-2h3v2h-3zm2 7l1 1v1H2v-1l1-1h18zM7.079 19H5.064l.911-7.649a6.067 6.067 0 0112.05 0L18.936 19h-2.015l-.882-7.413a4.067 4.067 0 00-8.078 0L7.079 19z' />
        </svg>
    );
};

Flasher.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flasher.displayName = 'Flasher';
export default Flasher;
