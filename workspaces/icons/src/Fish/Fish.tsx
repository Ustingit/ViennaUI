import React, { SVGAttributes } from 'react';

export interface FishProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fish: React.FC<FishProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.859 11.6l.2.4-.2.4a9.856 9.856 0 01-15.91 2.512L3.3 16.9H1.1V7.1h2.2l2.648 1.988A9.857 9.857 0 0121.859 11.6zM13 16.1a8.048 8.048 0 007.034-4.1 8.068 8.068 0 00-3.911-3.475 5.939 5.939 0 00-.619 5.884 9.159 9.159 0 01-1.248.352 9.16 9.16 0 01-.717.115 7.884 7.884 0 01.561-6.9 8.053 8.053 0 00-7.336 2.895l-.546.665L2.9 9.05v5.9l3.317-2.49.547.666A8.053 8.053 0 0013 16.1zm.141-11.252c-2.39.01-4.72.747-6.68 2.114L5.448 5.486a13.3 13.3 0 019.51-2.312v1.817a11.772 11.772 0 00-1.817-.143zM5.707 18.691l.979-1.498a11.731 11.731 0 006.332 1.952l-.63 1.766a13.53 13.53 0 01-6.681-2.22z' />
        </svg>
    );
};

Fish.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fish.displayName = 'Fish';
export default Fish;
