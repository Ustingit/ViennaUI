import React, { SVGAttributes } from 'react';

export interface CurrencyCalculatorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CurrencyCalculator: React.FC<CurrencyCalculatorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.633 11.078a3.479 3.479 0 012.644 1.941l.023.113v1.16H7.367v-.3c0-.472-.441-1.025-1.684-1.025-.516 0-1.716.1-1.716 1.033 0 .908 1.307 1.009 1.707 1.019 2.997.07 3.626 1.647 3.626 2.959a3.066 3.066 0 01-2.667 2.942v1.38H4.7v-1.39a3.725 3.725 0 01-2.638-1.892l-.029-.129V17.7h1.925l.009.292c.015.593.747 1.041 1.7 1.041.822 0 1.7-.277 1.7-1.055 0-.372 0-.992-1.708-1.034-2.505-.061-3.626-1.523-3.626-2.944A2.837 2.837 0 014.7 11.071V9.7h1.933v1.378zM14 12v-2h-2V8.219h2V7h-2V5.219h2V1h4a3 3 0 010 6h-2.25v1.219H20V10h-4.25v2H14zm1.8-9.2v2.4H18a1.2 1.2 0 100-2.4h-2.2zM8 9H6.727l-4-4 4-4H8v1.273L6.272 4H11v2H6.272L8 7.727V9zm7 4h1.273l3.999 4-3.999 4H15v-1.273L16.727 18H11v-2h5.727L15 14.273V13z' />
        </svg>
    );
};

CurrencyCalculator.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CurrencyCalculator.displayName = 'CurrencyCalculator';
export default CurrencyCalculator;
