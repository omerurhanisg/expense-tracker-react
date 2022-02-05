import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Yeni işlem ekle </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Etiket</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Değer girin.."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (<b>-</b>/<b>+</b>)Miktar&nbsp; &nbsp; [-gider  , +gelir]
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount.."
          />
        </div>
        <button className="btn">İşlem ekle</button>
      </form>
    </>
  );
};
