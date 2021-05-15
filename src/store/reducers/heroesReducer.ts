import Types from "../consts";
import { initialState } from "./initialState";

interface IActionProps {
  type: string;
  payload: any
}

export default function config(
  state = initialState,
  action: IActionProps
) {
  if (action.type === Types.SET_HEROES) {
    console.log('Chegou aqui ', action);
    return {
      ...state,
      heroes: action.payload
    }
  }

  if (action.type === Types.SET_ALL_HEROES) {
    return {
      ...state,
      allHeroes: action.payload
    }
  }

  return state;
}
