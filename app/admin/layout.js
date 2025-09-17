// import React from 'react';
// import SideNav from './_components/SideNav';
// import Provider from './Provider';

// const AdminLayout = ({ children }) => {
//     return (
//         <div>
//             <Provider>
//                 <div className='md:w-20 w-16 fixed'>
//                     <SideNav />
//                 </div>
//                 <div className='ml-16 md:ml-24'>
//                     {/* <Provider> */}
//                     {children}

//                     {/* </Provider> */}

//                 </div>
//             </Provider>
//         </div>
//     );
// }

// export default AdminLayout;





import React from 'react';
import SideNav from './_components/SideNav';
import Provider from './Provider';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex">
            <Provider>
                {/* Sidebar */}
                <div className="md:w-20 w-16 fixed top-0 left-0 h-[100dvh]">
                    <SideNav />
                </div>

                {/* Main content */}
                <div className="ml-16 md:ml-24 w-full min-h-[100dvh] overflow-y-auto">
                    {children}
                </div>
            </Provider>
        </div>
    );
}

export default AdminLayout;
