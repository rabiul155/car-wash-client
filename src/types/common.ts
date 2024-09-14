export type SelectOptionType = {
  label: string;
  value: string;
  isDisabled?: boolean;
};

export type ReviewDataType = {
  _id: string;
  name: string;
  rating: number;
  message: string;
};
