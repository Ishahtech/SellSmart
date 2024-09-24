// const CashierCodeField = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <h3 className="mt-8 mb-3 text-md font-light text-gray-700">
//             Cashier code
//           </h3>
//         </div>
//         <div className="mb-10 rounded-xl">
//           <label htmlFor="code-input" className="sr-only">
//             Enter Code
//           </label>

//           <input
//             id="code-input"
//             name="code"
//             type="text"
//             autoComplete="off"
//             required
//             className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
//             placeholder="Enter Code"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CashierCodeField;

const CashierCodeField = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="cashierCode" className="block text-base text-gray-700">
        Cashier Code
      </label>
      <input
        type="text"
        id="cashierCode"
        value={value}
        onChange={onChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-xl"
        placeholder="Enter Cashier Code"
        required
      />
    </div>
  );
};

export default CashierCodeField;
