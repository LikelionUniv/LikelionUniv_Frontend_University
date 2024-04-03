import React, { Suspense } from 'react';
import AdminPage from './components/AdminPage';

function Admin() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <AdminPage />
        </Suspense>
    );
}

export default Admin;
