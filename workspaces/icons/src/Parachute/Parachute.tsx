import React, { SVGAttributes } from 'react';

export interface ParachuteProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Parachute: React.FC<ParachuteProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.1 10h-16A8.91 8.91 0 0112 1.1a8.91 8.91 0 018.9 8.9h-1.8zm-.29-2a7.11 7.11 0 00-4.095-4.558A16.637 16.637 0 0115.825 8h2.986zm-4.809 0c-.325-3.204-1.38-5.1-2.001-5.1-.62 0-1.676 1.896-2.001 5.1H14zM8.175 8a16.61 16.61 0 011.11-4.558A7.11 7.11 0 005.189 8h2.986zm9.862 3h2.472l-7.7 10.588h-1.618L3.491 11h2.472l4.303 6.328L8.469 11h2.062L12 17.203 13.469 11h2.062l-1.672 6.328L18.037 11z' />
        </svg>
    );
};

Parachute.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Parachute.displayName = 'Parachute';
export default Parachute;
