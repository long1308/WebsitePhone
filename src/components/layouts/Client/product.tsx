import React, { useEffect, useState } from "react"
import { IProduct } from "../../../interfaces/product"
import { getAllProducts } from "../../../api/product"
import { Skeleton } from 'antd';
import { Link, } from "react-router-dom";
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
