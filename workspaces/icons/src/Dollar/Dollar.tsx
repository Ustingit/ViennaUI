import React, { SVGAttributes } from 'react';

export interface DollarProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Dollar: React.FC<DollarProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 10.963c-2.147-.05-3.479-.944-3.479-2.333 0-1.5 1.278-2.359 3.507-2.359 1.914 0 2.916.75 3.283 1.562h1.858V6.57a5.645 5.645 0 00-4.059-2.325l-.1-.013V2h-2.023v2.234l-.1.011c-2.834.311-4.394 1.867-4.394 4.385 0 1.941 1.443 4.244 5.508 4.345 3.479.086 3.479 1.62 3.479 2.357 0 1.456-1.366 2.4-3.481 2.4-1.738 0-3.084-.76-3.4-1.9H7.167v1.994a6.262 6.262 0 003.726 1.916l.094.016V22h2.025v-2.229l.095-.014c2.673-.4 4.4-2.131 4.4-4.425-.001-2.814-1.854-4.284-5.507-4.369z' />
        </svg>
    );
};

Dollar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Dollar.displayName = 'Dollar';
export default Dollar;
