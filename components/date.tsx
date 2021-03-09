import { parseISO, format } from 'date-fns'

const DATE_FORMAT = 'LLLL d, yyyy'

export const  Date = ({ value }: {value: string}) => {
  const date = parseISO(value)
  return <time dateTime={value}>{format(date, DATE_FORMAT)}</time>
}
