export const digit = [
  "AC",
  "DEL",
  "/",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "-",
  ".",
  "0",
  "=",
];

export interface State {
  previous: string;
  current: string;
}

export interface Action {
  type: string;
  payload?: string;
}

export const initialState: State = {
  previous: "",
  current: "",
};
