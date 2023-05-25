import image from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
    return (
        <div className='mt-10 lg:mt-20 relative mx-4 lg:mx-0'>
            <img src={image} alt="" className='rounded-md h-[300px] object-cover lg:h-fit' />
            <div className='bg-black text-white w-full absolute inset-0 bg-opacity-40 flex justify-center items-center rounded-md'>
                <div className='w-[80%] lg:w-[60%] mx-auto space-y-4'>
                    <h1 className='text-xl lg:text-3xl font-bold text-center'>The Chef-Service Experience at Bistro Restaurant</h1>
                    <p className='text-center text-sm lg:text-md'>At Bistro Restaurant, we also take pride in our chef's ability to cater to various dietary preferences and restrictions. Our chefs are well-versed in creating vegetarian, vegan, gluten-free, and other specialized dishes without compromising on taste or quality. Just let our staff know about your dietary requirements, and our chefs will ensure you have a delightful dining experience tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;