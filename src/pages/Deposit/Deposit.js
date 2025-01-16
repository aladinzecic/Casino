import React, { useContext, useState } from 'react';
import './Deposit.css';
import toast, { Toaster } from 'react-hot-toast';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Deposit() {
  // States for input fields
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const {setMoneyR,money,setMoney,id}=useContext(AppContext)
  const navigate=useNavigate()
  // Function to handle form submission

  const deposit=async()=>{
    try{
      const response=await axios.post('https://casino-backend-s1l5.onrender.com/auth/deposit',{
        userId:id,
        depositedMoney:depositAmount
      })
      console.log(response)
    }
    catch(e){
      console.log(e)
    }
  }
  const handleDeposit = () => {
    // Validate inputs
    if (!cardholderName || !cardNumber || !expiryMonth || !expiryYear || !cvv || !depositAmount) {
      toast.error('Please fill in all fields.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          fontSize: '18px'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }
    const sanitizedCardNumber = cardNumber.replace(/\s+/g, '');

    if (sanitizedCardNumber.length !== 16 || isNaN(sanitizedCardNumber)) {
      toast.error('Invalid card number.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          fontSize: '18px'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
      toast.error('Invalid CVV.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          fontSize: '18px'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }

    if (isNaN(depositAmount) || parseFloat(depositAmount) <= 0) {
      toast.error('Invalid deposit amount.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          fontSize: '18px'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      return;
    }

    // Create deposit data object
    const depositData = {
      cardholderName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      depositAmount,
    };

    console.log('Deposit Data:', depositData);
    setMoneyR(money+Number(depositAmount))
    setMoney(money+Number(depositAmount))
    deposit()
    // Simulate API call or data submission
    toast.success('Deposit successful!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
        fontSize: '18px'
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
    // Clear input fields
    setCardholderName('');
    setCardNumber('');
    setExpiryMonth('');
    setExpiryYear('');
    setCvv('');
    setDepositAmount('');

    setTimeout(()=>{
      navigate("/Roulette")
    },2000)
  };

  return (
    <div className='deposit-full'>
      <Toaster position="bottom-center"/>
      <div className='deposit-center'>
        <h1 className=''>Deposit details</h1>

        <h3 className=''>Cardholder name</h3>
        <input
          className=''
          placeholder='e.g. John Doe'
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />

        <h3 className=''>Card number</h3>
        <input
          className=''
          placeholder='1234 5678 9012 3456'
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div className='deposit-line'>
          <div className='line-part'>
            <h3 className=''>Expiry month</h3>
            <input
              id='line-input'
              placeholder='MM'
              value={expiryMonth}
              type='number'
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
          <div className='line-part'>
            <h3 className=''>Expiry year</h3>
            <input
              id='line-input'
              placeholder='YYYY'
              value={expiryYear}
              type='number'

              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
          <div className='line-part'>
            <h3 className=''>CVV</h3>
            <input
              id='line-input'
              placeholder='123'
              value={cvv}
              type='number'

              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <h3 className=''>Deposit amount</h3>
        <input
          className=''
          placeholder='e.g. 100.00'
          value={depositAmount}
          type='number'
          onChange={(e) => setDepositAmount(e.target.value)}
        />

        <button className='' onClick={handleDeposit}>Deposit money</button>
      </div>
    </div>
  );
}
