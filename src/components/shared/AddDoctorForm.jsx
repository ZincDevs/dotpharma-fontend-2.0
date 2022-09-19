/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { useFormInputValidation } from 'react-form-input-validation';
import FormTextInput from './FormTextInput';
import FormFileInput from './FormFileInput';
import FormButtonSubmit from './FormButtonSubmit';
import FormSelectInput from './FromSelectControl';

export default function AddDoctorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [clinic, setClinic] = useState('');
  const [image, setImage] = useState();

  // Must be changed to actual specialities
  const specialities = [
    'Speciality1',
    'Speciality2',
    'Spciality3',
    'Speciality4',
  ];

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.email);
  };

  const handlePhone = e => {
    setPhone(e.target.email);
  };

  const handleSpeciality = e => {
    setSpeciality(e.target.email);
    console.log(speciality);
  };

  const handleClinic = e => {
    setClinic(e.target.email);
  };

  const handelFileChange = e => {
    setImage(e.target.value);
    console.log(image);
    console.log(typeof e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create doctor</h3>
      <div>
        <div>
          <label className="form-label">Doctor full name</label>
          <FormTextInput
            onChange={handleChange}
            value={name}
            placeholder="ex: Jane Doe"
            name="name"
          />
        </div>

        <div>
          <label className="form-label">Doctor emal</label>
          <FormTextInput
            onChange={handleEmail}
            value={email}
            placeholder="ex: janedoe@example.com"
            name="name"
          />
        </div>

        <div>
          <label className="form-label">Doctor phone</label>
          <FormTextInput
            onChange={handlePhone}
            value={phone}
            placeholder="ex: 07800000000"
            name="name"
          />
        </div>

        <div>
          <label className="form-label">Doctor speciality</label>
          <FormSelectInput onChange={handleSpeciality} options={specialities} />
        </div>

        <div>
          <label className="form-label">Doctor clinic</label>
          <FormTextInput
            onChange={handleClinic}
            value={clinic}
            placeholder="ex: CHUK"
            name="name"
          />
        </div>

        <div>
          <label className="form-label">Profile image</label>
          <FormFileInput onChange={handelFileChange} name="image" />
        </div>

        <FormButtonSubmit value="Add doctor" />
      </div>
    </form>
  );
}
