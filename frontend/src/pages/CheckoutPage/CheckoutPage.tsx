import React, { useState } from 'react';
import PersonalDetailsForm from './Form/PersonalDetailsForm';
import PaymentForm from './Form/PaymentForm';
import OrderSummary from './Form/OrderSummary';
import StepsProgressBar from './Form/StepsProgressBar';
import ProgressBar from './Form/StepsProgressBar';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formFields, setFormFields] = useState({
    // Your form fields here
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    // Other fields...
    paymentType: '',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    cvc: '',
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const setFormField = (field, value) => {
    setFormFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here using formFields
  };

  const steps = [
    {
      title: 'Personal Details',
      component: <PersonalDetailsForm />,
    },
    {
      title: 'Payment Method',
      component: (
        <PaymentForm formFields={formFields} setFormField={setFormField} />
      ),
    },
    // {
    //   title: 'Order Summary',
    //   component: <OrderSummary formFields={formFields} />,
    // },
  ];

  return (
    <div>
      <div className='bg-gray-50 '>
        {/* <div className='grid grid-cols-4 gap-4'> */}
        <div className='mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-center text-2xl font-bold'>Checkout</h2>
          <div className='col-span-1'>
            {/* Progress Bar */}
            <div className='flex justify-center items-center space-y-2 mb-6'>
              {/* {steps.map((_step, index) => (
                <div
                  key={index}
                  className={`text-center  ${
                    currentStep === index + 1
                      ? 'text-indigo-600'
                      : 'text-gray-400'
                  }`}
                >
                  Step: {index + 1}
                </div>
              ))} */}
              {/* <div className='relative w-48 '>
                <div className='h-2 bg-gray-400 rounded-full'>
                  <div
                    className='h-2 bg-indigo-600 rounded-full'
                    style={{
                      width: `${
                        ((currentStep - 1) / (steps.length - 1)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div> */}
              <ProgressBar steps={steps} currentStep={currentStep} />
            </div>
          </div>

          <div className='col-span-3'>
            {/* Form */}
            <form
              className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'
              onSubmit={handleSubmit}
            >
              {/* Step Component */}
              {steps[currentStep - 1].component}
              <OrderSummary />
            </form>

            {/* Navigation Buttons */}
            <div className='mt-8 flex justify-between'>
              {currentStep > 1 && (
                <button
                  type='button'
                  onClick={prevStep}
                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length && (
                <button
                  type='button'
                  onClick={nextStep}
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Next
                </button>
              )}
              {currentStep === steps.length && (
                <button
                  type='submit'
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Confirm Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
