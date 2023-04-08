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
          <Button onClick={handleLogout} className="mr-4 bg-amber-400" type="primary">Đăng Xuất</Button>
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