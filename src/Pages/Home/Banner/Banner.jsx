import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom';

const Banner = () => {
    const description = <div className="md:px-8 px-4 md:pt-12 pt-4 absolute rounded-xl md:w-[60%] w-[99%] items-end text-end  right-0 top-0 bg-gradient-to-l from-[#232222f9] to-[rgba(21, 21, 21, 0)] h-full">
        <h2 className="md:text-5xl text-start md:text-end md:font-bold font-semibold text-white md:my-6">Polling and Survey App</h2>
        <h5 className="md:text-2xl text-sm md:font-bold text-cyan-400">Welcome to our Polling Survey hub, where your opinion shapes tomorrow! Join us in influencing change one question at a time!</h5>

        <p className="md:text-xl  text-xs md:block hidden text-slate-100 md:pt-8">Your voice matters! Together, let's make a difference by sharing your valuable opinions and contributing to meaningful change through our surveys.</p>
        <Link to={'/allSurveys'}><button className='btn md:btn-lg btn-sm text-white md:font-bold bg-red-400 md:text-lg hover:bg-red-400 md:mt-8 btn-secondary'>ALL Surveys</button></Link>
    </div>
    return (
            <Carousel autoPlay='true' showThumbs ={false}>
                <div>
                    <div className='relative min-h-fit'>
                        <img src='https://i.ibb.co/fkrwcbH/22.png' />
                    </div>
                    {description}
                </div>
                <div>
                    <div className='relative min-h-fit'>
                        <img src='https://i.ibb.co/8XNbRr3/33.jpg' />
                    </div>
                    {description}
                </div>
                <div>
                    <div className='relative min-h-fit'>
                        <img src='https://i.ibb.co/BT5nwRJ/4.jpg' />
                    </div>
                    {description}
                </div>
                <div>
                    <div className='relative min-h-fit'>
                        <img src='https://i.ibb.co/ZLCKS5F/7jpg.jpg' />
                    </div>
                    {description}
                </div>
                <div>
                    <div className='relative min-h-fit'>
                        <img src='https://i.ibb.co/SfkHS6d/1.jpg' />
                    </div>
                    {description}
                </div>
               


            </Carousel>
    );
};

export default Banner;