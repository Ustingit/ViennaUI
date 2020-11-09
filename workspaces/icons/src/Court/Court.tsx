import React, { SVGAttributes } from 'react';

export interface CourtProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Court: React.FC<CourtProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.031 20l1 1v1h-10v-1l1-1h8zM12.137 4.894l1.415-1.414 6 6-1.415 1.414-6-6zM3.32 20.875l-.914-.914c-.76-.76-.76-1.99 0-2.75L9.617 10 8.324 8.707l1.414-1.414L12.445 10l-8.586 8.586.836.836 8.586-8.586 2.457 2.457-1.414 1.414-1.043-1.043-7.211 7.211c-.76.76-1.99.76-2.75 0zM5.605 7.012L11.76.856l1.414 1.414L7.02 8.426 5.605 7.012zm9 9l6.094-6.094 1.414 1.414-6.094 6.094-1.414-1.414z' />
        </svg>
    );
};

Court.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Court.displayName = 'Court';
export default Court;
