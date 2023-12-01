import { Helmet } from 'react-helmet';
import useAuth from '../../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <Helmet>
                <title>User Home | Polling and Survey</title>
            </Helmet>
            <p className='text-3xl font-bold text-center pt-6'>Welcome!</p>
            <p className='text-2xl font-bold text-center p-6'>Our valuable user <span className='text-red-500'>{user.displayName}</span>.</p>
            <div className='pt-4 md:flex gap-4'>
                <div>
                    <img className='rounded-tr-3xl rounded-bl-3xl' src={user?.photoURL} alt="" />
                </div>
                <div className='text-lg p-4 space-y-2'>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>Contact: {user?.contact}</p>
                    <p>Address: {user?.address}</p>

                </div>
            </div>

        </div>
    );
};

export default UserHome;