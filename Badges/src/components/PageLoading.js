import React from 'react';
import './styles/PageLoading.css';
import Loader from '../components/Loader';
function PageLoading ()
{
    return (
        <div className="page-loading">
            <Loader/>
            Loading...
        </div>
    );
}

export default PageLoading;