import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import PersonalDetailsForm from './Form/PersonalDetailsForm';
import PaymentForm from './Form/PaymentForm';
import OrderSummary from './Form/OrderSummary';
import ProgressBar from './Form/StepsProgressBar';
import ReviewOrder from './Form/ReviewOrder';

import {
  savePaymentMethod,
  saveShippingAddress,
} from '../../store/slices/cartSlice';
import { useCreateOrderMutation } from '../../store/apis/ordersApiSlice';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state: any) => state.auth.userInfo);
  const { shippingAddress } = cart;

  const [createOrder] = useCreateOrderMutation();

  useEffect(() => {
    if (cart.cartItems.length === 0) {
      toast.error('Please add items to cart');
      navigate('/');
    }
  }, [cart.cartItems]);

  const defaultFormFields = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    phone: '',
    state: '',
    postalCode: '',
  };

  const [shippingAddressFields, setShippingAddressFields] = useState(
    shippingAddress || defaultFormFields
  );

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here using formFields
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleShipping = (e) => {
    e.preventDefault();

    // dispatch(saveShippingAddress({ ...shippingAddressFields }));

    // setCurrentStep((prevStep) => prevStep + 1);
    // Check if all shipping address fields are filled
    const isShippingAddressValid = Object.values(shippingAddressFields).every(
      (value) => value !== ''
    );

    if (!isShippingAddressValid) {
      toast.error('Please fill in all the required fields.');
    } else if (!isValidEmail(shippingAddressFields.email)) {
      toast.error('Please provide correct email');
    } else if (shippingAddressFields.country === 'select country') {
      toast.error('Please provide a country name.');
    } else {
      dispatch(saveShippingAddress({ ...shippingAddressFields }));
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const isPaymentMethodValid = paymentMethod !== '';
    if (isPaymentMethodValid) {
      dispatch(savePaymentMethod(paymentMethod));
      nextStep();
    } else {
      toast.error('Please select a Payment Method');
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      const order = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
        userId: user._id,
      };

      const res = await createOrder(order).unwrap();

      navigate(`/order/${res._id}`);
    } catch (error) {
      toast.error(error);
    }
  };

  const steps = [
    {
      title: 'Personal Details',
      component: (
        <PersonalDetailsForm
          formFields={shippingAddressFields}
          setFormFields={setShippingAddressFields}
        />
      ),
    },
    {
      title: 'Payment Method',
      component: (
        <PaymentForm
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      ),
    },
    {
      title: 'Review Order',
      component: <ReviewOrder cart={cart} />,
    },
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
              <OrderSummary
                currentStep={currentStep}
                handlePlaceOrder={handlePlaceOrder}
              />
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
              {currentStep === 1 && (
                <button
                  type='button'
                  onClick={handleShipping}
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Next
                </button>
              )}
              {currentStep === 2 && (
                <button
                  type='button'
                  onClick={handlePayment}
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Next
                </button>
              )}
              {/* {currentStep < steps.length && (
                <button
                  type='button'
                  onClick={nextStep}
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Next
                </button>
              )} */}
              {/* {currentStep === steps.length && (
                <button
                  type='submit'
                  className='px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'
                >
                  Confirm Order
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
