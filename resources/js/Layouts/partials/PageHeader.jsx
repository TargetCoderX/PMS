import React from 'react';

function PageHeader({ header, subtext }) {
    return (
        <div className="page-header d-print-none">
            <div className="container-xl">
                <div className="row g-2 align-items-center">
                    <div className="col">

                        <h2 className="page-title">
                            {header || ''}
                        </h2>
                        <div className="page-pretitle">
                            {subtext || ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
