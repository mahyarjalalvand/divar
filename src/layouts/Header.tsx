import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 border-2 border-gray-100 mb-5 [&_div]:flex [&_span]:flex [&_span]:items-center [&_span]:text-gray-600 [&_span]:h-12.5 [&_span>p]:ms-1.5 [&_span>p]:text-sm">
      <div>
        {/* // todo get all project icons and use */}
        <Link to="/">
          {/* <img src="divar.svg" alt="" className="w-11.25 me-10" /> */}
          <span>دیوار</span>
        </Link>
        <span>
          {/* <img src="location.svg" alt="آیکن لوکیشن" /> */}
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="bg-red-800 text-white w-20 h-10 leading-10 text-center rounded-sm ms-10">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
