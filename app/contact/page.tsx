"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', phone: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus({ loading: true, success: false, error: '' });
      
      try {
        const response = await fetch('http://localhost:8000/api/contact-us', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            location: formData.address, // mapping address to location as per backend
            phone: formData.phone,
            message: formData.message
          })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setSubmitStatus({
          loading: false,
          success: true,
          error: ''
        });

        // Clear form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        });

      } catch (error) {
        setSubmitStatus({
          loading: false,
          success: false,
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }
    }
  };

  return (
    <div className='bg-black pt-40'>
      <div className="bg text-white min-h-screen px-8 pt-16 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-mansory mb-8">CONTACT US</h1>
          
          {/* Status Messages */}
          {submitStatus.success && (
            <div className="bg-green-500 text-white p-4 rounded mb-4">
              Your message has been sent successfully!
            </div>
          )}
          {submitStatus.error && (
            <div className="bg-red-500 text-white p-4 rounded mb-4">
              {submitStatus.error}
            </div>
          )}
          
          <p className="mb-8 text-sm">
            Fill in the contact form and specify the context and the project you require
            support for in as much detail as possible and you will receive targeted and
            exhaustive answers to all your queries.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-white"
                  disabled={submitStatus.loading}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-white"
                  disabled={submitStatus.loading}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-white"
                  disabled={submitStatus.loading}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-white"
                  disabled={submitStatus.loading}
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border border-gray-600 rounded p-2 text-white"
                disabled={submitStatus.loading}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition duration-300 disabled:opacity-50"
              disabled={submitStatus.loading}
            >
              {submitStatus.loading ? 'SENDING...' : 'SEND REQUEST'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;