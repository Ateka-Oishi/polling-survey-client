
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaClipboardList, FaCreditCard, FaEnvelope, FaFolderPlus, FaHome, FaListAlt, FaUsers, FaWallet } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    return (
        <div className="drawer drawer-mobile lg:drawer-open w-full h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  py-4">
                <label htmlFor="my-drawer-2"className="btn bg-[#854D0E] text-white hover:bg-[#854D0E] rounded-b-3xl px-4  text-black rounded-t-sm drawer-button lg:hidden">Dashboard</label>
                <div className='w-[90%] mx-auto'><Outlet></Outlet></div>
            </div>
            <div className="drawer-side  w-[62%] md:w-[90%]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu md:p-4 p-1 md:w-80 w-60 h-full bg-gradient-to-r to-[#854D0E]  from-red-100">
                    <div className="text-sm md:text-lg font-serif space-y-2 md:font-bold font-semibold  w-[90%] mb-6">
                        <label htmlFor="my-drawer-2" className=" absolute right-6 top-0 bg-transparent text-3xl text-red-800 p-1  drawer-button lg:hidden"><FaArrowAltCircleLeft></FaArrowAltCircleLeft> </label>
                        <div className="flex justify-between  md:w-full w-[60%]">
                            <img className="md:w-20 w-10 rounded-full" src='/public/cda2.PNG' alt="" />
                            <p className="md:text-xl font-serif">Polling & Survey</p>
                        </div>
                        <hr /><hr />
                        {
                            user ? <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageSurveys'><FaListAlt></FaListAlt> Manage Surveys
                                </NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'><FaUsers></FaUsers>Manage Users</NavLink></li>


                            </> : user ? <>

                                <li><NavLink to='/dashboard/addSurvey'><FaFolderPlus></FaFolderPlus> Add Survey</NavLink></li>
                                <li><NavLink to='/dashboard/mySurveys'><FaClipboardList></FaClipboardList> My Surveys</NavLink></li>
                            </> : <>

                                <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/selectedSurveys'><FaWallet></FaWallet>Selected Surveys</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaCreditCard></FaCreditCard>Payment History</NavLink></li>
                                
                            </>

                        }

                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/'><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                        
                        <li><NavLink to='/' onClick={handleLogOut}><FaArrowAltCircleRight></FaArrowAltCircleRight> Logout</NavLink></li>
                    </div>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;