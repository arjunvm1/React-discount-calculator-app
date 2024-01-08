import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MDBBtn } from 'mdb-react-ui-kit';
import './content.css'

function Content() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [save,setSave]=useState(0)
  const [result, setResult] = useState(0);

  const calculate = () => {
    const priceValue = parseFloat(price);
    const discountValue = parseFloat(discount);

    if (isNaN(priceValue) || isNaN(discountValue) || priceValue <= 0 || discountValue < 0) {
      alert('Please enter valid numbers to calculate your discount');
    } else {
      const discountedPrice = priceValue - (priceValue * discountValue) / 100;
      setResult(discountedPrice.toFixed(2));
      setSave((price-discountedPrice).toFixed(2))
    }
  };

  const reset = () => {
    setPrice(0);
    setDiscount(0);
    setResult(0);
    setSave(0);
  };

  return (
    <div>
      <div className='app'>

      <div className='main'>
        <h1>Calculate discounts Here</h1>
          <div className="container1">
            
  
            <div className="output">
              <div className='before'><h2>Price of product: &#8377;{price}</h2></div>
              <div className='after'><h2>Price after Discount: &#8377;{result !== null ? result : '0.00'}</h2></div>
            </div>
  
            <div className="input-form">
              <form>
                <TextField id="outlined-basic" label="Enter Price" variant="outlined" value={price || ''} onChange={(e) => setPrice(e.target.value)} />
                <br /> <br />
                <TextField id="outlined-basic" label="Enter discount %" variant="outlined" value={discount || ''} onChange={(e) => setDiscount(e.target.value)} />
                <br />
                <div className="buttons">
                  <MDBBtn rounded color='success' type="button" onClick={calculate}>Calculate</MDBBtn>
                  <MDBBtn rounded color='warning' type="button" onClick={reset}>Reset</MDBBtn>
                </div>
              </form>
            </div>
            <div className="saved">
  
              <h2>you save &#8377;{save} on this purchase!</h2>
  
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Content;
