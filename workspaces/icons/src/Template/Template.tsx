import React, { SVGAttributes } from 'react';

export interface TemplateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Template: React.FC<TemplateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 7h2v4h-2V7zm-.012-5A2.011 2.011 0 0121 4.012V6h-2V4h-3V2h2.988zM3 7h2v4H3V7zm16 5h2v4h-2v-4zM9 2h6v2H9V2zm10 18v-3h2v3.012c0 1.098-.89 1.987-1.988 1.988H16v-2h3zM5 20h3v2H5a2 2 0 01-2-2v-3h2v3zm4 0h6v2H9v-2zM5 4v2H3V4.012A2.011 2.011 0 015.012 2H8v2H5zm-2 8h2v4H3v-4zm4-6h10v2H7V6zm0 4h10v2H7v-2z' />
        </svg>
    );
};

Template.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Template.displayName = 'Template';
export default Template;
