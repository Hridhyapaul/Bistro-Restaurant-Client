import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ food }) => {
    const { image, name, recipe, price, _id } = food;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleShoppingCart = (food) => {
        console.log(food)
        if (user && user.email) {
            const orderItem = {foodId: _id, name, image, price, email: user.email, customerName: user.displayName}
            fetch('http://localhost:3001/carts',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added to cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from:location}})
                }
            })
        }
    }
    return (
        <div className="card card-compact max-w-sm lg:max-w-[305px] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-blue-950 text-white right-0 mt-5 mr-5 px-2 py-1 rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center ">
                    <button onClick={() => handleShoppingCart(food)} className="bg-[#E8E8E8] hover:bg-[#1F2937] border-b-2 border-[#1F2937] px-3 py-2 font-semibold rounded hover:text-yellow-500 text-[#1F2937] hover:transition hover:duration-500 hover:ease-in-out">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;