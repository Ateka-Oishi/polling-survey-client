import { Link } from "react-router-dom";



const LatestSurvey = () => {
    return (
        <div>
            <h1 className="text-center md:text-3xl text-xl mt-8 btn-error w-4/12 mx-auto font-bold text-[#854D0E] border-y-4 py-4">Latest Survey Section</h1>
            <div className='md:flex md:justify-around grid grid-cols-2 md:mb-8 gap-2 md:gap-8 md:px-12 p-2 md:py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-8 gap-2 md:gap-8 md:px-12 p-2 md:py-4'>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img className='w-[90%]' src="https://i.ibb.co/L88b6C4/11.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Resident & Property</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                            <button className="btn  btn-sm text-white font-bold md:text-lg  mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/n17Xfcq/22.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Public Opinion</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                        <button className="btn  btn-sm text-white font-bold md:text-lg btn-error mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/8r8HsBg/33.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Online Survey Form</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                        <button className="btn  btn-sm text-white font-bold md:text-lg mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/sJYL1kk/44.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Facebook Live Poll</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                        <button className="btn  btn-sm text-white font-bold md:text-lg  mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/2n4vQGj/55.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Threat</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                        <button className="btn  btn-sm text-white font-bold md:text-lg  mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/SfqgdD7/66.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Collection</h2>
                        <p> Have a Look!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-sm text-white font-bold md:text-lg  mt-8 btn-error "><Link to='/allSurveys'>SELECT</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default LatestSurvey;