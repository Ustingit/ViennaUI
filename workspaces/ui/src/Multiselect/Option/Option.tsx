import React, { useCallback, useRef, useLayoutEffect } from 'react';
import { StyledOption, StyledCheckbox, Value } from './Option.styles';

export interface OptionProps {
    /** ID компонента */
    id?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** Свойство кастомизации (опционально) */
    custom?: { box: string[]; value: string[]; icon: string[] };

    /** True - если надо подсветить как активный */
    hover?: boolean;

    /** True - если надо подсветить как выбранный */
    selected?: boolean;

    /** True - если надо подсветить как не активный */
    disabled?: boolean;

    /** Значение элемента (должно совпадать по интерфейсу с элементом переданым в value Multiselect) */
    value?: any;

    /** Размеры (наследуются от родителя если не указано иначе) */
    size?: 's' | 'm' | 'l';

    /** Наследуется от родителя если не указано иначе */
    valueToString?: (item: any) => string;

    /** Транслируется в onSelect метод родителя может быть перехвачено */
    onClick?: (e, value) => void;
}

export const Option: React.FC<OptionProps> = (props: React.PropsWithChildren<OptionProps>): JSX.Element => {
    const {
        hover,
        selected,
        children,
        value,
        onClick,
        custom,
        disabled,
        className,
        valueToString = (item) => (typeof item === 'string' ? item : item?.value),
        ...attrs
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const localHover = useRef<boolean>(false);

    const handleMouseEnter = useCallback(() => {
        localHover.current = true;
    }, []);

    const handleMouseOut = useCallback(() => {
        localHover.current = false;
    }, []);

    const handleMouseDown = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!disabled && typeof onClick === 'function') {
                onClick(e, value || children);
            }
        },
        [onClick, value, children, disabled]
    );

    useLayoutEffect(() => {
        if (ref.current && ref.current.parentNode && hover && !localHover.current) {
            (ref.current.parentNode as HTMLDivElement).scrollTop = ref.current.offsetTop;
        }
    }, [hover]);

    if (!value && !children) {
        console.error('Элемент должен содержать свойство value или children'); // eslint-disable-line
        return <></>;
    }

    return (
        <StyledOption
            {...attrs}
            className={className}
            custom={custom?.box}
            ref={ref}
            hover={hover}
            disabled={disabled}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}>
            <StyledCheckbox size={props.size} checked={selected} disabled={disabled} />
            <Value>{children ?? valueToString(value)}</Value>
        </StyledOption>
    );
};

export default Option;
