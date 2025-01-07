import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import berita from "../../assets/berita.jpeg";

function ReachUs() {
    return (
    <div className="container-large">
        <Navbar />

        <section>
            <h1 className="text-3xl text-center font-medium text-FontbiruIndofood p-2">Berita & Media</h1>
            <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 w-1140 mx-auto mb-5">Berita Terkini Indofood: Informasi dan Perkembangan Terbaru</h1>
            <div className="w-1140 mx-auto h-48">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row h-48 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 md:h-auto md:w-56" src={berita} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indofood Raih Penghargaan Inovasi Produk Pangan 2025</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Indofood kembali menunjukkan komitmennya dalam menciptakan produk berkualitas dengan menerima penghargaan Best Food Innovation 2025. Penghargaan ini diberikan atas keberhasilan peluncuran produk terbaru kami yang menggabungkan cita rasa lokal dengan teknologi pangan modern. Kami berterima kasih kepada konsumen setia yang selalu mendukung perjalanan kami.</p>
                    </div>
                </a>
            </div>
            <div className="w-1140 mx-auto h-48">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row h-48 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 md:h-auto md:w-56" src={berita} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ekspansi Indofood: Pabrik Baru di Jawa Timur</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Untuk memenuhi permintaan pasar yang terus meningkat, Indofood resmi membuka pabrik baru di wilayah Jawa Timur. Pabrik ini tidak hanya akan meningkatkan kapasitas produksi tetapi juga memberikan kontribusi pada penyerapan tenaga kerja lokal. Indofood berharap ekspansi ini dapat mendukung pertumbuhan ekonomi regional dan memberikan dampak positif bagi masyarakat sekitar.</p>
                    </div>
                </a>
            </div>
            <div className="w-1140 mx-auto h-48">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row h-48 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 md:h-auto md:w-56" src={berita} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Program CSR Indofood: Mendukung Pendidikan Anak Negeri</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sebagai bagian dari tanggung jawab sosial perusahaan, Indofood meluncurkan program Cerdas Bersama Indofood. Program ini bertujuan untuk meningkatkan akses pendidikan bagi anak-anak di daerah terpencil dengan menyediakan bantuan berupa beasiswa, buku pelajaran, dan infrastruktur pendidikan. Hingga saat ini, lebih dari 10.000 anak telah menerima manfaat dari program ini.</p>
                    </div>
                </a>
            </div>
            <div className="w-1140 mx-auto h-48">
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row h-48 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 md:h-auto md:w-56" src={berita} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Peluncuran Produk Baru: Mi Instan Rasa Nusantara</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Indofood terus berinovasi untuk menghadirkan rasa yang dekat dengan hati masyarakat. Kali ini, kami meluncurkan varian mi instan dengan cita rasa khas Nusantara, seperti Rendang Padang, Soto Betawi, dan Ayam Woku. Produk ini telah tersedia di berbagai toko dan pasar swalayan di seluruh Indonesia. Kami mengundang Anda untuk mencoba dan merasakan kekayaan kuliner Indonesia dalam satu mangkuk.</p>
                    </div>
                </a>
            </div>
        </section>

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

export default ReachUs;