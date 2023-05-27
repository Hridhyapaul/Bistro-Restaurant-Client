import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('User profile updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))

            })
    };


    return (
        <div>
            <Helmet>
                <title>Bistro | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="W-[98%] px-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-[98%] bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />

                                {errors.name && <span className="mt-2">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Name" className="input input-bordered" />

                                {errors.photo && <span className="mt-2">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />

                                {errors.email && <span className="mt-2">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    pattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-!@#$&*])/
                                })} name="password" placeholder="Password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <p className="mt-2">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="mt-2">Password must be 8 character</p>}
                                {errors.password?.type === 'pattern' && <p className="mt-2">Password must have one uppercase, one lowercase, one number & one special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='px-8'>
                            <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-600'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;