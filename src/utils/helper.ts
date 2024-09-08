export const slotOptionHelper = (options: any) => {
  const formattedOption = options.map((option: any) => {
    return {
      label: `${option.startTime} - ${option.endTime}`,
      value: option._id,
      isDisabled: option.isBooked !== 'available',
    };
  });
  return formattedOption;
};
