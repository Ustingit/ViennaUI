import React, { SVGAttributes } from 'react';

export interface ManProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Man: React.FC<ManProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 11a4 4 0 01-4-4V6a4 4 0 118 0v1a4 4 0 01-4 4zm0-7a2 2 0 00-2 2v1a2 2 0 104 0V6a2 2 0 00-2-2zM5.583 14.766A3.512 3.512 0 019.031 12h5.938a3.51 3.51 0 013.445 2.766L19.8 21h-2.047l-1.284-5.8a1.523 1.523 0 00-1.495-1.2H9.036a1.523 1.523 0 00-1.5 1.2L6.247 21H4.2l1.383-6.234z' />
        </svg>
    );
};

Man.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Man.displayName = 'Man';
export default Man;
