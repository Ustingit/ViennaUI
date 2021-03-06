import React, { SVGAttributes } from 'react';

export interface EquipmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Equipment: React.FC<EquipmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 8.1a3.9 3.9 0 110 7.8 3.9 3.9 0 010-7.8zm0 6a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zm.958 7.9H11v-1.312a8.65 8.65 0 01-2.478-.664l-.656 1.136-1.732-1 .66-1.144a8.8 8.8 0 01-1.81-1.81l-1.144.66-1-1.732 1.135-.655A8.664 8.664 0 013.312 13H2v-2h1.312c.097-.855.32-1.69.663-2.479L2.84 7.866l1-1.732 1.144.66a8.8 8.8 0 011.81-1.81l-.66-1.144 1.732-1 .656 1.136A8.627 8.627 0 0111 3.312V2h2v1.312c.462.029.914.14 1.337.327l-.855 1.608A5 5 0 0012 5a7 7 0 100 14c.32-.004.641-.03.958-.08V22zm3.805-11.595a5.023 5.023 0 00-1.006-1.735L20.1 6.158a9.93 9.93 0 011.7 3.861h-1.852a7.972 7.972 0 00-.417-1.214l-2.768 1.6zm-1.435-2.169a5.027 5.027 0 00-1.74-1.001l2.5-4.355a10.012 10.012 0 013.34 2.438l-1.6.922c-.28-.28-.582-.54-.9-.776l-1.6 2.772zm.436 7.092a5.032 5.032 0 001-1.728l4.352 2.5a10.019 10.019 0 01-2.508 3.396l-.922-1.6a8.4 8.4 0 00.848-.968l-2.77-1.6zM13.6 16.763a5.019 5.019 0 001.726-.998l2.5 4.351A9.986 9.986 0 0114 21.79v-1.839c.41-.107.812-.247 1.2-.417l-1.6-2.771zM21.95 11a10 10 0 01-.456 4.134l-1.6-.925c.109-.397.189-.8.239-1.209H16.95a5 5 0 000-2h5z' />
        </svg>
    );
};

Equipment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Equipment.displayName = 'Equipment';
export default Equipment;
