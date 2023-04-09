import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')!) || []);
    console.log(cartItems);
    // xóa sản phẩm
    function removeItem(id: string | number) {
        const newCartItems = cartItems.filter((item: { id: number }) => item.id !== id);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
    // sửa số lượng
    function onHandInput(event: React.ChangeEvent<HTMLInputElement>, id: string | number) {
        const newCartItems = cartItems.map((item: { id: number; quantity: number }) => {
            if (item.id === id) {
                return { ...item, quantity: parseInt(event.target.value) };
            }
            return item;
        });
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    }
    const total = cartItems.reduce((accumulator: number, currentItem: { price: number; quantity: number; }) => accumulator + currentItem.price * currentItem.quantity, 0);

    return <div className='flex justify-center'>
        <div className="w-[650px] p-2">
            <div className="flex">
                <Link to="/" className='text-red-600 text-sm flex-shrink-0'>Trở về</Link>
                <div className="text-center text-red-600 text-sm flex-1 font-bold">Giỏ hàng</div>
            </div>
            {cartItems.map((item: IProduct, index: number) => {
                return (
                    <div key={index} className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
                        <i onClick={() => removeItem(item.id)} className="fa-solid fa-x absolute right-0 mr-3 font-bold"></i>
                        <img className="h-[13rem] w-[13rem]" src={item.images?.[0].base_url} alt="" />
                        <div className="">
                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                            <h3 className='text-red-500 font-semibold mt-2'>{item.price}<span className='text-gray-400 text-sm ml-2 line-through'>{item.original_price}</span><span className="bg-red-600 text-white rounded-md ml-2 text-xs p-2">Giảm 27%</span></h3>
                            <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input onChange={() => onHandInput(event, item.id)} type="number" defaultValue={item.quantity} min={1} name="" id="" className='w-2/5 border-2 border-[#ccc] ml-3' /></div>
                            <div className="bg-[#ccc] w-[350px] mt-2 p-2 rounded-md">
                                <p>-Chương trình khuyến mãi:</p>
                                <span>Dịch vụ phòng chờ hạng thương gia tại sân bay</span>
                                <span>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="flex justify-between w-full mt-5">
                <p className='text-sm'>Tổng tiền tạm tính:</p>
                <p className='text-red-500 font-semibold'>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
            </div>
            <button className='bg-[#FF3945] border-2 text-[#FFFFFF] w-full h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] ease-linear transition-all mt-4'><a href="">Tiến hành đặt hàng</a></button>
            <button className='bg-[#FFFFFF] border-2 border-[#FF3945] text-[#FF3945] w-full h-12 rounded-md hover:text-white hover:bg-red-500 ease-linear transition-all mt-4'><a href="">Chọn thêm sản phẩm khác</a></button>
        </div>
    </div>
}

export default Cart