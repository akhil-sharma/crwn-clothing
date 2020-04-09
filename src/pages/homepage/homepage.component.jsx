import React from 'react'

import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component'

const Home = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

// const Home = () => (
//     <div>
//         <div className='homepage'>
//             <div className='children'>
//                 <span>Name</span>
//             </div>
//             <div className='children'>
//                 <span>New Name</span>
//             </div>
//             <div className='children'>
//                 <span>Cool Name</span>
//             </div>
//             <div className='children'>
//                 <span>space age</span>
//             </div>
//             <div className='children'>
//                 <span>gerome butler</span>
//             </div>
//         </div>
//         <div className="testDiv">
//             <div className="hildren">
//                 <span>apple</span>
//             </div>
//             <div className="hildren">
//                 <span>orage</span>
//             </div>
//             <div className="hildren">
//                 <span>mango</span>
//             </div>
//             <div className="hildren">
//                 <span>banana</span>
//             </div>
//         </div>
//     </div>
// );

export default Home;