import React, { SVGAttributes } from 'react';

export interface CheckMagnifierProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckMagnifier: React.FC<CheckMagnifierProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 7h10v2H7V7zm14.707 14.293l-1.414 1.414-2.407-2.407a4.457 4.457 0 01-2.386.7 4.5 4.5 0 114.5-4.5 4.459 4.459 0 01-.7 2.386l2.407 2.407zM15.5 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-4.982.363a5.78 5.78 0 001.45 1.668 2.312 2.312 0 00-1.025.357A3.983 3.983 0 019 22a4.1 4.1 0 01-1.945-.609A2.542 2.542 0 006 21a2.33 2.33 0 00-1.017.379A4.1 4.1 0 013 22V3a2.369 2.369 0 001.039-.384A4.053 4.053 0 016 2c.703.037 1.385.25 1.984.619.307.2.654.33 1.016.381.356-.042.697-.17.993-.372A4.083 4.083 0 0112 2a4.1 4.1 0 012 .624c.298.204.641.333 1 .376a2.367 2.367 0 001.044-.386A4.065 4.065 0 0118 2a4.025 4.025 0 011.967.618c.308.21.663.341 1.033.382v11.823a5.753 5.753 0 00-2-2.878V4.369A2.206 2.206 0 0018 4c-.362.045-.71.175-1.013.378A4.106 4.106 0 0115 5a4.024 4.024 0 01-1.957-.612 1.717 1.717 0 00-2.1 0A3.983 3.983 0 019 5a4.1 4.1 0 01-1.945-.609A2.542 2.542 0 006 4c-.358.043-.7.17-1 .37v14.809A3.057 3.057 0 016 19c.703.037 1.385.25 1.984.619.307.2.654.33 1.016.381.356-.042.697-.17.993-.372.161-.087.338-.178.525-.265zM13.823 11a5.753 5.753 0 00-2.878 2H7v-2h6.823zM7 15h2.955a5.711 5.711 0 00-.205 1.5c0 .169.011.335.025.5H7v-2z' />
        </svg>
    );
};

CheckMagnifier.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckMagnifier.displayName = 'CheckMagnifier';
export default CheckMagnifier;
