
const Cover = ({img, title, subTitle}) => {
    return (
        <div className="hero h-[300px] lg:h-[600px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-4xl lg:text-6xl font-bold">{title}</h1>
                    <p className="mb-5 text-xl lg:text-3xl">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;