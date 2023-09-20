export const convertDate = (date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

// export const priorityMap = {
//   3: 'high',
//   2: 'mid',
//   1: 'low',
// };

export const priorityMap = ['low', 'mid', 'high'];
