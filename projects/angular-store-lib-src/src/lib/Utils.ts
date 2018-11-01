let logger = false;

/**
 * updating logging status
 * @param status
 */
export function updateLogStatus(status: boolean) {
  logger = status;
}



/**
 * printing state in color
 * @param state
 */
export const logState = (state: any) => {
  if (logger === true) {
    console.log('%c state', 'color: green; font-weight: bold;', state);
  }
};
