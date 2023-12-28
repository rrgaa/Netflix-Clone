import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__content">
                    <p>&copy; 2023 Nama Perusahaan. Hak Cipta Dilindungi</p>
                    <div className="footer__social">
                        <a href="#" className="footer__socialLink">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="footer__socialLink">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="footer__socialLink">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="footer__links">
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat Penggunaan</a>
                        <a href="#">Hubungi Kami</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
