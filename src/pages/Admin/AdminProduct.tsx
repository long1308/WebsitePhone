import { Link } from "react-router-dom";
import { useState } from "react";
import { IProduct } from "../../interfaces/product";
import { Image, Button, message, Popconfirm } from "antd";
// định nghĩa kiểu props
type AdminProductProps = {
  products: IProduct[];
  onRemove: (id: string) => void;
};

const AdminProduct = ({ products, onRemove }: AdminProductProps) => {
  if (!products) return <h1>Loading List Products.....</h1>;

  return (
    <div className="flex flex-col mt-8 ml-8">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 ">
          <Link
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            to={"/admin/products/add"}
          >
            Add New Product
          </Link>
          <div className="overflow-hidden">
            <table className="min-w-full  text-sm font-light text-center">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    OriginalPrice
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Active
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr className="border-b dark:border-neutral-500" key={index}>
                    <th className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </th>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Image
                        width={100}
                        src={product.images[0].base_url}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.original_price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {/* {product.description} */}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {/* <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => onRemove(product._id!)}
                      >
                        Remove
                      </button> */}
                      <Popconfirm
                        placement="topLeft"
                        title={"Bạn có chắc chắn muốn xóa không"}
                        description={product.name}
                        onConfirm={() => onRemove(product.id!)}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{ style: { background: 'red' } }}
                      >
                        <Button type="primary" danger>
                          Delete
                        </Button>
                      </Popconfirm>
                      <Link
                        to={`/admin/products/${product.id}/update`}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mx-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
