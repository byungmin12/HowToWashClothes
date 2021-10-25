export const HANDLE_OPEN_CLOSE_WASHINGMACHINE = 'HANDLE_OPEN_CLOSE_WASHINGMACHINE';

export const handleOpenCloseWashingMachine = (boolean) => {
  return {
    type: HANDLE_OPEN_CLOSE_WASHINGMACHINE,
    payload: boolean,
  };
};
