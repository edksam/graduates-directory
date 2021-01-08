import React, { useReducer, createContext } from "react";

export const GraduateContext = createContext();

const initialState = {
  graduates: [],
  graduate: {}, //selected or new graduate
  message: {}, //logging error messages from server
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_GRADUATE": {
      return {
        ...state,
        graduates: [...state.graduates, action.payload],
        message: {
          type: "success",
          title: "Success",
          content: "Your profile is created!",
        },
      };
    }
    case "FLASH_MESSAGE": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "FETCH_GRADUATES": {
      return {
        ...state,
        graduates: action.payload,
      };
    }
    case 'FETCH_GRADUATE': {
      return {
        ...state,
        graduate: action.payload,
      };
    }
    case 'UPDATE_GRADUATE': {
      const graduate = action.payload;
      return {
        ...state,
        graduates: state.graduates.map(item =>
          item._id === graduate._id ? graduate : item,
        ),
        message: {
          type: 'success',
          title: 'Update Successful',
          content: `Graduate "${graduate.email}" has been updated!`,
        },
      };
    }
    case 'DELETE_GRADUATE': {
      const { _id, email } = action.payload;
      return {
        ...state,
        graduates: state.graduates.filter(item => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Graduate "${email}" has been deleted!`,
        },
      };
    }
    default:
      throw new Error();
  }
}

export const GraduateContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <GraduateContext.Provider value={[state, dispatch]}>
      {children}
    </GraduateContext.Provider>
  );
};
