import componentMap from '@/Redux/ComponentMap';
import React from 'react';
import { useSelector } from 'react-redux';

function PageHeader() {
    const headerText = useSelector((state) => state.headerReducer.headerText);
    const subHeaderText = useSelector((state) => state.headerReducer.headerSubtext);
    const { buttonKey, buttonVisible } = useSelector((state) => state.headerReducer);
    const ButtonToRender = componentMap[buttonKey];
    return (
        <div className="page-header d-print-none">
            <div className="container-fluid">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        <h2 className="page-title">
                            {headerText || ''}
                        </h2>
                        <div className="page-subtitle">
                            {subHeaderText || ''}
                        </div>
                    </div>
                    <div className="col-auto ms-auto d-print-none">
                        <div className="btn-list">
                            {/*  <span className="d-none d-sm-inline">
                                <a href="#" className="btn">
                                    New view
                                </a>
                            </span> */}
                            {buttonVisible && ButtonToRender && (
                                <ButtonToRender />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
