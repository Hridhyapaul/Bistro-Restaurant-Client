import SectionHeader from "../../../Components/SectionTitle/SectionHeader";
import image from '../../../assets/home/featured.jpg'
import './Features.css'

const Features = () => {
    return (
        <div className="features-bg bg-fixed object-cover text-white rounded-lg mx-4 lg:mx-0">
            <div className="bg-black bg-opacity-30 rounded-lg">
                <div className="mt-16 lg:mt-28 pt-10">
                    <SectionHeader heading="Features Items" subHeading="Check it Out"></SectionHeader>
                    <div className="lg:flex justify-center items-center lg:gap-5 lg:w-[80%] mx-auto lg:py-36 py-10 space-y-4">
                        <div className="lg:w-[48%] w-[80%] mx-auto">
                            <img className="rounded-md" src={image} alt="" />
                        </div>
                        <div className="lg:w-[48%] w-[80%] mx-auto text-center lg:text-left space-y-2">
                            <p className="font-semibold">March 20, 2023</p>
                            <h1 className="font-bold text-lg">WHERE CAN I GET SOME?</h1>
                            <p>A bistro restaurant is a casual dining establishment that originated in France. The term "bistro" itself is derived from the Russian word "bystro," meaning "quickly." Bistros are known for their cozy and welcoming atmosphere, offering a more relaxed and informal dining experience compared to fine dining establishments.</p>
                            <button className=" hover:bg-[#1F2937] border-b-2 border-[white] hover:border-[#1F2937] px-3 py-2 font-semibold rounded hover:text-yellow-500 text-white hover:transition hover:duration-500 hover:ease-in-out">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;