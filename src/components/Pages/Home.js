import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar/Navbar";
import bgind from "../../assets/Banner4.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import indomie from "../../assets/Indomie_Logo.png";
import sarimi from "../../assets/Sarimi.png";
import chitato from "../../assets/Chitato.png";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
    <div className="">
        <Navbar />
        {/* Tampilan Utama */}
        <div className="relative">
                <div id="overlay" className="absolute inset-0 bg-black opacity-60"></div>
                <img src={bgind} alt="Banner 1" className="w-full object-cover" />
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white"
                    data-aos="fade-up" // Tambahkan efek fade-up
                >
                    <h1 className="text-4xl font-bold font-poppins">
                        Selamat Datang di Indofood
                    </h1>
                    <p className="text-lg mt-2 font-poppins">
                        Produk Berkualitas untuk Keluarga Indonesia
                    </p>
                    <Link
                        className="nav-link p-3 bg-biruIndofood hover:bg-blue-900 rounded-md mt-2"
                        to="/Product"
                    >
                        Jelajahi Produk Kami
                    </Link>
                </div>
            </div>
        
        {/* Our Brand */}

        <div className="">
            <h1 className="text-3xl text-center font-medium text-FontbiruIndofood p-2 mt-5">Brand Unggulan</h1>
            
            {/* Card */}
            <div className="flex flex-wrap gap-5 w-1140 mx-auto mt-2">
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={indomie} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Indomie</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={sarimi} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Sarimi</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={indomie} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Indomie</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={sarimi} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Sarimi</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={indomie} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Indomie</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className="">
            <h1 className="text-3xl text-center font-medium text-FontbiruIndofood p-2 mt-5">Produk Terbaru</h1>
            
            {/* Card */}
            <div className="flex flex-wrap gap-5 w-1140 mx-auto mt-2">
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={chitato} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Chitato</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={chitato} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Chitato</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={chitato} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Chitato</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={chitato} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Chitato</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="w-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <div>
                        <img src={chitato} alt="Logo" className="w-32 h-20 mx-auto"/>
                        <p className="text-center">Chitato</p>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-biruIndofood rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <section className="w-full h-14 shadow-lg mt-4">
                <hr />
                <div className="flex justify-around p-2">
                    <div className="my-auto">
                        <img src={logo} alt="Logo" className="w-32"/>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link className="nav-link" to="/" class="">Beranda</Link>
                        <Link className="nav-link" to="/Product" class="">Produk</Link>
                        <Link className="nav-link" to="/ReachUs" class="">Berita & Media</Link>
                        <Link className="nav-link" to="/Career" class="">Karir</Link>
                        <Link className="nav-link" to="/AboutUs" class="">Hubungi Kami</Link>
                    </div>
                    <div className="flex gap-2">
                        <img src={instagram} alt="Instagram" className="w-10 h-10"/>
                        <img src={facebook} alt="Facebook" className="w-10 h-10"/>
                    </div>
                </div>
            </section>
    </div>
    );
}

export default Home;