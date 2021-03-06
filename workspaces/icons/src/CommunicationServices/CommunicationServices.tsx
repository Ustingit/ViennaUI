import React, { SVGAttributes } from 'react';

export interface CommunicationServicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CommunicationServices: React.FC<CommunicationServicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.022 2A1.98 1.98 0 0114 3.98v16.062A1.958 1.958 0 0112.042 22h-8.03A2.011 2.011 0 012 19.988V4.012C2 2.901 2.9 2 4.012 2h8.01zM12 20V4H4v16h8zm-5-3h2v2H7v-2zm8.4-8.426l1.413-1.414a3.988 3.988 0 01.029 5.653l-1.414-1.415a1.99 1.99 0 00-.028-2.824zm4.24-4.241a7.985 7.985 0 01.028 11.307l-1.414-1.413a5.99 5.99 0 00-.027-8.481l1.413-1.413z' />
        </svg>
    );
};

CommunicationServices.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CommunicationServices.displayName = 'CommunicationServices';
export default CommunicationServices;
