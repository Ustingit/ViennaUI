import React, { SVGAttributes } from 'react';

export interface Check2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Check2: React.FC<Check2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 4.368v14.807c.323-.1.66-.159 1-.175.703.037 1.385.25 1.984.619.307.2.654.33 1.016.381.356-.042.697-.17.993-.372A4.083 4.083 0 0112 19a4.1 4.1 0 012 .624c.298.204.641.333 1 .376a2.367 2.367 0 001.044-.386A4.065 4.065 0 0118 19c.34.015.677.074 1 .174V4.367c-.3-.2-.642-.326-1-.367-.362.045-.71.175-1.013.378A4.106 4.106 0 0115 5a4.024 4.024 0 01-1.953-.614 1.717 1.717 0 00-2.1 0A3.983 3.983 0 019 5a4.1 4.1 0 01-1.945-.609A2.542 2.542 0 006 4c-.357.044-.7.17-1 .368zM3 5V3a2.369 2.369 0 001.039-.384A4.053 4.053 0 016 2c.703.037 1.385.25 1.984.619.307.2.654.33 1.016.381.356-.042.697-.17.993-.372A4.083 4.083 0 0112 2a4.1 4.1 0 012 .624c.298.204.641.333 1 .376a2.367 2.367 0 001.044-.386A4.065 4.065 0 0118 2a4.025 4.025 0 011.967.618c.308.21.663.341 1.033.382v19a4.051 4.051 0 01-1.983-.622A2.256 2.256 0 0018 21c-.362.045-.71.175-1.013.378A4.106 4.106 0 0115 22a4.024 4.024 0 01-1.953-.614 1.716 1.716 0 00-2.1 0A3.983 3.983 0 019 22a4.1 4.1 0 01-1.945-.609A2.542 2.542 0 006 21a2.33 2.33 0 00-1.017.379A4.1 4.1 0 013 22V5zm4 2h10v2H7V7zm0 8h10v2H7v-2zm0-4h8v2H7v-2z' />
        </svg>
    );
};

Check2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Check2.displayName = 'Check2';
export default Check2;
