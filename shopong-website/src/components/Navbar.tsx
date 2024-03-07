import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackfish">
                <Link className="navbar__link relative" href="#">Home</Link>
                <Link className="navbar__link relative" href="#">Categories</Link>
                <Link className="navbar__link relative" href="#">Jewelary</Link>
                <Link className="navbar__link relative" href="#">Perfume</Link>
                <Link className="navbar__link relative" href="#">Blog</Link>
                <Link className="navbar__link relative" href="#">Hot offers</Link>

            </div>
        </div>
    </div>
  );
};

export default Navbar;