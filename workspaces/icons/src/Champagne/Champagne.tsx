import React, { SVGAttributes } from 'react';

export interface ChampagneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Champagne: React.FC<ChampagneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.14 15.013a4.563 4.563 0 01-.55.037 4.53 4.53 0 01-2.69-.9 6 6 0 00.85-1.55l.09-.25c.472.45 1.098.7 1.75.7a2.55 2.55 0 002.32-1.47A2.54 2.54 0 0018 9.63l-1.64-4.5-.24-.66-2.95-1.06L17.35 2l2.52 7a4.56 4.56 0 01-1.85 5.33l1.393 3.878 1.887-.678 1.28.6.34.94-7.53 2.71-.34-.94.6-1.28 1.881-.676-1.39-3.87zM4.527 18.208l1.376-3.828A4.562 4.562 0 014.07 9l2.52-7 8.58 3.1-2.52 7a4.56 4.56 0 01-4.867 2.962L6.41 18.884l1.88.676.6 1.28-.33.94-7.53-2.71.34-.94 1.27-.6 1.887.678zM7.8 4.51L6 9.63a2.55 2.55 0 001.5 3.27 2.56 2.56 0 003.27-1.54l1.84-5.13L7.8 4.51z' />
        </svg>
    );
};

Champagne.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Champagne.displayName = 'Champagne';
export default Champagne;
