"use client";
import React, { useState } from 'react';
import { createUserapi } from "../../store/action";
import { useDispatch } from "react-redux";
import './form.css';

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
}

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors: Partial<FormData> = {};

    
    if (!formData.FirstName.trim()) {
      formErrors.FirstName = 'First name is required';
    }
    if (!formData.LastName.trim()) {
      formErrors.LastName = 'Last name is required';
    }
    if (!formData.Email.trim()) {
      formErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      formErrors.Email = 'Invalid email format';
    }
    if (!formData.Phone.trim()) {
      formErrors.Phone = 'Mobile Number is required';
    }

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      console.log(formData);
      dispatch(createUserapi(formData));
      window.location.reload();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} dir='rtl'>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">الإسم الأول </label>
            <input name="FirstName" id="firstname" type="text" pattern="[a-zA-Z]{2,64}" placeholder="الإسم الأول" value={formData.FirstName} onChange={handleChange} required />
            {errors.FirstName && <div className="error">{errors.FirstName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="lastname">الإسم الأخير</label>
            <input name="LastName" id="lastname" type="text" pattern="[a-zA-Z]{2,64}" placeholder="الإسم الأخير" value={formData.LastName} onChange={handleChange} required />
            {errors.LastName && <div className="error">{errors.LastName}</div>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">رقم الموبايل</label>
          <input name="Phone" id="mobile" type="tel" placeholder="رقم الموبايل" pattern='01[0125][0-9]{8}' value={formData.Phone} onChange={handleChange} required />
          {errors.Phone && <div className="error">{errors.Phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">البريد الإلكترونى</label>
          <input name="Email" id="email" type="email" placeholder="البريد الإلكترونى" value={formData.Email} onChange={handleChange} required />
          {errors.Email && <div className="error">{errors.Email}</div>}
        </div>

        <button className="btn" type="submit">إرسال</button>
      </form>
    </>
  );
};

export default Form;