const initialState = {
  record_view: false,
  currentExpenses: [],
  show_dialog: false,
  currentId: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      return {
        ...state,
        currentExpenses: [...state.currentExpenses, action.payload],
      };
    case 'SHOW_DIALOG':
      return {
        ...state,
        show_dialog: !state.show_dialog,
        currentId: action.payload,
      };
    case 'MUTATE_EXPENSE': {
      const index = state.currentExpenses.findIndex(
        (elem) => elem._id === state.currentId
      );
      let newExpense = [...state.currentExpenses];
      newExpense[index].ExpenseName = action.payload.ExpenseName;
      newExpense[index].ExpenseAmount = action.payload.ExpenseAmount;
      return {
        ...state,
        show_dialog: !state.show_dialog,
        currentExpenses: newExpense,
      };
    }
    case 'DELETE_EXPENSE': {
      const id = action.payload;
      let newExpense = state.currentExpenses.filter((elem) => elem._id !== id);
      return {
        ...state,
        currentExpenses: newExpense,
      };
    }

    default:
      return state;
  }
};

export default reducer;
