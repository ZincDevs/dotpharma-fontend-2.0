/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FormTextInput from './FormTextInput';
import FormFileInput from './FormFileInput';
import FormTextAreaInput from './FormTextAreaField';
import FormButtonSubmit from './FormButtonSubmit';

export default function Form() {
  const [name, setName] = useState('');
  const [image, setImage] = useState();
  const handleChange = e => {
    setName(e.target.value);
  };

  const handelFileChange = e => {
    setImage(e.target.value);
    console.log(image);
    console.log(typeof e.target.value);
  };

  return (
    <form>
      <h3>Create medicine</h3>
      <div>
        <label className="form-label">Medicine name</label>
        <FormTextInput onChange={handleChange} value={name} placeholder="ex: Palacetamol" />
        <label className="form-label">Medicine properties</label>
        <FormTextInput onChange={handleChange} value={name} placeholder="ex: oxalic acid and 4,4′-bipyridine" />
        <label className="form-label">Medicine short description</label>
        <FormTextAreaInput />
        <label className="form-label">Medicine full description</label>
        <FormTextAreaInput />
        <label className="form-label">Medicine image</label>
        <FormFileInput onChange={handelFileChange} />
        <FormButtonSubmit value="Add medicine" />
      </div>
    </form>
  );
}
