import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset();
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="W-[98%] px-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-[98%] bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered" />

                                <button onClick={handleValidateCaptcha} className="btn btn-xs w-fit mt-3">Validate Captcha</button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='px-8'>
                            <p className='text-center'>New here? <Link to='/register' className='text-blue-600'>Create a New Account</Link> </p>
                            <div className="divider mt-8">OR</div>

                            <div className='flex justify-center items-center gap-4 mt-8'>
                                <button className="btn btn-circle btn-outline">
                                    <FaGoogle className='text-lg'></FaGoogle>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <FaFacebookF className='text-lg'></FaFacebookF>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <FaGithub className='text-lg'></FaGithub>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;