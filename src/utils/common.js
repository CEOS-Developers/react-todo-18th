export const convertDate = (date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const convertPriority = (priority) => {
  switch (priority) {
    case 1:
      return 'low';
    case 2:
      return 'mid';
    default:
      return 'high';
  }
};
