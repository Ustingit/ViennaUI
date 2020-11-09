import React, { SVGAttributes } from 'react';

export interface WavesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Waves: React.FC<WavesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 12a6.977 6.977 0 00-2.374-5.239l1.483-1.351a8.957 8.957 0 01-.045 13.222l-1.474-1.36A6.98 6.98 0 0012 12zm7 0c0 3.781-1.535 7.4-4.253 10.029l-1.473-1.359a11.954 11.954 0 00.059-17.287l1.482-1.35A13.951 13.951 0 0119 12zM7 12a2 2 0 00-1.147-1.8l1.529-1.399a3.966 3.966 0 01-.023 6.409l-1.522-1.4A2 2 0 007 12z' />
        </svg>
    );
};

Waves.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Waves.displayName = 'Waves';
export default Waves;
