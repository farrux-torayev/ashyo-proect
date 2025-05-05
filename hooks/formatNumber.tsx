import React from "react";

export const formatNumber = (input: string | number) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default formatNumber;
