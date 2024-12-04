import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 text-white p-4 fixed top-0">
      <div className="container mx-auto flex justify-between">
        <Link to={'/'} className={'text-xl font-bold'}>
          My Blog
        </Link>
        <div>
          <Link to="/login" className="mr-4">
            Login
          </Link>
          <Link to="/post/1">Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
