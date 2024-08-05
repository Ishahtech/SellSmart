import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import SearchInput from './SearchInput';
import Category from './Category';
import Item from './Item';
import CheckoutItem from './CheckoutItem';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  useEffect(() => {
    // Fetch categories and items from the Fakestore API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(['All', ...data]));

    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const products = data.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price,
          category: product.category,
          image: product.image
        }));
        setItems(products);
        setFilteredItems(products);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredItems(items);
    }
  }, [searchQuery, items]);

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
    setCheckoutItems(
      checkoutItems.filter((item) => item.id !== itemId)
    );
    if (checkoutItems.length === 1) {
      setIsCheckoutVisible(false);
    }
  };

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className={`flex-1 p-4 ${isCheckoutVisible ? 'w-2/3' : 'w-full'}`}>
        <Heading text="Item menu" />
        <SearchInput onSearch={setSearchQuery} />
        <div className="grid grid-cols-6 gap-4 mb-4">
          {categories.map((category, index) => (
            <Category
              key={index}
              name={category}
              onClick={() =>
                category === 'All'
                  ? setFilteredItems(items)
                  : setFilteredItems(
                      items.filter((item) => item.category === category)
                    )
              }
              className="p-4 border border-gray-300 rounded-lg text-center w-full"
            />
          ))}
        </div>
        <div className={`grid gap-4 ${isCheckoutVisible ? 'grid-cols-3' : 'grid-cols-4'} mb-4 row-gap-6`}>
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
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
              Charge ${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;