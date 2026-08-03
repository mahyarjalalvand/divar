import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="  border-2 border-gray-100 ">
      <div className="container flex justify-between items-center py-2.5 [&_div]:flex [&_span]:flex [&_span]:items-center [&_span]:text-gray-600 [&_span]:h-12.5 [&_span>p]:ms-1.5 [&_span>p]:text-sm">
        <div>
          <Link to="/">
            <img src="/divar.svg" alt="" className="w-11.25 me-10" />
          </Link>
          <div className="center gap-2">
            <img src="/location.svg" alt=" لوکیشن" className="size-6" />
            <p>تهران</p>
          </div>
        </div>
        <div className="center gap-2">
          <Link to="/auth">
            <div className="center gap-2">
              <img src="/profile.svg" alt="پروفایل" className="size-5" />
              <p>دیوار من</p>
            </div>
          </Link>
          <Link to="/dashboard" className="bg-red-800 text-white w-20 h-10 leading-10 text-center rounded-sm ms-10">
            ثبت آگهی
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
