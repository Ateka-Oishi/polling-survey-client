import { Helmet } from 'react-helmet';

const WelcomeHome = () => {
    return (
        <div className='h-screen'>
            <Helmet>
                <title>Dashboard | Polling and Survey</title>
            </Helmet>
            <div className="md:text-4xl text-2xl text-center mb-5 mt-5">
                <h1 className='pb-8 dark:text-white'>Welcome to </h1>
                <span className='md:text-5xl text-2xl pt-4 text-red-500 font-bold font-serif space-y-4'>Polling & Survey</span>
            </div>
        </div>
    );
};

export default WelcomeHome;