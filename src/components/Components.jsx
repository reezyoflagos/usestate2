import React from 'react'
import { useState } from 'react';

const Components = () => {
const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    userName:"",
    city:"",
    zip:undefined,
});
 const onChangeHandler= (e) => {
    const {name,value} = e.target;
 setFormData((prevstate) => ({...prevstate, [name]: value}));
};
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
}
  return (
    <div>
        <div className='row g-3 needs-validation p-5 w-75 m-auto shadow rounded mt-5 '>
      <form class="row g-3 needs-validation"   onSubmit={handleSubmit} novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value={formData.firstName}  name="firstName"  onChange={onChangeHandler} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value={formData.lastName} name="lastName" onChange={onChangeHandler} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername"  value={formData.userName} name="userName" onChange={onChangeHandler}  aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03"  value={formData.city}     name="city" onChange={onChangeHandler} required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
        
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12 ">
    <button class="btn btn-primary w-100"  type="submit" >Submit form</button>
  </div>
</form>
    </div>
    </div>
  )
  }

export default Components
