import React, { useState } from 'react'


const Form = () => {

const [firstName, setfirstName] =useState('')
const [lastName, setlastName] =useState('')
const [userName, setuserName] =useState('')
const [city, setCity] =useState('')
const [zip, setZip] =useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    const details =[firstName, lastName, userName, city,zip]
    console.log({firstName, 
        lastName,
        userName,
        city,})
}
  return (
    <div>
      <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value={firstName}  onChange={(e)=> {setfirstName(e.target.value)}}  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value={lastName}   onChange={(e)=> {setlastName(e.target.value)}} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" value={userName}  onChange={(e)=> {setuserName(e.target.value)}} aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03"  value={city} onChange={(e)=> {setCity(e.target.value)}} required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" value={zip}  onChange={(e)=> {setZip(e.target.value)}} required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
  )
}

export default Form
