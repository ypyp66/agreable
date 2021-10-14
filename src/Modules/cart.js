const ADD_CART = "add_cart";
const REMOVE_CART = "remove_cart";
const TOGGLE_CART = "toggle_cart";
const INCREASE_AMOUNT = "increase_amount";
const DECREASE_AMOUNT = "decrease_amount";
const GET_CART = "get_cart";

export const addCart = (data) => ({ type: ADD_CART, payload: data });
export const removeCart = (id) => ({ type: REMOVE_CART, payload: id });
export const toggleCart = (id) => ({ type: TOGGLE_CART, payload: id });
export const getCart = () => ({ type: GET_CART });
export const increaseAmount = (id) => ({ type: INCREASE_AMOUNT, payload: id });
export const decreaseAmount = (id) => ({ type: DECREASE_AMOUNT, payload: id });

const initialState_ = JSON.parse(localStorage.getItem("cart")) ?? [];

export default function cart(state = initialState_, action) {
  switch (action.type) {
    case ADD_CART:
      const result =
        state.filter((item) => item.id === action.payload.id).length > 0;

      if (result) {
        alert("이미 장바구니에 존재합니다. 수량을 증가합니다.");
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      action.payload.amount = 1;
      action.payload.isChecked = true;

      state = [...state, action.payload];
      break;
    case REMOVE_CART:
      state = state.filter((item) => item.id !== action.payload);
      break;
    case TOGGLE_CART:
      state = state.map((item) =>
        item.id === action.payload
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
      break;
    case INCREASE_AMOUNT:
      state = state.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      break;
    case DECREASE_AMOUNT:
      state = state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              amount: item.amount - 1 >= 1 ? item.amount - 1 : item.amount,
            }
          : item
      );

      break;
    default:
      return state;
  }
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
}
