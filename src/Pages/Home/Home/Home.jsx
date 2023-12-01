import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Reviews from "../Banner/Reviews/Reviews";
import Faq from "../Banner/FAQ/FAQ";
import LatestSurvey from "../Banner/LatestSurvey";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home | Polling and Survey</title>

            </Helmet>
            <Banner></Banner>
            <LatestSurvey></LatestSurvey>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;