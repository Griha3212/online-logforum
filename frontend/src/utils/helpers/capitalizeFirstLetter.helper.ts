/* eslint-disable import/prefer-default-export */
export const capitalizeFirstLetter = (string: string): string => string
  .charAt(0).toUpperCase() + string.slice(1).toLowerCase();
