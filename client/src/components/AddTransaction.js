import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const addhandler = (e) => {
    e.preventDefault()

    const newTransac = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransac)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addhandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            placeholder='Enter text...'
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            placeholder='Enter amount...'
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
