
let isProduction = false;

/**
 * updating logging status
 * @param status
 */
export const updateLogStatus = (status: boolean) => {
  isProduction = status;
};



/**
 * printing state in color
 * @param state
 */
export const logState = (state: any) => {
  if (!isProduction) {
    console.log(`%c`, state,  'color: green');
  }
};
