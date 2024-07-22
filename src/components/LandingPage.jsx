
// import posImage from '../images/posImage.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';

// const Landing = () => {
//   return (
//     <div className="Landing w-screen h-screen bg-cover" style={{ backgroundImage: `url(${posImage})` }}>
//       <header className="header flex justify-between items-center py-5 px-10 bg-white relative z-30">
//         <div className="logo text-2xl font-bold">SellSmart</div>
//         <nav className="nav">
//           <a href="#home" className="mx-4 text-black font-medium">Home</a>
//           <a href="#features" className="mx-4 text-black font-medium">Features</a>
//           <a href="#about" className="mx-4 text-black font-medium">About us</a>
//           <a href="#help" className="mx-4 text-black font-medium">Help</a>
//         </nav>
//         <div className="auth-buttons flex">
//           <button className="login ml-4 px-10 py-2 border-2 border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-800 hover:text-white">Login</button>
//           <button className="signup ml-4 px-10 py-2 border-2 border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-800 hover:text-white">Signup</button>
//         </div>
//       </header>
//       <main className="main flex items-center justify-center h-[calc(100vh-80px)] relative text-white">
//         <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//         <div className="hero-text max-w-none relative" style={{ right: '20rem', top: '3rem' }}>
//           <h1 className="text-5xl mb-5 w-[600px] leading-tight">
//             Effortlessly streamline and <span className="mr-14">enhance your sales and</span> <span className="block mt-2 mr-20">product management.</span>
//           </h1>
//           <p className="text-lg mb-10 ml-1 w-[400px] leading-tight mr-auto">
//             Monitor your goods and sales with our intuitive <span className="block mt-2 mr-[220px] ml-1">inventory manager.</span>
//           </p>
//           <div className="cta-buttons flex justify-center relative" style={{ right: '8.5rem' }}>
            
//           <button className="get-started px-8 py-3 border-2 border-white text-white font-medium rounded-md bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white">Get Started</button>
//           <button className="watch-demo px-6 py-3 border-2 border-white text-white font-medium rounded-md flex items-center bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white ml-4">
//             <FontAwesomeIcon icon={faPlay} className="video mr-2" />Watch Demo
//           </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Landing;