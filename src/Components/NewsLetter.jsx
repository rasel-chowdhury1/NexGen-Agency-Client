import { FaArrowRightLong } from "react-icons/fa6";

const NewsLetter = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-newtralSilver py-16" id="newwletter">
            <div>
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">Pellentesque suscipit <br/> fringilla libero eu.</h2>
                    <div className="flex justify-center lg:w-2/5 mx-auto" >
                        <button className="btn-primary flex items-center justify-center gap-2">Get a Demo <FaArrowRightLong  /></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;