 
const EmailCodeField = () => {
  return (
    <>
      <div className="shadow-lg">
        <div>
          <h3 className="mt-8 mb-3 text-md font-light text-gray-700">Email</h3>
        </div>
        <div className="mb-10 rounded-xl">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
      </div>
    </>
  );
};

export default EmailCodeField;
