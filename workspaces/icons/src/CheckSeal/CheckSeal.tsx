import React, { SVGAttributes } from 'react';

export interface CheckSealProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckSeal: React.FC<CheckSealProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 5.999h10v2H7v-2zm0 4h8v2H7v-2zM5 17c-.003.34-.063.679-.177 1h6.615c0 .35-.077.698-.222 1.017-.134.31-.202.645-.2.983H2a4.055 4.055 0 01.622-1.984c.207-.303.337-.652.378-1.016a2.345 2.345 0 00-.378-1.012A4.114 4.114 0 012 14a4.006 4.006 0 01.614-1.952A2.3 2.3 0 003 11a2.29 2.29 0 00-.388-1.057A3.987 3.987 0 012 8a4.1 4.1 0 01.609-1.946c.207-.318.34-.678.391-1.054a2.334 2.334 0 00-.379-1.017A4.086 4.086 0 012 2h16.979A2.02 2.02 0 0121 4.019v9.533a2.191 2.191 0 00-.23-.052 2.476 2.476 0 01-1.76-1.013l-.01-.01V4H4.822c.114.321.174.66.178 1a4.209 4.209 0 01-.619 1.983A2.5 2.5 0 004 8c.042.356.17.697.372.993A4.08 4.08 0 015 11c-.03.71-.246 1.4-.625 2A2.26 2.26 0 004 14c.044.374.176.732.386 1.045A4.05 4.05 0 015 17zm16.41.224a1.892 1.892 0 000 1.552 1.89 1.89 0 01-1.534 2.655 1.89 1.89 0 00-1.343.776 1.889 1.889 0 01-3.066 0 1.89 1.89 0 00-1.343-.776 1.89 1.89 0 01-1.534-2.655 1.892 1.892 0 000-1.552 1.89 1.89 0 011.534-2.655 1.893 1.893 0 001.343-.776 1.891 1.891 0 013.066 0c.316.439.805.721 1.343.776a1.89 1.89 0 011.534 2.655zm-1.55 2.249a3.586 3.586 0 010-2.947l-.009-.173-.146-.094a3.589 3.589 0 01-2.55-1.472.19.19 0 00-.309 0 3.59 3.59 0 01-2.551 1.473l-.146.094-.008.173c.421.937.421 2.01 0 2.946l.008.173.145.094a3.589 3.589 0 012.552 1.473.18.18 0 00.154.078.184.184 0 00.155-.078 3.583 3.583 0 012.55-1.473l.146-.094.009-.173z' />
        </svg>
    );
};

CheckSeal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckSeal.displayName = 'CheckSeal';
export default CheckSeal;
