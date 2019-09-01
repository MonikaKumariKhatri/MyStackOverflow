/**
 * create simple action that takes data and output {type, data} action
 * @param {*} type
 */
export function createAction(type) {
    return data => ({ type, data });
  }

  export function simpleDataSetReducer(
    {
      replaceActionType
    },
    initState
  ) {
    return (state, { type, data }) => {
      switch (type) {
        case replaceActionType:
          return data;
        default:
          return state || initState;
      }
    };
  }
  
