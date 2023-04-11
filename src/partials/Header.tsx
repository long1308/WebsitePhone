import { Button } from "antd"
import { Link, useNavigate } from "react-router-dom"


type Props = {}
const Header = (props: Props) => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user")!)
  const handleLogout = () => {
    const result = confirm("Bạn chắc chắn muốn đăng xuất !!")
    if (result) {
      // localStorage.removeItem("user")
      localStorage.clear()
      navigate("/signin")
    } else {
      return false
    }
  };
  return (
    <div className="container w-2/3  h-[64px] mx-auto flex items-center gap-7">
      <img className="w-[64px] pl-2" src="./logo.png" alt="" />
      <input className="pl-2 rounded-lg grow h-[34px] " type="text" placeholder="search" />
      <div>
        {user ?
          <div className="flex"><Button onClick={handleLogout} className="mr-4 bg-amber-400" type="primary">Đăng Xuất</Button><Link to={'/cart'} className="w-8">
            <svg  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
            </svg>
          </Link></div>
          : (<><Link to={'/signin'}>
            <Button className="mr-4 bg-amber-400" type="primary">Đăng nhập</Button>
          </Link><Link to={'/signup'}>
              <Button className="bg-amber-400" type="primary">Đăng Ký</Button>
            </Link></>)}

      </div>
    </div>
  )
}

export default Header