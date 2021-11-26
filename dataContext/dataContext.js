import * as t from './types'
import React, { useReducer, createContext } from "react";
export const DataContext = createContext();

const initialState = {
  result: {},
  sortUsers:[],
  data:false,
  loading:false,
  error: false,
  dashboard:true,
  signedIn:false,
  mute:false,
  myTurn:false,
  play:false,
  gameOver:false,
  score:0,
  pcArr:[],
  userArr:[],
  sign:true,
  username:null,
  nameExist:false,
  nameError:false,
  passLengthError:false,
  matchPassError:false,
  password:null,
  repeatPassword:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.RESULT:
      return {
          ...state,
        result: {...state.result, ...action.payload}
      };
    case t.SORTUSERS:
      return {
        ...state,
        sortUsers: [...action.payload]
      };
    case t.PC_ARR:
      return {
          ...state,
        pcArr: [...action.payload]
      };
      case t.USER_ARR:
        return {
          ...state,
          userArr: [...action.payload]
        };
        case t.DATA:
          return {
            ...state,
            data: action.payload
          };
          case t.DASHBOARD:
            return {
              ...state,
              dashboard: !state.dashboard
      };
    case t.GAME_OVER:
      return {
        ...state,
        gameOver: !state.gameOver
      };
    case t.PLAY:
      return {
        ...state,
        play: !state.play
      };
    case t.SCORE:
      return {
        ...state,
        score: action.payload
      };
    case t.LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case t.MUTE:
      return {
        ...state,
        mute: !state.mute
      };
    case t.MY_TURN:
      return {
        ...state,
        myTurn: !state.myTurn
      };
    case t.SIGNEDIN:
      return {
        ...state,
        signedIn: !state.signedIn
      };
    case t.ERROR:
      return {
        ...state,
        error: !state.error
      };
    case t.SIGN:
      return {
        ...state,
        sign: !state.sign
      };
    case t.NAME_EXIST:
      return {
        ...state,
        nameExist: action.payload
      };
    case t.USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case t.PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case t.REPEAT_PASSWORD:
      return {
        ...state,
        repeatPassword: action.payload
      };
    case t.NAME_ERROR:
      return {
        ...state,
        nameError: action.payload
      };
    case t.PASS_LENGTH_ERROR:
      return {
        ...state,
        passLengthError: action.payload
      };
    case t.MATCH_PASS_ERROR:
      return {
        ...state,
        matchPassError: action.payload
      };
    default:
      throw new Error();
  }
};

export const DataContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  );
};