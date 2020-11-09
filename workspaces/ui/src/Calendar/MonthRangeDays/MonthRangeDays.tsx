/**
 * imports of components
 */
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { addDays, isAfter, isBefore, isEqual, isSameDay, lastDayOfMonth, subDays, isSameMonth } from 'date-fns';
import { DateItem, DayType, MonthProps, RangeDate } from '../types';
import { DAYS_OF_WEEK, MONDAY_INDEX, SUNDAY_INDEX, WEEK_LENGTH } from '../constants';
import { Day, WeekDay, DayState, RangeSelectionStart, RangeSelectionEnd } from '../Calendar.styles';
import { checkIsDisabled, checkIsWeekend } from '../Utils';

export const MonthRangeDays: React.FC<MonthProps<RangeDate<Date>>> = (props: MonthProps<RangeDate<Date>>) => {
    const { displayedDate, weekendDates, onChangeDate, minDate, maxDate, eventDates, disabledDates, date } = props;
    const [dateState, setDateState] = useState<RangeDate<Date> | undefined>();
    const [days, setDays] = useState<DateItem[]>([]);
    const [hoveredDay, setHoveredDay] = useState<DateItem>();
    const dayEl = useRef<HTMLDivElement>(null);
    const today: Date = new Date();

    const daysWeek = useMemo(() => {
        return DAYS_OF_WEEK.map((day: string, index: number) => <WeekDay key={index}>{day}</WeekDay>);
    }, [dayEl]);

    const defineActiveDate = (options: { date?: RangeDate<Date>; day: DateItem }) => {
        const displayedMonth = displayedDate.getMonth();

        return (
            options.date &&
            options.date.start &&
            (isEqual(options.day.value, options.date.start) ||
                (options.date.end && isEqual(options.day.value, options.date.end))) &&
            displayedMonth === options.day.value.getMonth()
        );
    };

    const defineRangedDate = (options: { date?: RangeDate<Date>; day: DateItem }) => {
        const dayBetweenStartAndEnd =
            options.date &&
            options.date.end &&
            options.date.start &&
            isAfter(options.day.value, options.date.start) &&
            isBefore(options.day.value, options.date.end) &&
            isSameMonth(options.day.value, displayedDate);

        const dayBetweenStartAndHovered =
            hoveredDay &&
            isAfter(hoveredDay.value, options.day.value) &&
            options.date &&
            options.date.start &&
            isAfter(options.day.value, options.date.start) &&
            isSameMonth(displayedDate, options.day.value);

        return dayBetweenStartAndEnd || dayBetweenStartAndHovered;
    };

    const handleChangeDate = useCallback(
        (dateValue: Date) => () => {
            let nextDate = {};

            if (
                !dateState ||
                (dateState && !dateState.start) ||
                (dateState && dateState.start && dateState.end) ||
                (dateState && dateState.start && isAfter(dateState.start, dateValue))
            ) {
                nextDate = { start: dateValue };
            }
            if (
                dateState &&
                dateState.start &&
                !dateState.end &&
                (isAfter(dateValue, dateState.start) || isSameDay(dateValue, dateState.start))
            ) {
                nextDate = { ...dateState, end: dateValue };
            }

            setDateState(nextDate);

            if (typeof onChangeDate === 'function') {
                onChangeDate(nextDate);
            }
        },
        [dateState]
    );

    const handleMouseOverOnDay = useCallback(
        (day: DateItem) => () => {
            if (dateState && dateState.start && !dateState.end && isAfter(day.value, dateState.start)) {
                setHoveredDay(day);
            } else {
                setHoveredDay(undefined);
            }
        },
        [dateState]
    );

    const handleMouseOutOnDay = useCallback(() => {
        setHoveredDay(undefined);
    }, []);

    const monthDays = useMemo(() => {
        return days.map((day: DateItem, index: number) => {
            const type = day.type;
            const component = day.component;
            const isActive = defineActiveDate({ date, day });
            const isRanged = defineRangedDate({ date, day });
            if (isActive) {
                type.push(DayType.ACTIVE);
            }
            if (isRanged) {
                type.push(DayType.RANGE);
            }

            const canChange = !type.some((value: DayType) => value === DayType.DISABLED);
            const rangeSelection =
                (isActive &&
                    dateState &&
                    dateState.start &&
                    isSameDay(day.value, dateState.start) &&
                    (dateState.end || hoveredDay) && <RangeSelectionStart />) ||
                (isActive && dateState && dateState.end && isSameDay(day.value, dateState.end) && (
                    <RangeSelectionEnd />
                ));

            return (
                <Day
                    type={type}
                    ref={dayEl}
                    key={index}
                    onClick={canChange ? handleChangeDate(day.value) : undefined}
                    onMouseOver={handleMouseOverOnDay(day)}
                    onMouseOut={handleMouseOutOnDay}>
                    {rangeSelection}
                    {component || <DayState>{day.label}</DayState>}
                </Day>
            );
        });
    }, [days, dateState, displayedDate]);

    const getLocalDay = (nextDate: Date) => {
        return nextDate.getDay() === 0 ? SUNDAY_INDEX : nextDate.getDay();
    };

    const build = useCallback(
        (inputDate: Date = (dateState && dateState.start) || today) => {
            const monthDays = lastDayOfMonth(inputDate).getDate();

            const firstDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
            const firstDayOfWeek = getLocalDay(firstDay);

            const lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), monthDays);
            const lastDayOfWeek = getLocalDay(lastDay);

            const days: DateItem[] = [];

            if (firstDayOfWeek !== MONDAY_INDEX) {
                for (let i = 1; i < firstDayOfWeek; i++) {
                    const prevDate = subDays(firstDay, firstDayOfWeek - i);
                    days.push({
                        value: prevDate,
                        type: [DayType.NOT_ACTIVE],
                    });
                }
            }

            for (let i = 1; i <= monthDays; i++) {
                let type: DayType[] = [];
                let component;
                const value = new Date(inputDate.getFullYear(), inputDate.getMonth(), i);

                if (isSameDay(value, today)) {
                    type.push(DayType.TODAY);
                }

                if (Array.isArray(eventDates)) {
                    const hasEvent = eventDates.find((date) => isEqual(value, date));
                    if (hasEvent) {
                        type.push(DayType.EVENT);
                    }
                } else if (typeof eventDates === 'function') {
                    const eventComponent = eventDates(value);
                    if (eventComponent) {
                        type.push(DayType.EVENT);
                        component = eventComponent;
                    }
                }

                if (weekendDates && checkIsWeekend({ dates: weekendDates, date: value })) {
                    type = [...type, DayType.WEEKEND];
                }

                if (checkIsDisabled({ dates: disabledDates, maxDate, minDate, date: value })) {
                    type = [DayType.DISABLED];
                }

                days.push({
                    type,
                    value,
                    component,
                    label: i,
                });
            }

            if (lastDayOfWeek !== SUNDAY_INDEX) {
                for (let i = 1; i < WEEK_LENGTH - lastDayOfWeek; i++) {
                    const nextDate = addDays(lastDay, i);
                    days.push({
                        value: nextDate,
                        type: [DayType.NOT_ACTIVE],
                    });
                }
            }

            setDays(days);
        },
        [displayedDate, onChangeDate, minDate, maxDate, eventDates, disabledDates, date, hoveredDay]
    );

    const initDate = useCallback(() => {
        setDateState(date);
        build(displayedDate || (date && date.start) || today);
    }, [build]);

    useEffect(() => {
        initDate();
    }, [initDate]);

    return (
        <>
            {daysWeek}
            {monthDays}
        </>
    );
};
