import React, { SVGAttributes } from 'react';

export interface FingerprintProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fingerprint: React.FC<FingerprintProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3.881 12.031c0 3.505 3.547 7.41 8.08 9.838a9.938 9.938 0 01-5.331-1.561C3.919 17.9 2.081 14.98 2.081 12.03c0-5.467 4.432-9.9 9.9-9.9s9.9 4.433 9.9 9.9c0 .311.014.62.038.926a9.924 9.924 0 01-1.116 3.62 16.44 16.44 0 01-.722-4.546 8.1 8.1 0 10-16.2 0zm3.387.211c0 2.313 3.685 7.27 8.139 9.015-.9.33-1.843.527-2.8.585-4.038-2.477-7.138-6.87-7.138-9.6a6.581 6.581 0 016.573-6.575 6.681 6.681 0 016.572 6.521 7.742 7.742 0 002.058 4.61 9.993 9.993 0 01-1.06 1.523 9.838 9.838 0 01-2.795-6.026 4.9 4.9 0 00-4.775-4.827 4.78 4.78 0 00-4.774 4.774zm11.969 6.49a9.9 9.9 0 01-1.372 1.209c-2.011-1.692-4.119-4.07-4.087-7.307a1.393 1.393 0 00-.406-1 1.435 1.435 0 00-1.025-.428 1.5 1.5 0 00-1.085.466 1.226 1.226 0 00-.348.914c.09 1.51 1.367 3.365 3.6 5.225a23.476 23.476 0 003.205 2.236 9.948 9.948 0 01-1.794 1.01c-3.212-2.043-6.623-5.184-6.805-8.367a3.012 3.012 0 01.836-2.253 3.365 3.365 0 014.7-.07c.603.605.937 1.426.927 2.28-.026 2.605 1.833 4.595 3.654 6.086z' />
        </svg>
    );
};

Fingerprint.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fingerprint.displayName = 'Fingerprint';
export default Fingerprint;
