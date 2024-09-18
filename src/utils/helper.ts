export const slotOptionHelper = (options: any) => {
  if (!options || options.length === 0) {
    return [];
  }
  const formattedOption = options.map((option: any) => {
    return {
      label: `${option.startTime} - ${option.endTime}`,
      value: option._id,
      isDisabled: option.isBooked !== 'available',
    };
  });
  return formattedOption;
};

export const createArray = (val: number) => {
  const arr = [];
  for (let i = 1; i <= val; i++) {
    arr.push(i);
  }
  return arr;
};

export const categoryOptions = [
  {
    label: 'Brake Repair',
    value: 'Brake Repair',
  },
  {
    label: 'Tire Service',
    value: 'Tire Service',
  },
  {
    label: 'Engine Repair',
    value: 'Engine Repair',
  },
  {
    label: 'Suspension System',
    value: 'Suspension System',
  },
  {
    label: 'Maintenance',
    value: 'Maintenance',
  },
  {
    label: 'Electrical System',
    value: 'Electrical System',
  },
];

export const dateHelper = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
