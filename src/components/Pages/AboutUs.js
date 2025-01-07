import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => response.json())
            .then(() => {
                alert("Pesan Anda berhasil dikirim.");
                window.location.href = "/AboutUs";
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Terjadi kesalahan. Silakan coba lagi.");
            });
    };

    return (
        <div>
            <Navbar />
            <section className="w-1140 mt-10 mx-auto flex gap-4">
                <div data-aos="fade-up">
                    <h1 className="text-3xl text-center font-medium text-FontbiruIndofood border-b-2 p-2">Kontak Kami</h1>
                    <div>
                        <p className="text-xl font-medium text-FontbiruIndofood mt-4">Alamat Pusat</p>
                        <p>Jl. Jenderal Sudirman No.76-78, RT.3/RW.3, Kuningan, Setia Budi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10250</p>
                    </div>
                    <div className="flex justify-between mt-4">                
                        <span>                
                            <p className="text-xl font-medium text-FontbiruIndofood">Nomor Telepon</p>
                            <p>Phone: (021) 57958822</p>
                            <p>Fax: (021) 5793 5960</p>
                        </span>
                        <span>                
                            <p className="text-xl font-medium text-FontbiruIndofood">Email</p>
                            <p>corporate.secretary@indofood.co.id</p>
                        </span>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.42191562362!2d106.81765704220392!3d-6.2079482447961984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4036b39d9f9%3A0x1f43b882b6cd8447!2sIndofood%20CBP!5e0!3m2!1sid!2sid!4v1736225217584!5m2!1sid!2sid"
                        width="625"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
            <section className="w-1140 mx-auto">
                <h1 className="text-3xl text-center font-medium text-FontbiruIndofood border-b-2 p-2 mt-4" data-aos="fade-up">
                    Formulir Kontak
                </h1>
                <div className="w-960 mx-auto mt-4" data-aos="fade-up">
                    <form className="form" action="https://sheetdb.io/api/v1/qexufmu7ay2p0" method="post" id="sheetdb-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="data[Nama]" className="text-lg font-medium">
                                Nama
                            </label><br />
                            <input className="border border-gray-400 rounded w-960 p-2" name="data[Nama]" type="text" required />
                        </div>
                        <div>
                            <label htmlFor="data[Perusahaan]" className="text-lg font-medium">
                                Perusahaan
                            </label><br />
                            <input className="border border-gray-400 rounded w-960 p-2" name="data[Perusahaan]" type="text" required />
                        </div>
                        <div>
                            <label htmlFor="data[Email]" className="text-lg font-medium">
                                Email
                            </label><br />
                            <input className="border border-gray-400 rounded w-960 p-2" name="data[Email]" type="email" required />
                        </div>
                        <div>
                            <label htmlFor="data[Nomor Telepon]" className="text-lg font-medium">
                                Nomor Telepon
                            </label><br />
                            <input className="border border-gray-400 rounded w-960 p-2" name="data[Nomor Telepon]" type="tel" required/>
                        </div>
                        <div>
                            <label htmlFor="data[Pesan]" className="text-lg font-medium">
                                Pesan
                            </label><br />
                            <textarea className="border border-gray-400 rounded w-960 p-2" name="data[Pesan]" type="text" required />
                        </div>
                        <input name="Name" type="submit" value="Kirim" className="w-960 bg-biruIndofood p-2 rounded text-white text-lg"/>
                    </form>
                </div>
            </section>
            <section className="w-full h-14 shadow-lg mt-4" data-aos="fade-up">
                <hr />
                <div className="flex justify-around p-2">
                    <div className="my-auto">
                        <img src={logo} alt="Logo" className="w-32"/>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link className="nav-link" to="/">Beranda</Link>
                        <Link className="nav-link" to="/Product">Produk</Link>
                        <Link className="nav-link" to="/ReachUs">Berita & Media</Link>
                        <Link className="nav-link" to="/Career">Karir</Link>
                        <Link className="nav-link" to="/AboutUs">Hubungi Kami</Link>
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

export default AboutUs;
