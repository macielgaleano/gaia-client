function productReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.payload];

    default:
      return state;
  }
}
export default productReducer;
