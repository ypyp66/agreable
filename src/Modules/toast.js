import { delay, put, takeLatest } from "redux-saga/effects";

const SHOW_TOAST = "show_toast";
const CLOSE_TOAST = "close_toast";
const TOGGLE_TOAST = "toggle_toast";

export const toggleToast = (message) => ({
  type: TOGGLE_TOAST,
  payload: message,
});
export const showToast = (message) => ({ type: SHOW_TOAST, payload: message });
export const closeToast = () => ({ type: CLOSE_TOAST });

function* showToastSaga(action) {
  yield put({
    type: SHOW_TOAST,
    payload: action.payload,
  });

  yield delay(1500);

  yield put(closeToast());
}

export function* toastsSaga() {
  yield takeLatest(TOGGLE_TOAST, showToastSaga);
}

const initialState = {
  isOpen: false,
  message: "",
};

export default function toast(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        isOpen: true,
        message: action.payload,
      };
    case CLOSE_TOAST:
      return {
        isOpen: false,
        message: "",
      };
    default:
      return state;
  }
}
