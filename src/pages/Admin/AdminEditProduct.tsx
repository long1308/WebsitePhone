import { useEffect, useState } from 'react'
import { IProduct } from '../../interfaces/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../../api/product'
type AdminEditProductProps = {
    onEdit: (product: IProduct, id: string | number) => void
}

const AdminEditProduct = ({ onEdit }: AdminEditProductProps) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const fetchProductById = async (id: string) => {
        const { data } = await getProduct(id)
        return data
    }
    const [image, setImage] = useState("")
    const { handleSubmit, register, formState: { errors }, watch } = useForm<IProduct>({
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })
    const handleChange = (event: any) => {
        console.log(event.target.value);
        setImage(event.target.value)

    }
    const onSubmit: SubmitHandler<IProduct> = (inputUpdate: IProduct) => {
        onEdit(inputUpdate, id!)
        console.log(inputUpdate);


        navigate('/admin/products')

    }
    return (

        <form action="" className="space-y-4 mt-8 ml-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row w-full" >

                <div className="md:w-2/5 p-4">
                    <h2 className="text-xl font-bold">Update ảnh sản phẩm</h2>
                    <div className='text-center m-auto'>
                        <img width={250} src={image || watch(`images.${0}.base_url`)} alt="Product image" />
                    </div>
                    <input type="text" {...register(`images.${0}.base_url`)} onChange={handleChange} className='w-full' />
                </div>

                <div className="w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Tên sản phẩm
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text"  {...register('name', { required: true })} />
                        <p className='text-red-600 text-[20px]'>
                            {errors.name?.type === 'required' && <small id="emailHelp" className="form-text text-muted">Trường Name là bắt buộc</small>}
                        </p>
                    </div>
                    <div className="price flex">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá gốc sản phẩm
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("original_price", { required: true, pattern: /^[0-9]*$/ })} />
                            <p className='text-red-600 text-[20px]'>
                                {errors.original_price?.type === 'required' && <small id="emailHelp" className="form-text text-muted">Trường Original_price là bắt buộc</small>}
                                {errors.original_price?.type === 'pattern' && <small id="emailHelp" className="form-text text-muted">Trường Price phải là số</small>}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá Khuyến Mãi
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("price", { required: true, pattern: /^[0-9]*$/ })} />
                            <p className='text-red-600 text-[20px]'>
                                {errors.price?.type === 'required' && <small id="emailHelp" className="form-text text-muted">Trường Price là bắt buộc</small>}
                                {errors.price?.type === 'pattern' && <small id="emailHelp" className="form-text text-muted">Trường Price phải là số</small>}
                            </p>
                        </div>
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-category">
                            Danh mục sản phẩm
                        </label>
                        <select className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-category">
                            <option value="">Chọn danh mục sản phẩm</option>
                            <option value="category1">Danh mục sản phẩm 1</option>
                            <option value="category2">Danh mục sản phẩm 2</option>
                            <option value="category3">Danh mục sản phẩm 3</option>
                        </select>
                    </div> */}
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                            Đặc Điểm Nổi Bật
                        </label>
                        <textarea rows={4} className="appearance-none block w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description"  {...register("description", { required: true })} ></textarea>
                        <p className='text-red-600 text-[20px]'>
                            {errors.description?.type === 'required' && <small id="emailHelp" className="form-text text-muted">Trường Description là bắt buộc</small>}
                        </p>
                    </div>
                    {/* <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                            Mô tả dài
                        </label>
                        <textarea rows={4} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description" ></textarea>
                    </div> */}
                    <button className="bg-[#00B0D7] hover:bg-blue-400 px-12 py-2 rounded-md mt-10">Cập nhật</button>
                </div>
            </div >
        </form>
    )
}

export default AdminEditProduct