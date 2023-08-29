import React, { useState } from "react";


function AddressForm() {
  const [addressState, setState] = useState({
    userName: "",
    address1: "",
    address2: "",
    phoneNo: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (event) => {
   const name =event.target.name;
    setState({
        ...addressState,
        [name]: event.target.value
    });
  };

  const submitHandle = (event) => {
    event.preventDefault()
    alert(JSON.stringify(addressState));
    setState({
        userName: "",
        address1: "",
        address2: "",
        phoneNo: "",
        city: "",
        country: "",
        postalCode: ""
    });
  }
  return (
    <div>
        <form>
        <label className="label-style">Name: </label>
        <br></br>
        <input
          type="text"
          name="userName"
            value={addressState.userName}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Address1: </label>
        <br></br>
        <input
          type="text"
          name="address1"
          value={addressState.address1}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Address2: </label>
        <br></br>
        <input
          type="text"
          name="address2"
        value={addressState.address2}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>PhoneNo: </label>
        <br></br>
        <input
          type="tel"
          name="phoneNo"
        value={addressState.phoneNo}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>City:  </label>
        <br></br>
        <input
          type="text"
          name="city"
         value={addressState.city}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Country: </label>
        <br></br>
        <input
          type="text"
          name="country"
        value={addressState.country}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>PostalCode: </label>
        <br></br>
        <input
          type="number"
          name="postalCode"
        value={addressState.postalCode}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={submitHandle}>
          Submit
        </button>
        </form>
        
     
    </div>
  );
}

export default AddressForm;
