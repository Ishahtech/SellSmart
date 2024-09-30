// import React, { useState, useEffect } from 'react';
// import { collection, doc, updateDoc, getDocs, addDoc } from "firebase/firestore";
// import { db } from "../../firebase-config"; // Ensure this path is correct
// import Heading from './Heading';
// import SearchInput from './SearchInput';
// import Category from './Category';
// import Item from './Item';
// import CheckoutItem from './CheckoutItem';

// const Dashboard = () => {
//   const [apiItems, setApiItems] = useState([]);
//   const [firebaseItems, setFirebaseItems] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [checkoutItems, setCheckoutItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

//   useEffect(() => {
//     // Fetch items from the Fakestore API
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         const products = data.map(product => ({
//           id: product.id,
//           name: product.title,
//           price: product.price,
//           category: product.category,
//           image: product.image,
//           source: 'api', // Mark items as coming from the API
//         }));
//         setApiItems(products);
//         setFilteredItems(products);
//       });

//     // Fetch items from Firebase
//     const fetchFirebaseItems = async () => {
//       const querySnapshot = await getDocs(collection(db, "inventory"));
//       const firebaseProducts = [];
//       querySnapshot.forEach((doc) => {
//         firebaseProducts.push({ id: doc.id, ...doc.data(), source: 'firebase' });
//       });
//       setFirebaseItems(firebaseProducts);
//     };

//     fetchFirebaseItems();
//   }, []);

//   useEffect(() => {
//     // Combine items from API and Firebase
//     const combinedItems = [...apiItems, ...firebaseItems];
//     setFilteredItems(combinedItems);

//     // Set categories from the combined data
//     const categories = [...new Set(combinedItems.map(item => item.category))];
//     setCategories(['All', ...categories]);
//   }, [apiItems, firebaseItems]);

//   useEffect(() => {
//     if (searchQuery) {
//       setFilteredItems(
//         apiItems.concat(firebaseItems).filter((item) =>
//           item.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredItems(apiItems.concat(firebaseItems));
//     }
//   }, [searchQuery, apiItems, firebaseItems]);

//   const handleAddToCheckout = (item) => {
//     const existingItem = checkoutItems.find((i) => i.id === item.id);
//     if (existingItem) {
//       setCheckoutItems(
//         checkoutItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       );
//     } else {
//       setCheckoutItems([...checkoutItems, { ...item, quantity: 1 }]);
//     }
//     setIsCheckoutVisible(true);
//   };

//   const handleRemoveFromCheckout = (itemId) => {
//     setCheckoutItems(
//       checkoutItems.filter((item) => item.id !== itemId)
//     );
//     if (checkoutItems.length === 1) {
//       setIsCheckoutVisible(false);
//     }
//   };

//   const handleCharge = async () => {
//     // Update inventory quantities in Firebase for items from Firebase
//     for (let item of checkoutItems) {
//       if (item.source === 'firebase') {
//         const itemRef = doc(db, "inventory", item.id);
//         await updateDoc(itemRef, {
//           quantity: item.quantity - item.quantity,
//         });
//       }
//     }

//     // Record the sale in Firebase
//     const saleData = {
//       items: checkoutItems,
//       totalAmount: total,
//       timestamp: new Date(),
//     };
//     await addDoc(collection(db, "sales"), saleData);

//     // Clear the checkout items after successful sale
//     setCheckoutItems([]);
//     setIsCheckoutVisible(false);
//   };

//   const total = checkoutItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="flex h-screen">
//       <div className={`flex-1 p-4 ${isCheckoutVisible ? 'w-2/3' : 'w-full'}`}>
//         <Heading text="Item menu" />
//         <SearchInput onSearch={setSearchQuery} />
//         <div className="grid grid-cols-6 gap-4 mb-4">
//           {categories.map((category, index) => (
//             <Category
//               key={index}
//               name={category}
//               onClick={() =>
//                 category === 'All'
//                   ? setFilteredItems(apiItems.concat(firebaseItems))
//                   : setFilteredItems(
//                       apiItems.concat(firebaseItems).filter((item) => item.category === category)
//                     )
//               }
//               className="p-4 border border-gray-300 rounded-lg text-center w-full"
//             />
//           ))}
//         </div>
//         <div className={`grid gap-4 ${isCheckoutVisible ? 'grid-cols-3' : 'grid-cols-4'} mb-4 row-gap-6`}>
//           {filteredItems.map((item) => (
//             <Item key={item.id} item={item} onAdd={handleAddToCheckout} />
//           ))}
//         </div>
//       </div>
//       {isCheckoutVisible && (
//         <div className="w-1/3 p-4 border-l border-gray-200 bg-gray-50">
//           <div className="border p-4 rounded shadow h-full">
//             <h2 className="text-xl font-bold mb-4">Items ordered</h2>
//             <div className="mb-4 space-y-4">
//               {checkoutItems.map((item) => (
//                 <CheckoutItem
//                   key={item.id}
//                   item={item}
//                   onRemove={handleRemoveFromCheckout}
//                 />
//               ))}
//             </div>
//             <div className="flex justify-between items-center font-bold text-lg mt-4">
//               <div>Total:</div>
//               <div>${total.toFixed(2)}</div>
//             </div>
//             <button
//               className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
//               onClick={handleCharge}
//             >
//               Charge ${total.toFixed(2)}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config"; // Ensure this path is correct
import Heading from "./Heading";
import SearchInput from "./SearchInput";
import Category from "./Category";
import Item from "./Item";
import CheckoutItem from "./CheckoutItem";

const Dashboard = () => {
  const [apiItems, setApiItems] = useState([]);
  const [firebaseItems, setFirebaseItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // Payment method state
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false); // Modal visibility

  useEffect(() => {
    // Fetch items from the Fakestore API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          category: product.category,
          image: product.image,
          source: "api", // Mark items as coming from the API
        }));
        setApiItems(products);
        setFilteredItems(products);
      });

    // Fetch items from Firebase
    const fetchFirebaseItems = async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      const firebaseProducts = [];
      querySnapshot.forEach((doc) => {
        firebaseProducts.push({
          id: doc.id,
          ...doc.data(),
          source: "firebase",
        });
      });
      setFirebaseItems(firebaseProducts);
    };

    fetchFirebaseItems();
  }, []);

  useEffect(() => {
    // Combine items from API and Firebase
    const combinedItems = [...apiItems, ...firebaseItems];
    setFilteredItems(combinedItems);

    // Set categories from the combined data
    const categories = [...new Set(combinedItems.map((item) => item.category))];
    setCategories(["All", ...categories]);
  }, [apiItems, firebaseItems]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredItems(
        apiItems
          .concat(firebaseItems)
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    } else {
      setFilteredItems(apiItems.concat(firebaseItems));
    }
  }, [searchQuery, apiItems, firebaseItems]);

  const handleAddToCheckout = (item) => {
    const existingItem = checkoutItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCheckoutItems(
        checkoutItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCheckoutItems([...checkoutItems, { ...item, quantity: 1 }]);
    }
    setIsCheckoutVisible(true);
  };

  const handleRemoveFromCheckout = (itemId) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== itemId));
    if (checkoutItems.length === 1) {
      setIsCheckoutVisible(false);
    }
  };

  const handleCharge = async () => {
    // Ensure a payment method is selected
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Update inventory quantities in Firebase for items from Firebase
    for (let item of checkoutItems) {
      if (item.source === "firebase") {
        const itemRef = doc(db, "inventory", item.id);
        await updateDoc(itemRef, {
          quantity: item.quantity - item.quantity,
        });
      }
    }

    // Record the sale in Firebase
    const saleData = {
      items: checkoutItems,
      totalAmount: total,
      paymentMethod, // Add payment method to sale record
      timestamp: new Date(),
    };
    await addDoc(collection(db, "sales"), saleData);

    // Clear the checkout items after successful sale
    setCheckoutItems([]);
    setIsCheckoutVisible(false);
    setIsPaymentModalVisible(false); // Close modal after charge
  };

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex h-screen">
      <div className={`flex-1 p-4 ${isCheckoutVisible ? "w-2/3" : "w-full"}`}>
        <Heading text="Item menu" />
        <SearchInput onSearch={setSearchQuery} />
        <div className="grid grid-cols-6 gap-4 mb-4">
          {categories.map((category, index) => (
            <Category
              key={index}
              name={category}
              onClick={() =>
                category === "All"
                  ? setFilteredItems(apiItems.concat(firebaseItems))
                  : setFilteredItems(
                      apiItems
                        .concat(firebaseItems)
                        .filter((item) => item.category === category)
                    )
              }
              className="p-4 border border-gray-300 rounded-lg text-center w-full"
            />
          ))}
        </div>
        <div
          className={`grid gap-4 ${
            isCheckoutVisible ? "grid-cols-3" : "grid-cols-4"
          } mb-4 row-gap-6`}
        >
          {filteredItems.map((item) => (
            <Item key={item.id} item={item} onAdd={handleAddToCheckout} />
          ))}
        </div>
      </div>
      {isCheckoutVisible && (
        <div className="w-1/3 p-4 border-l border-gray-200 bg-gray-50">
          <div className="border p-4 rounded shadow h-full">
            <h2 className="text-xl font-bold mb-4">Items ordered</h2>
            <div className="mb-4 space-y-4">
              {checkoutItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveFromCheckout}
                />
              ))}
            </div>
            <div className="flex justify-between items-center font-bold text-lg mt-4">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => setIsPaymentModalVisible(true)} // Show payment modal
            >
              Charge ${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}

      {isPaymentModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Select Payment Method
            </h3>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="">-- Select Payment Method --</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="transfer">Transfer</option>
            </select>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                onClick={() => setIsPaymentModalVisible(false)} // Close modal
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={handleCharge}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
