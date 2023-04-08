import React, { useEffect, useState } from "react"
import { IProduct } from "../../../interfaces/product"
import { getAllProducts } from "../../../api/product"
import { Skeleton } from 'antd';
import { Link, } from "react-router-dom";



// const product = () => {
//     const [products, setProducts] = useState<IProduct[]>([])

//     const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         setLoading(true);
//         (async () => {
//             const { data } = await getAllProducts()
//             setProducts(data)   

//         })()
//         setLoading(false)
//     }, [])
//     return <>
//         { loading ? <Skeleton /> : products.map((product: IProduct) => {
//             return (
//                 <div key={product.id} className="w-full max-w-sm  ">
//                     <Link to={`products/`+ product.id}>
//                         <img
//                             className="p-8 rounded-t-lg"
//                             src={product.images[0].base_url}
//                             alt="product image"
//                         />
//                     </Link>
//                     <div className="px-5 pb-5">
//                         <a href="#">
//                             <h5 className="text-sm  font-normal tracking-tight text-gray-900  ">
//                             {product.name}
//                             </h5>
//                         </a>

//                         <div className="flex items-center ">
//                             <span className=" text-sm font-bold text-red-primary ">
//                                 {product.price} ₫
//                             </span>
//                             <span className=" pl-2 text-xs font-bold text-red-secondary">
//                                 {product.original_price} ₫
//                             </span>
//                         </div>
//                         <div className="flex items-center mt-2.5 mb-5">
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5 text-black"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>First star</title>
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                             </svg>
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5 text-black"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>Second star</title>
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                             </svg>
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5 text-black"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>Third star</title>
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                             </svg>
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5 text-black"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>Fourth star</title>
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                             </svg>
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5 text-black"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <title>Fifth star</title>
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                             </svg>
//                             <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                                 5.0
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//         )}
//     </>


// }

// export default product
import { Card, Col, Row, Rate, Pagination } from 'antd';
const { Meta } = Card;
import '../../../css/Product.css'
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Product: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    // page
    const [productRatings, setProductRatings] = useState<{ [key: number | string]: number }>({});
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        (async () => {
            await getAllProducts().then(({ data }) => {
                const isVisibleProjet = data.filter((product: { isVisible: boolean; }) => product.isVisible);
                setProducts(isVisibleProjet);
            })
        })();
        setLoading(false);
    }, []);
    // Pagination: chuyển trang
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const indexOfLastProduct = currentPage * 2;
    const indexOfFirstProduct = indexOfLastProduct - 2;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <Row gutter={5}>
                {loading ? (
                    <Skeleton />
                ) : (
                    currentProducts.map((product: IProduct) => {
                        return (
                            <Col span={5} key={product.id}>
                                <Card hoverable style={{ width: 250, marginLeft: 50, marginBottom: 10 }}>
                                    <Link to={`products/${product.id}`} className="relative block">
                                        <img alt="example" src={product.images[0].base_url} style={{ transition: "transform 0.3s ease-in-out" }} />
                                        <span className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-10 text-white text-center opacity-0  transition-transform hover:opacity-100 hover:transform translate-y-0">
                                            <span className="transform translate-y-full">Xem chi tiết</span>
                                        </span>
                                    </Link>
                                    <Meta
                                        title={product.name}
                                        description={
                                            <>
                                                {product.price.toLocaleString('vi-VN')} ₫
                                                <span style={{ color: 'red', textDecoration: 'line-through' }}>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                                                </span>
                                            </>
                                        }
                                    />
                                    <span>
                                        <Rate
                                            tooltips={desc}
                                            onChange={(value) => setProductRatings({ ...productRatings, [product.id]: value })}
                                            value={productRatings[product.id]}
                                        />
                                    </span>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>
            <div className="flex  justify-center ">
                <Pagination current={currentPage} onChange={handlePageChange} pageSize={2} total={products.length} />
            </div>
        </>
    );
};

export default Product;
