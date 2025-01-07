import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900 drop-shadow">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link className="nav-link" to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="Logo" className="w-40"/>
                </Link>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link className="nav-link" to="/" class="transition block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Beranda</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Product" class="transition block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Produk</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/ReachUs" class="transition block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Berita & Media</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Career" class="transition block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Karir</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/AboutUs" class="transition block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hubungi Kami</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;