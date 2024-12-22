import React, { useEffect, useRef } from 'react';

function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const scrollHeight = window.innerHeight - footerRef.current.getBoundingClientRect().top;
        const paddingBottom = window.getComputedStyle(footerRef.current).getPropertyValue('padding-bottom');
        const marginBottom = window.getComputedStyle(footerRef.current).getPropertyValue('margin-bottom');
        const footerHeight = footerRef.current.getBoundingClientRect().height;

        if (scrollHeight > footerHeight + parseInt(paddingBottom) + parseInt(marginBottom)) {
            footerRef.current.style.position = 'fixed';
            footerRef.current.style.bottom = 0;
            footerRef.current.style.width = '100%';
        }
    });

    return (
        <footer ref={footerRef} className="footer footer-transparent d-print-none">
            <div className="container-fluid">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright &copy; {new Date().getFullYear()}
                                <a href="." className="link-secondary">Tabler</a>.
                                All rights reserved.
                            </li>
                            <li className="list-inline-item">
                                <a href="./changelog.html" className="link-secondary" rel="noopener">
                                    v1.0.0-beta19
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

