import { eachDayOfInterval, format, parseISO } from "date-fns"

import { MarkerDateProps, DayProps } from '.'
import theme from '../../styles/theme'

export function generateInterval(startDate: DayProps, endDate: DayProps) {
  let interval: MarkerDateProps = {};

  eachDayOfInterval({
    start: parseISO(startDate.dateString),
    end: parseISO(endDate.dateString),
  }).forEach((item) => {
    const date = format(item, "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}

