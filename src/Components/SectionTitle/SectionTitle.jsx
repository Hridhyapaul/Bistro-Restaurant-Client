const SectionTitle = () => {
    return (
        <div>
            <div className="flex items-center mx-4 lg:mx-0">
                <div className="flex-1 h-0.5 bg-yellow-500 mr-2"></div>
                <div className="text-md lg:text-xl text-yellow-500 font-semibold">From 11:00 am</div>
                <div className="w-6 lg:w-20 h-0.5 bg-gray-200 mx-2"></div>
                <div className="text-md lg:text-xl text-yellow-500 font-semibold">To 10:00 pm</div>
                <div className="flex-1 h-0.5 bg-yellow-500 ml-2"></div>
            </div>
            <div className="mx-4 lg:mx-0">
                <div className="left-0 right-0 bottom-0 top-8 flex items-center justify-center lg:mt-10">
                    <hr className="flex-1 lg:flex-none lg:w-32 border-0 rounded border-t-2 lg:border-t-4 border-gray-500 mr-2" />
                    <div className="text-gray-900 font-bold text-xl lg:text-5xl flex justify-center uppercase">Order Online</div>
                    <hr className="flex-1 lg:flex-none lg:w-32 border-0 rounded border-t-2 lg:border-t-4 border-gray-500 ml-2" />
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;