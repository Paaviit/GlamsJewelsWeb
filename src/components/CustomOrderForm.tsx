import React, { useState } from 'react';

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jewelryType: '',
    budget: '',
    description: '',
    timeline: '',
    referenceImages: null as File[] | null,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.jewelryType) {
      newErrors.jewelryType = 'Please select a jewelry type';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Convert FileList to array
      const filesArray = Array.from(e.target.files);
      setFormData(prevData => ({
        ...prevData,
        referenceImages: filesArray
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Mock API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          jewelryType: '',
          budget: '',
          description: '',
          timeline: '',
          referenceImages: null,
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <p className="text-center">Thank you for your custom order request! We'll contact you soon to discuss the details.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your email"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="jewelryType" className="block text-gray-800 font-medium mb-2">
              Jewelry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="jewelryType"
              name="jewelryType"
              value={formData.jewelryType}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition appearance-none bg-white ${
                errors.jewelryType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select jewelry type</option>
              <option value="Ring">Ring</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Other">Other</option>
            </select>
            {errors.jewelryType && <p className="mt-1 text-red-500 text-sm">{errors.jewelryType}</p>}
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-gray-800 font-medium mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition appearance-none bg-white"
            >
              <option value="">Select budget range</option>
              <option value="Under $500">Under $500</option>
              <option value="$500-$1,000">$500-$1,000</option>
              <option value="$1,000-$2,500">$1,000-$2,500</option>
              <option value="$2,500-$5,000">$2,500-$5,000</option>
              <option value="$5,000+">$5,000+</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-800 font-medium mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your custom jewelry piece in detail (materials, style, inspiration, etc.)"
          ></textarea>
          {errors.description && <p className="mt-1 text-red-500 text-sm">{errors.description}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="timeline" className="block text-gray-800 font-medium mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition appearance-none bg-white"
          >
            <option value="">When do you need this by?</option>
            <option value="No Rush">No Rush</option>
            <option value="1-2 Months">1-2 Months</option>
            <option value="3-6 Weeks">3-6 Weeks</option>
            <option value="ASAP">ASAP (Rush fees may apply)</option>
          </select>
        </div>
        
        <div className="mb-8">
          <label htmlFor="referenceImages" className="block text-gray-800 font-medium mb-2">
            Reference Images (Optional)
          </label>
          <input
            type="file"
            id="referenceImages"
            name="referenceImages"
            onChange={handleFileChange}
            multiple
            accept="image/*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload any inspiration or reference images (max 5 files)
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition duration-300 flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Custom Request'
          )}
        </button>
      </form>
    </div>
  );
};

export default CustomOrderForm;