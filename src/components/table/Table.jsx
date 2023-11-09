import React from 'react';
import "../table/Table.css"
const Table = () => {
  const products = [
    {
      name: "01",
      color: "Silver",
      category: "Laptop",
      price: "100",
    },
    {
      name: "02",
      color: "White",
      category: "Laptop PC",
      price: "100",
    },
    {
      name: "03",
      color: "Black",
      category: "Accessories",
      price: "100",
    },
    {
      name: "04",
      color: "Gray",
      category: "Phone",
      price: "100",
    },
    {
      name: "05",
      color: "Red",
      category: "Wearables",
      price: "100",
    },
  ];

  return (
    <div className="table">
      <table className="w-full text-sm text-left text-black ">
        <thead className=" text-black  text-base border-b">
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
            <th scope="col" className="">
              Total Activity Points
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={index % 2 === 0 ? 'border-b bg-gray-50 dark:bg-white' : 'border-b bg-white dark:bg-purple-50 '}>
              <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                {product.name}
              </th>
              <td className="px-6 py-4 font-medium">
                {product.color}
              </td>
              <td className="px-6 py-4 font-medium">
                {product.category}
              </td>
              <td className=" font-medium">
                {product.price}
                <a href="#" className="font-medium text-purple-500 dark:text-purple-400 hover:underline ml-20">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
