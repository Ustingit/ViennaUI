import React, { SVGAttributes } from 'react';

export interface SkiingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Skiing: React.FC<SkiingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.852 5.921a4 4 0 010 5.656L8.824 23.6 7.41 22.186l7.14-7.141-1.06-1.06a.592.592 0 00-.841 0 .6.6 0 000 .836l.185.19-1.273 1.273-.205-.211a2.412 2.412 0 01.02-3.357l.007-.007a2.4 2.4 0 013.388 0l1.06 1.06 3.606-3.606a2 2 0 000-2.828l1.415-1.414zM15.93 1a4 4 0 010 5.656L3.91 18.678l-1.415-1.414 7.134-7.14-1.06-1.06a.594.594 0 00-.842.835l.183.189-1.275 1.277-.2-.209a2.412 2.412 0 01.02-3.36l.007-.007a2.4 2.4 0 013.388 0l1.06 1.06 3.606-3.606a2 2 0 000-2.829L15.93 1z' />
        </svg>
    );
};

Skiing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Skiing.displayName = 'Skiing';
export default Skiing;
