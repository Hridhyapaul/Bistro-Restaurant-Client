import image from '../../../assets/home/chef-service.jpg'
const ChefService = ({title, subTitle}) => {
    return (
        <div className='mt-10 lg:mt-20 relative mx-4 lg:mx-0'>
            <img src={image} alt="" className='rounded-md h-[300px] object-cover lg:h-fit' />
            <div className=' text-white w-full absolute inset-0 flex justify-center items-center rounded-md'>
                <div className='w-[100%] lg:w-[60%] h-full lg:h-fit mx-auto space-y-4 bg-black bg-opacity-40 px-5 lg:px-10 py-5 lg:py-10 rounded-md'>
                    <h1 className='text-xl lg:text-3xl font-bold text-center'>{title}</h1>
                    <p className='text-center text-sm lg:text-lg'>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;