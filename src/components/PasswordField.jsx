// const PasswordField = () => {
//   return (
//     <div>
//       <div>
//         <h3 className="mt-8 mb-2 text-md font-light text-gray-700">Password</h3>
//       </div>
//       <div>
//         <label htmlFor="password" className="sr-only">
//           Password
//         </label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           autoComplete="off"
//           required
//           className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
//           placeholder="Enter Password"
//         />

//       </div>
//     </div>
//   );
// };

// export default PasswordField;

const PasswordField = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="password" className="block text-base text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={onChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-xl"
        placeholder="Enter Password"
        required
      />
    </div>
  );
};

export default PasswordField;
