import moment from 'moment';

export const getMonthAndDay = (date) => moment(date).format('MMM D');
