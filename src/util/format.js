export const formatNumbers = (number, limit = 1000, decimals = 1) =>
  number >= limit
    ? `${
        Math.round((number / limit) * Math.pow(10, decimals)) /
        Math.pow(10, decimals)
      }k`
    : number;
