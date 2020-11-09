import React, { SVGAttributes } from 'react';

export interface QuestionLogoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const QuestionLogo: React.FC<QuestionLogoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.56 7.377l-.445.371c.043-1.495 1.297-3.027 2.52-2.02l1.623 1.569-.383.346.729.716.753-.735-.3-.364 1.477-1.471c1.273-1.235 2.811.995 2.546 1.977l-.451-.346-1.4 1.4-.469-.383v-.939l-.365.309v1.2l-.58.562 3.02 3.021-1.278 1.266-3.052-3.058-2.953 3-1.26-1.285 3.015-2.972-.594-.593v-1.18l-.3-.228v.9l-.488.407-1.365-1.47zM3.975 19h2v2h-2v-2zm1.849-1h-1.7v-.571A2.667 2.667 0 015.5 15.021 1.15 1.15 0 103.824 14h-1.7a2.85 2.85 0 114.159 2.531.994.994 0 00-.46.9l.001.569zM20.018 2c1.094 0 1.981.888 1.982 1.982v12.036A1.983 1.983 0 0120.018 18H8v-2h12.016V4H4v6H2.016V3.982A1.982 1.982 0 014 2h16.018z' />
        </svg>
    );
};

QuestionLogo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

QuestionLogo.displayName = 'QuestionLogo';
export default QuestionLogo;
