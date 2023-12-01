import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const { facebookSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                fetch('', )
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    toast.success("Google Login Successful");
            })
    }

     const handleFacebookLogin = () => {
        // getRedirectResult(auth)
        facebookSignIn()
        .then(result => {
            console.log(result);
            fetch('', )
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
                toast.success("Facebook Login Successful");
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage)
            
          });
    }

    return (
        <div className="">
            <p className="px-4 text-lg font-bold text-blue-700">Or Login With</p>
            {/* <div className="divider"></div> */}
            <div className="w-full border-0 py-2 rounded-2xl text-center my-4 mb-8 gap-8 flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn  text-3xl btn-outline bg-blue-400">
                    <p className="px-6 text-red-600 "><FaGoogle></FaGoogle></p>
                </button>
                <button onClick={handleFacebookLogin} className="btn text-red-600 text-3xl btn-outline bg-blue-400">
                    <p className="px-6 disabled text-blue-700"><FaFacebook></FaFacebook></p>
                </button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;
