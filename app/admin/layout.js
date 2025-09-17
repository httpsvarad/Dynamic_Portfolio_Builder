import React from 'react';
import SideNav from './_components/SideNav';
import Provider from './Provider';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Provider>
                <div className='md:w-20 w-16 fixed'>
                    <SideNav />
                </div>
                <div className='ml-16 md:ml-24'>
                    {/* <Provider> */}
                    {children}

                    {/* </Provider> */}

                </div>
            </Provider>
        </div>
    );
}

export default AdminLayout;
