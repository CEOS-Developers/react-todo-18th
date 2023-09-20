export const convertDate = (date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const priorityMap = {
  1: 'low',
  2: 'mid',
  3: 'high',
};
