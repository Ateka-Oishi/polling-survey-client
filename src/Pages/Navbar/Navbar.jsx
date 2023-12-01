import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserAlt } from 'react-icons/fa';
// import useAdmin from "../../Hooks/useAdmin";
// import useProUser from "../../Hooks/useProUser";

const Navbar = () => {
    // const [isAdmin] = useAdmin();
    // const [isProUser] = useProUser();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };


    return (
        <div>

            <div className="navbar md:bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-xl lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div className=' text-2xl font-serif text-slate-600 className="dropdown dropdown-end w-[80%] space-y-2  justify-end"'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/surveysPage'>Surveys</Link></li>
                                <li><Link to='/surveyDetails'>SurveyDetails</Link></li>
                                {
                                    user ?
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        : <></>
                                }
                                {
                                    user ?
                                        <li><Link to='/pricing'>Pricing</Link></li>
                                        : <></>
                                }
                                
                            </div>
                        </ul>
                    </div>
                    <div className=" border-3 w-full ">
                        <img className=' h-20 w-[50%] md:block hidden' src='https://i.ibb.co/5BXR4qt/poll.webp' alt="" />
                        <p className='p-3  font-serif text-sm text-center font-semibold block md:hidden'>Polling & Survey</p>


                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 border-2 px-6 pt-4 bg-cyan-100 rounded-t-3xl">
                        <div className=' text-2xl font-serif text-slate-600  flex justify-evenly gap-4 '>
                            <a className='rounded-2xl  hover:text-red-400  '><Link to='/'>Home</Link></a>
                            <a className='rounded-2xl  hover:text-red-400  '><Link to='/surveysPage'>Surveys</Link></a>
                            <a className='rounded-2xl  hover:text-red-400  '><Link to='/surveyDetails'>SurveyDetails</Link></a>
                            {
                                user ?
                                    <a className=' hover:text-red-400 '><Link to='/dashboard'>Dashboard</Link></a>
                                    : <></>
                                    
                            }
                            {
                                user ?
                                    <a className=' hover:text-red-400 '><Link to='/pricing'>Pricing</Link></a>
                                    : <></>
                                    
                            }
                           
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end md:pe-4">
                        <label tabIndex={0} className="btn-lg btn-info btn-outline btn-circle avatar ">
                            <div className="text-6xl border-4 text-slate-400 rounded-full">

                                {
                                    user?.email ? <img src={user.photoURL} alt="USER" />
                                        : <Link to='/login'><FaUserAlt></FaUserAlt></Link>
                                }
                            </div>
                        </label>
                         {
                            user ?
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">

{
                                        user ? <>

                                            <li><Link to='/dashboard/adminHome'>My Profile</Link></li>
                                            <li><Link to='/dashboard/adminHome'>Edit Profile</Link></li>
                                        </> :
                                            user ? <>
                                                <li><Link to='/dashboard/proUserHome'>My Profile</Link></li>
                                                <li><Link to='/dashboard/proUserHome'>Edit Profile</Link></li>
                                            </>
                                                : <>
                                                    <li><Link to='/dashboard/userHome'>My Profile</Link></li>
                                                    <li><Link to='/dashboard/userHome'>Edit Profile</Link></li>
                                                </>
                                    }
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul> : <></>
                        } 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;