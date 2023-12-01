import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
        <Helmet>
            <title>Error | Polling and Survey</title>
        </Helmet>
        <div className='md:h-[700px]  mt-4'>
            <img className='mx-auto w-full h-[99%] rounded-t-xl' src='https://i.ibb.co/bHCvLyf/err1.png' alt="" />
        </div>
        <div className=' text-xl rounded-b-xl flex justify-center md:py-6 py-2'>
                <Link to='/'><button className='btn text-5xl bg-yellow-800 text-white'>Go Home</button></Link>
            </div>
       
    </div>
    );
};

export default ErrorPage;