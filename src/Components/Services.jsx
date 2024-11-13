import Company from "../assets/CompanyLogo.png";
import Company2 from "../assets/CompanyLogo2.png";
import Company3 from "../assets/CompanyLogo3.png";
import Company4 from "../assets/CompanyLogo4.png";
import Company5 from "../assets/CompanyLogo5.png";
import Company6 from "../assets/CompanyLogo6.png";

const Services = () => {
    const services = [
        {id:1, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments.", image: "/src/assets/Card.png"},
        {id:2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/card2.png"},
        {id:2, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/card3.png"},
    ]
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="services">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralDGray">We have been working with some Fortune 500+ clients</p>

                {/** company logo */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src={Company} alt="" />
                    <img src={Company2} alt="" />
                    <img src={Company3} alt="" />
                    <img src={Company4} alt="" />
                    <img src={Company5} alt="" />
                    <img src={Company6} alt="" />
                    <img src={Company3} alt="" />
                </div>

                {/** services card */}
                <div className="mt-20 md:w-1/2 mx-auto text-center">
                    <h2 className="text-4xl text-neutralDGray font-semibold mb-3">Manage your entire community in a single system</h2>
                    <p className="text-neutralDGray">who is NextGen suitable for?</p>
                </div>

                {/** cards */}
                <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 ">
                    {
                        services.map(({id,title,description,image}) => <div key={id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transiton-all duration-300 flex items-center justify-center h-full">
                            <div>
                                <div className="bg-[#E8F5E9] h-14 w-14  mb-4 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={image} alt="" /></div>
                                <h4 className="text-2xl font-bold text-nrutralDGrey mb-2 px-2 ">{title}</h4>
                                <p className="text-sm text-newtralGray">{description}</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Services;