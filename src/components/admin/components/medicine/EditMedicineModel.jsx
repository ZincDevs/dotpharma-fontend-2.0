/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'lodash';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { updateMedicine } from '../../../../api/_medicine';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import categories from '../../../../data/categories.json';
import { updateMedicineRedux } from '../../../../app/features/medicine/_medicineSlice';
import { uploadMedicineImage } from '../../../../helpers';

function EditMedicineModel({
  data: {
    isEditModalOpen, closeEditModal, medicine,
  },
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [properties, setProperties] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [shortdescription, setShortDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [dropText, setDropText] = useState('Select Category');
  const { tags } = useSelector(state => state?.tag);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;
  useEffect(() => {
    setName(medicine?.m_name);
    setProperties(medicine?.m_properties);
    setShortDescription(medicine?.m_short_descripption);
    setDescription(medicine?.m_desciption);
    setPrice(medicine?.m_price);
    setDiscount(medicine?.m_discount);
    setSelectedTags(medicine?.m_tags);
    setImage(medicine?.m_image);
    if (categories?.includes(medicine?.m_type)) {
      const idx = categories?.indexOf(medicine?.m_type);
      setDropText(categories[idx]);
      setCategory(categories[idx]);
    }
  }, [medicine]);
  const handleTagCheck = (tag, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter(tagName => tagName !== tag));
    }
  };
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isEditModalOpen} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine name&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="text"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Medicine name"
                  value={name || ''}
                  onChange={e => setName(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine properties&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="text"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Medicine properties"
                  value={properties || ''}
                  onChange={e => setProperties(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Short decription&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="text"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Ex, medicine for malaria"
                  autoComplete="family-name"
                  value={shortdescription || ''}
                  onChange={e => setShortDescription(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Full description&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="text"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Ex, It is a good cure for malaria..."
                  autoComplete="family-name"
                  value={description || ''}
                  onChange={e => setDescription(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine price&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="number"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter prince"
                  autoComplete="family-name"
                  value={price || ''}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Discount&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="number"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter discount"
                  autoComplete="family-name"
                  value={discount || ''}
                  onChange={e => setDiscount(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine Category&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <Dropdown>
                <Dropdown.Toggle className="dropdowntex" id="dropdown-basic">
                  {dropText}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map(category => (
                    <Dropdown.Item
                      href="#"
                      key={category}
                      onClick={() => {
                        setDropText(category);
                        setCategory(category);
                      }}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine image&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <br />
              <span className="woocommerce-input-wrapper">
                <input
                  type="file"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter discount"
                  autoComplete="family-name"
                  onChange={async e => {
                    setIsUploadingImage(true);
                    toast.info('Uploading image...!');
                    await uploadMedicineImage(
                      e.target.files[0],
                      (err, uploadUrl) => {
                        setIsUploadingImage(false);
                        if (err) {
                          toast.error('Unable to upload image!');
                        } else {
                          setImage(uploadUrl);
                        }
                      },
                    );
                  }}
                />
              </span>
            </p>
            <div
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Select tags&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <div className="woocommerce-input-wrapper">
                <div className="form-group mb-0">
                  {tags?.map(tag => (
                    <div key={tag.id} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        isValid
                        checked={selectedTags?.includes(tag.name)}
                        onChange={e => handleTagCheck(tag.name, e.target.checked)}
                        label={tag?.name}
                      />

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <div className="loading-container">
              {' '}
              <ColorRing
                visible
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                ]}
              />
            </div>
          ) : (
            <div className="butns-ordery-pay-mode">
              <div className="horizontal-separator" />
              <FormButtonSubmit
                value="Save medicine"
                onClick={e => {
                  const data = {
                    name,
                    properties,
                    description,
                    price,
                    shortdescription,
                    category: category === 'Select Category' ? '' : category,
                    discount,
                    m_tags: selectedTags,
                  };
                  if (name === medicine?.m_name && properties === medicine?.m_properties && description === medicine?.m_desciption && price === medicine?.m_price && shortdescription === medicine?.m_short_descripption && category === medicine?.m_type && discount === medicine?.m_discount && _.isEqual(medicine?.m_tags, data.m_tags)) {
                    toast.info('Nothing has been changed yet!');
                    return;
                  }
                  updateMedicine(axios, data, medicine.m_id, (err, data) => {
                    if (err) {
                      toast.error('Could not update medicine');
                    } else {
                      toast.success('Medicine successfully updated!');
                      dispatch(updateMedicineRedux({
                        ...medicine,
                        m_name: name,
                        m_properties: properties,
                        m_desciption: description,
                        m_price: price,
                        m_short_descripption: shortdescription,
                        m_type: category,
                        m_discount: discount,
                        m_tags: selectedTags,
                        m_image: image,
                      }));
                      closeEditModal();
                    }
                  });
                }}
              />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditMedicineModel;
