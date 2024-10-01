import React from "react";
import { useReducer } from "react";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "open") return state;
  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: state.balance + 500,
        isActive: true,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: state.loan + action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "close":
      if (state.loan > 0 || state.balance !== 0) return state;
      return {
        ...state,
        balance: 0,
        loan: 0,
        isActive: false,
      };

    default:
      throw new Error("action unknown");
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>
        Balance: <span>{balance}</span>
      </p>
      <p>
        Loan: <span>{loan}</span>
      </p>

      <div className="btn">
        <button disabled={isActive} onClick={() => dispatch({ type: "open" })}>
          Open account
        </button>
      </div>
      <div className="btn">
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "deposit", payload: 150 })}>
          Deposit 150
        </button>
      </div>
      <div className="btn">
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}>
          Withdraw 50
        </button>
      </div>
      <div className="btn">
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}>
          Request a loan of 5000
        </button>
      </div>
      <div className="btn">
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "payLoan", payload: 5000 })}>
          Pay loan
        </button>
      </div>
      <div className="btn">
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "close" })}>
          Close account
        </button>
      </div>
    </div>
  );
}

export default App;
