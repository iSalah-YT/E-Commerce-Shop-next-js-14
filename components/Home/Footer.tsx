import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* Define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            SMA Shop
          </h1>

          <p className="text-sm text-black opacity-60">
            {/* about the shop */}
            After viewing product detail pages, look here to find an easy way to
            navigate back to pages you are interested in
          </p>

          <p className="text-base mt-6 text-black opacity-80">
            ( +000 ) 123 456 7890 - info@sma_shop.com
          </p>
        </div>

        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Information</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Return Policy</p>
          <p className="footer__link">DropShipping</p>
          <p className="footer__link">Shipping Policy</p>
        </div>

        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track Order</p>
        </div>

        {/* 4th part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Shop</h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">Sale Products</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          © 2024 SMA Shop. All rights reserved
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
