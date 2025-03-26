import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-evenly items-center p-4 bg-[#3C6876] text-white ml-0 mr-0 mt-0">
        <NavLink to="/" end className='font-medium'>HomePage</NavLink>
        <NavLink to="/login" className='font-medium'>Login</NavLink>
        <NavLink to="/fav" className='font-medium'>Favorites</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Navbar;