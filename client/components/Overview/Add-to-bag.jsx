import React, { useState, useEffect } from 'react';
const axios = require('axios');

const AddToBag = (props) => {

    return (
    <div className='Dropdown-Parent'>
      <div className='OV-dropdowns'>
        <select>
        <option value=''> XS </option>
        <option value=''> S </option>
        <option value=''> M </option>
        <option value=''> L </option>
        <option value=''> XL </option>
        </select>
        <select>
        <option value=''> 1 </option>
        <option value=''> 2 </option>
        <option value=''> 3 </option>
        <option value=''> 4 </option>
        <option value=''> 5 </option>
        <option value=''> 6 </option>
        <option value=''> 7 </option>
        <option value=''> 8 </option>
        <option value=''> 9 </option>
        <option value=''> 10 </option>
        <option value=''> 11 </option>
        </select>
      </div>
        <button className='Add-to-bag' onClick={() => confirm('added to bag!')}> add to bag </button>
    </div>
    )
}

export default AddToBag;