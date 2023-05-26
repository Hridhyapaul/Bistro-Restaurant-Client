import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[300px] lg:h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='bg-black bg-opacity-30 px-6 lg:px-10 py-6 lg:py-20 rounded-md'>
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-2xl lg:text-6xl font-bold">{title}</h1>
                            <p className="mb-5 text-sm lg:text-lg">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;