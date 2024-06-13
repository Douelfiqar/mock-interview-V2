const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ContentSpark</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary btn-block">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
