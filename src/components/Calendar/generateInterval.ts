import { eachDayOfInterval, format, parseISO } from "date-fns"

import { MarkerDateProps, DayProps } from '.'
import theme from '../../styles/theme'

export function generateInterval(startDate: DayProps, endDate: DayProps) {
  let interval: MarkerDateProps = {};

  eachDayOfInterval({
    start: parseISO(startDate.dayString),
    end: parseISO(endDate.dayString),
  }).forEach((item) => {
    const date = format(item, "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dayString === date || endDate.dayString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          startDate.dayString === date || endDate.dayString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}

