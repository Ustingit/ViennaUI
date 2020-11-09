import React, { SVGAttributes } from 'react';

export interface Settings1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Settings1: React.FC<Settings1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 13h-1.312a8.659 8.659 0 01-.664 2.473l1.136.656-1 1.732-1.143-.661a8.816 8.816 0 01-1.817 1.817l.666 1.143-1.732 1-.656-1.136a8.693 8.693 0 01-2.478.665V22h-2v-1.311a8.708 8.708 0 01-2.479-.67l-.655 1.136-1.732-1 .66-1.143A8.811 8.811 0 014.983 17.2l-1.143.666-1-1.732 1.136-.656A8.693 8.693 0 013.311 13H2v-2h1.311c.098-.854.322-1.69.665-2.478L2.84 7.866l1-1.732 1.143.66a8.831 8.831 0 011.811-1.811l-.66-1.143 1.732-1 .655 1.136A8.708 8.708 0 0111 3.311V2h2v1.311a8.693 8.693 0 012.473.665l.656-1.136 1.732 1-.661 1.143a8.836 8.836 0 011.817 1.811l1.143-.66 1 1.732-1.136.656c.343.788.567 1.624.664 2.478H22v2zm-10 6a7.008 7.008 0 007-7 7 7 0 10-7 7zm0-10.9a3.9 3.9 0 110 7.8 3.9 3.9 0 010-7.8zm0 6a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2z' />
        </svg>
    );
};

Settings1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Settings1.displayName = 'Settings1';
export default Settings1;
