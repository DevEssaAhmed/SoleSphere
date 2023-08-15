// import React from 'react';

// const ProgressBar = ({ steps, currentStep }) => {
//   return (
//     <div className='flex  items-center justify-center'>
//       {steps.map((step, index) => (
//         <div className='w-48 flex items-center justify-center'>
//           <div
//             key={index}
//             className={`flex flex-col items-center  justify-center relative ${
//               index < currentStep ? ' text-gray-500' : 'text-gray-500'
//             }`}
//           >
//             <div
//               className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                 index < currentStep
//                   ? 'bg-purple-500 text-white'
//                   : 'bg-white border'
//               }`}
//             >
//               {index + 1}
//             </div>

//             <span className='ml-2 font-medium'>{step.title}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;


const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className='flex items-center justify-center'>
      {steps.map((step, index) => (
        <div key={index} className='w-48 flex items-center justify-center'>
          <div
            className={`flex flex-col items-center justify-center relative ${
              index < currentStep ? 'text-purple-500' : 'text-gray-500'
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                index < currentStep
                  ? 'bg-purple-500 text-white'
                  : 'bg-white border border-purple-500'
              }`}
            >
              {index + 1}
            </div>

            <span className='ml-2 font-medium'>{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
