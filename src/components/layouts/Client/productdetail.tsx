
import { IProduct } from "../../../interfaces/product"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../../api/product"
import { Image } from "antd"

const Products_detail = () => {
    // assertion
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [image, setImage] = useState<string>("");
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const { data } = await getProduct(id!)
            setProduct(data)
        })()
    }, [id])
    const onHandClick = (event: any) => {
        const src = event.target.getAttribute('src');
        setImage(src)

    };
    return <>
        <div className="border-b-2">
            <ul className="list-none h-8 flex items-center justify-start mx-auto max-w-[1024px] border-[#ccc] w-full text-sm cursor-pointer text-gray-400">
                <li className="mr-6"><a href="">Trang chủ</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">SamSung</a></li>
                <li className="mr-6"><a href="">{product.name}</a></li>
            </ul>
        </div>
        {/* product_Name */}
        <div className="border-b-2">
            <h1 className="text-2xl py-2 product_name mx-auto max-w-[1024px]">{product.name}</h1>
        </div>
        <div className='max-w-[1024px] mx-auto'>
            {/* layout */}
            <div className="layout_product flex my-12">
                <div className="w-[30%]">
                    <img src={image || product.images?.[0]?.base_url} alt="" className="h-[380px] w-[380px] object-cover justify-center items-center" />
                    <div className="flex flex-wrap mt-12">
                        <div className="h-16 w-16 rounded-md border-red-600 border-2 p-1 mr-3 mt-3 flex flex-col items-center justify-center">
                            <i className="fa-regular fa-star " ></i>
                            <p className="text-[10px] text-center">Tính năng nổi bật</p>
                        </div>
                        <div className="h-16 w-16 rounded-md border-gray-500 border-2 p-1 mr-3 mt-3 ">
                            <img src={product.images?.[0]?.base_url} className="w-full h-full object-cover cursor-pointer" alt="" onClick={onHandClick} />
                        </div>
                        <div className="h-16 w-16 rounded-md border-gray-500 border-2 p-1 mr-3 mt-3">
                            <img src={product.images?.[1]?.base_url} className="w-full h-full object-cover cursor-pointer" alt="" onClick={onHandClick} />
                        </div>
                        <div className="h-16 w-16 rounded-md  border-gray-500 border-2 p-1 mr-3 mt-3">
                            <img src={product.images?.[0]?.base_url} className="w-full h-full object-cover cursor-pointer" alt="" onClick={onHandClick} />
                        </div>
                    </div>
                </div>
                <div className="w-[70%] px-14 flex flex-col">
                    <div className="flex">
                        <div className="text-red-600 text-3xl">{product.price} <sup>đ</sup></div>
                        <div className="text-base mt-auto opacity-70 ml-6">{product.original_price}<sup>đ</sup></div>
                    </div>
                    <div className="mt-10 text-[15px]">
                        Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
                    </div>
                    <div className="mt-auto flex">
                        <button className="bg-[#FF3945]  text-[#FFFFFF] w-[240px] h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] hover:border-2 ease-linear transition-all"><a href="/gio-hang">Mua ngay</a></button>
                        <div className="w-12 h-12 border-red-600 border-2 ml-5 rounded-md flex justify-center items-center cursor-pointer hover:bg-white group">
                            <a href="/gio-hang">
                                <img className="w-5 h-5" src="/cart.png" alt="" />
                            </a>
                        </div>
                        <span className="w-16 text-sm ml-5 cursor-pointer"><a href="/gio-hang">Thêm vào giỏ hàng</a></span>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="product_description">
                <div className="bg-[#F2F2F2] py-2 px-5">
                    <h1 className="text-red-600 text-center text-lg uppercase">Đặc điểm nổi bật</h1>
                    <ul className="my-3 text-sm">
                        <li>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
                        <li className="mt-2">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</li>
                        <li className="mt-2">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</li>
                        <li className="mt-2">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</li>
                    </ul>
                </div>
            </div>
            <div className="mt-3 text-sm"><span>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</span></div>
            {/* product-rates */}
            <h1 className="text-xl text-[#0A263C] font-semibold mt-5">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h1>
            <span className="mt-3 text-sm">Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</span>
            <h1 className="text-lg text-[#0A263C] font-semibold mt-5">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h1>
            <span className="mt-3 text-sm">Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</span>
            <span className="mt-3 text-sm">Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</span>
            <span className="mt-3 text-sm">Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</span>
            <button className="ml-[50%] translate-x-[-50%] border-[#0A263C] border-2 text-[#0A263C] w-[335px] py-1 block mt-5 mb-[100px] rounded-lg hover:bg-[#0A263C] hover:text-white ease-linear transition-all">Xem thêm</button>
        </div>
    </>
}



export default Products_detail