import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

function Career() {
    return (
    <div className="container-large">
        <Navbar />
        
        <section>
                <h1 className="text-3xl text-center font-medium text-FontbiruIndofood border-b-2 p-2">Karir Kami</h1>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Indofood: Pilar Industri Pangan Indonesia</h1>
                <p>Indofood telah menjadi salah satu perusahaan pangan terkemuka di Indonesia, dengan sejarah panjang yang kaya akan inovasi dan dedikasi. Kami berkomitmen untuk menyediakan produk berkualitas tinggi yang menjadi bagian dari kehidupan sehari-hari masyarakat. Di Indofood, kami percaya bahwa kunci keberhasilan terletak pada talenta berbakat yang bergabung dengan kami. Oleh karena itu, kami membuka peluang karir yang luas untuk individu yang ingin tumbuh dan berkembang bersama kami.</p>
            </div>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Peluang Karir yang Beragam</h1>
                <p>Indofood menawarkan berbagai peluang karir, mulai dari bidang manufaktur, distribusi, pemasaran, hingga penelitian dan pengembangan. Kami mencari individu yang kreatif, inovatif, dan memiliki semangat untuk menghadirkan solusi terbaik bagi kebutuhan konsumen. Dengan berbagai divisi dan lini bisnis, Anda memiliki kebebasan untuk menemukan bidang yang sesuai dengan minat dan bakat Anda.</p>
            </div>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Lingkungan Kerja yang Inklusif dan Profesional</h1>
                <p>Kami bangga menciptakan lingkungan kerja yang inklusif dan mendukung pengembangan profesional. Indofood percaya bahwa keragaman adalah kunci untuk mendorong inovasi dan kreativitas. Kami menghargai kontribusi setiap individu, terlepas dari latar belakang atau pengalaman mereka. Selain itu, kami juga menyediakan pelatihan dan pengembangan karir untuk membantu karyawan mencapai potensi penuh mereka.</p>
            </div>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Bergabunglah dalam Misi Kami</h1>
                <p>Indofood tidak hanya memproduksi makanan; kami juga berkomitmen untuk memberikan dampak positif bagi masyarakat. Dengan bergabung bersama kami, Anda akan menjadi bagian dari tim yang bekerja untuk menciptakan solusi berkelanjutan bagi tantangan pangan dunia. Kami mengundang Anda untuk berkontribusi dalam misi kami membangun masa depan yang lebih baik melalui inovasi dan keberlanjutan.</p>
            </div>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Mengapa Memilih Indofood?</h1>
                <p>Di Indofood, kami memahami pentingnya keseimbangan antara karir dan kehidupan pribadi. Kami menawarkan berbagai manfaat, seperti program kesehatan, kesejahteraan karyawan, dan lingkungan kerja yang mendukung kolaborasi. Lebih dari sekadar pekerjaan, bergabung dengan Indofood berarti menjadi bagian dari keluarga besar yang saling mendukung dan mendorong kesuksesan bersama.</p>
            </div>
            <div className="w-1140 mx-auto">
                <h1 className="text-xl font-medium text-FontbiruIndofood mt-5 border-b-2 w-fit">Langkah Awal Menuju Karir Anda</h1>
                <p>Jika Anda siap untuk mengambil langkah berikutnya dalam karir Anda, Indofood adalah tempat yang tepat untuk memulai. Kunjungi halaman karir kami untuk mengeksplorasi berbagai lowongan yang tersedia. Jadilah bagian dari perjalanan kami dalam menciptakan masa depan pangan yang lebih baik untuk generasi mendatang!</p>
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

export default Career;