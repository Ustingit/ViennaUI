import React, { SVGAttributes } from 'react';

export interface PolicemanProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Policeman: React.FC<PolicemanProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 12.306v-1.325h.021V9.909c-1.061-.566-3.81-.886-5.961-.886h-.024a18.649 18.649 0 00-6.015.964v.513H6v1.795a21.8 21.8 0 006.021.755A21.8 21.8 0 0018 12.306zM19.983 12h.007v1.65a22.639 22.639 0 01-7.969 1.3 22.52 22.52 0 01-8-1.32V12h.046l-.046-.023V9.623c0-1.5 5.115-2.6 8.015-2.6h.027c2.865.004 7.958 1.099 7.958 2.646v2.312l-.038.019zm-7.014.031h-2l-1-1v-1h4v1l-1 1zm-.948-9.785c6.758 0 11.5 4.464 11.503 6.881 0 1.223-1.038 2.162-2.625 2.853V9.702c.342-.221.534-.424.534-.575 0-1.007-3.534-4.862-9.409-4.862-5.875 0-9.409 3.855-9.409 4.862 0 .146.175.342.5.556v2.284c-1.57-.69-2.594-1.625-2.594-2.84 0-2.417 4.742-6.881 11.5-6.881zm5.062 13.524a26.35 26.35 0 002-.481v.7a7.084 7.084 0 01-14.167 0v-.7a25.43 25.43 0 002 .487v.216a5.084 5.084 0 0010.167 0v-.222z' />
        </svg>
    );
};

Policeman.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Policeman.displayName = 'Policeman';
export default Policeman;
