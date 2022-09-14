/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { useFormInputValidation } from 'react-form-input-validation';
import FormTextInput from './FormTextInput';
import FormFileInput from './FormFileInput';
import FormTextAreaInput from './FormTextAreaField';
import FormButtonSubmit from './FormButtonSubmit';
import FormSelectInput from './FromSelectControl';

export default function AddMedicineForm() {
  const [name, setName] = useState('');
  const [properties, setProperties] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState('');
  const [image, setImage] = useState();

  // Must be changed to actual categories
  const categories = ['Category1', 'Category2', 'Category3', 'Category4'];

  const handleChange = e => {
    setName(e.target.value);
  };

  const handelFileChange = e => {
    setImage(e.target.value);
    console.log(image);
    console.log(typeof e.target.value);
  };

  const handlePropertyChange = e => {
    setProperties(e.target.value);
  };

  const handleShortDescriptionChange = e => {
    setShortDescription(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleFullDescriptionChange = e => {
    setFullDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create medicine</h3>
      <div>
        <div>
          <label className="form-label">Medicine name</label>
          <FormTextInput
            onChange={handleChange}
            value={name}
            placeholder="ex: Palacetamol"
            name="name"
          />
        </div>

        <div>
          <label className="form-label">Medicine properties</label>
          <FormTextInput
            onChange={handlePropertyChange}
            value={properties}
            placeholder="ex: oxalic acid and 4,4'-bipyridine"
          />
        </div>

        <div>
          <label className="form-label">Medicine short description</label>
          <FormTextAreaInput
            onChange={handleShortDescriptionChange}
            value={shortDescription}
          />
        </div>

        <div>
          <label className="form-label">Medicine full description</label>
          <FormTextAreaInput
            onChange={handleFullDescriptionChange}
            value={fullDescription}
          />
        </div>

        <div>
          <label className="form-label">Medicine price</label>
          <FormTextInput
            onChange={handlePriceChange}
            value={price}
            type="number"
          />
        </div>

        <div>
          <label className="form-label">Medicine category</label>
          <FormSelectInput
            options={categories}
            onChange={handleCategoryChange}
          />
        </div>

        <div>
          <label className="form-label">Medicine image</label>
          <FormFileInput onChange={handelFileChange} name="image" />
        </div>

        <FormButtonSubmit value="Add medicine" />
      </div>
    </form>
  );
}
