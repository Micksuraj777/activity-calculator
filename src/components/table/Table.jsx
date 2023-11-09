import React from 'react';

const Table = () => {
  const products = [
    {
      name: "1",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "2",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "3",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: "4",
      color: "Gray",
      category: "Phone",
      price: "$799",
    },
    {
      name: "5",
      color: "Red",
      category: "Wearables",
      price: "$999",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sl No.
            </th>
            <th scope="col" className="px-6 py-3">
              Reg No.
            </th>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Total Activity Points
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={index % 2 === 0 ? 'border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700' : 'border-b bg-white dark:bg-gray-900 dark:border-gray-700'}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">
                {product.color}
              </td>
              <td className="px-6 py-4">
                {product.category}
              </td>
              <td className="px-6 py-4 flex items-center justify-center gap-4 w-full">
                {product.price}
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
