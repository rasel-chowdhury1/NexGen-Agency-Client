import pana from "../assets/pana.png";
import Company from "../assets/CompanyLogo.png";
import Company2 from "../assets/CompanyLogo2.png";
import Company3 from "../assets/CompanyLogo3.png";
import Company4 from "../assets/CompanyLogo4.png";
import Company5 from "../assets/CompanyLogo5.png";
import Company6 from "../assets/CompanyLogo6.png";
import Right from "../assets/Right.png";
import MicroPhone from "../assets/microphone.png"

const Product = () => {
    return (
        <div id="product">
            {/** product text */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={pana} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto ">
                        <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">How to design your site footer like we did</h2>
                        <p className="md:w-3/4 text-sm text-neutralGray mb-8">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className="btn-primary ">Learn More</button>
                    </div>
                </div>
            </div>

            {/** company stats */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className="md-w-1/3 ">
                        <img src={MicroPhone} alt="" className=""/>
                    </div>

                    {/** stats */}
                    <div className="md:w-2/3 mx-auto ">
                       <div>
                          <p className="md:w-4/5 text-sm text-neutralGray mb-8 leading-7">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                          <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                          <p className="text-base text-neutralDGray mb-8">British Dragon Boat Racing Association</p>
                          <div>
                            <div className="flex items-center gap-8 flex-wrap justify-between">
                                <img src={Company} alt="" className="cursor-pointer" />
                                <img src={Company2} alt="" className="cursor-pointer" />
                                <img src={Company3} alt="" className="cursor-pointer" />
                                <img src={Company4} alt="" className="cursor-pointer" />
                                <img src={Company5} alt="" className="cursor-pointer" />
                                <img src={Company6} alt="" className="cursor-pointer" />
                                <div className="">
                                    <a href="" className="font-bold text-brandPrimary hover:newtral-700 ">Meet all customers <img src={Right} alt="" className="w-5 h-3 inline-block" /></a>
                                    
                                </div>
                            </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;