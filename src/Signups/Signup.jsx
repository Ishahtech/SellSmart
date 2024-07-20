import  { useState } from 'react';


const Login = () => {
  const [error, setErrors] = useState([])
  const [form, setForm] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //validate email
  const validate = () => {
    const error = {}

    if(!email) {
      error.email = "Email is Required";
    } else {
      error.email = " "
    }

    if(!password) {
      error.password = "Password is Required";
   
    } else if (password.length < 8) {
      error.password = "Password should be at least 8 characters"
    }
    else {
      error.password = " "
    }
    return error;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    
  };

  return (
    <div className="login-container">
    {/* <h1>SellSmart</h1> */}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <div className='inputContainer'>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder='Enter your email address'
          />
          </div>
          <div className="error">{error.email}</div>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className='inputContainer'>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder='1234567890'
          />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className='inputContainer'>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder='At least 8 characters'
          />
          </div>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Login;
