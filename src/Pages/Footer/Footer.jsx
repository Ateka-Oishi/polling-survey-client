
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-black md:text-black text-white'>
        <div className="footer  p-10 md:flex justify-between gap-2 space-y-6 bg-slate-200">
            <div className=' text-center md:w-[30%] space-y-2'>
                <img src='https://i.ibb.co/5BXR4qt/poll.webp' className="mx-auto w-24 rounded-xl" alt="" />
                <div className='px-4'>
                    <p className=' mb-4 font-serif font-bold text-2xl text-yellow-800'>Polling & Survey</p>
                    <div className='text-gary-400 font-semibold'>
                        <p>We provide the best Services!</p>
                        <p>We are elated to introduce an unparalleled online voting experience that will elevate you to new horizons and beyond!</p>
                    </div>
                </div>
            </div>

            <div className=' px-6'>
                <span className="footer-title">Contact</span>

                <div className='space-y-2 '>
                    <p>410, Super Market </p> <p> Khilgaon, Motijheel, Dhaka</p>
                    <p>Bangladesh</p>
                    <div className='flex gap-3'>
                        <FaPhone></FaPhone>01533748593
                    </div>
                    <div className='flex gap-3'>
                        <FaEnvelope></FaEnvelope>response@polling.com
                    </div>
                </div>
                <div className="grid grid-flow-col mt-4 gap-5">
                    <Link to='https://www.facebook.com'><FaFacebook className='text-blue-600 h-8 w-8'></FaFacebook></Link>
                    <Link to='https://www.youtube.com'><FaYoutube className='text-red-600 h-8 w-8'></FaYoutube></Link>
                    <Link to='https://www.twitter.com'><FaTwitter className='text-blue-400 h-8 w-8'></FaTwitter></Link>

                    <Link to='https://www.instagram.com'><FaInstagram className='text-red-400  w-8 h-8 '></FaInstagram></Link>
                    <Link to='https://www.linkedin.com'><FaLinkedin className='text-blue-500  w-8 h-8 '></FaLinkedin></Link>
                </div>
            </div>
            <div className='pe-8 md:w-[35%]'>
                <span className="footer-title ps-8">Feedback</span>
                <div className='mx-8 space-y-2 w-full'>
                    <div className="flex-row form-control">
                        <label className="label w-[70px]">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control flex-row">
                        <label className="label w-[70px]">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control flex-row">
                        <label className="label w-[70px]">
                            <span className="label-text">Feedback</span>
                        </label>
                        <input type="text" placeholder="Feedback" name="feedback" className="input input-bordered w-full h-[60px]" />

                    </div>
                    <button className='btn bg-[#854D0E] hover:text-[#854D0E] hover:border-[#854D0E] text-white text-sm mx-auto flex justify-center px-4 mt-4'>Send</button>
                </div>

            </div>
        </div>
        <div className="footer footer-center p-4 bg-base-400 text-base-content">
            <div>
                <p className='text-white'>Copyright © 2023 - All rights reserved by <span className='text-bold text-yellow-800'>Polling & Survey</span></p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;