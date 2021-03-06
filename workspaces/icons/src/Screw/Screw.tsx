import React, { SVGAttributes } from 'react';

export interface ScrewProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Screw: React.FC<ScrewProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.528 16.471a31.346 31.346 0 00-5.789-4.371 3.926 3.926 0 00-4.69-.57c.391-4.478 1.472-6.7 1.935-6.838.442.125 1.37 1.947 1.836 5.593a5.951 5.951 0 011.912 1.024c-.368-4.066-1.4-8.415-3.732-8.415-2.761 0-3.7 6.118-3.87 10.625-.02.292-.045.513-.056.751a3.923 3.923 0 001.885 4.155c-3.8 1.754-6.427 2.122-6.842 1.723-.117-.469.934-1.948 3.163-3.773a5.915 5.915 0 01-.155-1.333 6.06 6.06 0 01.073-.89c-3.037 2.258-5.721 5.016-4.645 6.88a2.481 2.481 0 002.332 1.032c2.569 0 6.473-1.715 9.276-3.249v-.005a3.984 3.984 0 002.836-3.745c3.406 2.409 5.034 4.5 4.9 5.051-.354.35-2.269.151-5.122-.958a5.51 5.51 0 01-1.909 1.158 25.6 25.6 0 003.68 1.334c.841.243 1.71.378 2.585.4a2.444 2.444 0 002.316-1.026c.634-1.107-.009-2.64-1.919-4.553zM12 17.2a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4z' />
        </svg>
    );
};

Screw.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Screw.displayName = 'Screw';
export default Screw;
