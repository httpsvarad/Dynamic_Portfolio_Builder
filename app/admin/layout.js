import React from 'react';
import SideNav from './_components/SideNav';
import Provider from './Provider';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Provider>
                <div className='w-24 fixed'>

                    <SideNav />

                </div>
                <div className='ml-24'>
                    {/* <Provider> */}
                    {children}

                    {/* </Provider> */}

                </div>
            </Provider>
        </div>
    );
}

export default AdminLayout;
