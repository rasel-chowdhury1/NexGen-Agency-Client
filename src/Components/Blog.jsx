import blog1 from "../assets/blog.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Right from "../assets/Right.png";


const Blog = () => {
    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blog2},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3},
    ]

    return (
        <div className="px-4 lg:px-4 max-w-screen-2xl mx-auto my-12" id="blog">
             <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-4 ">Caring is the new marketing</h2>
                <p className="text-sm text-neutralGray mb-8 md:w-3/4 mx-auto">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
             </div>

             {/** all blogs */}
             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-between mx-auto w-[92%]">
                {
                    blogs.map(({id,title,image}) => <div key={id} className="w-full relative mb-12 cursor-pointer">
                        <img src={image} alt="" className="w-full hover:scale-95 transition-all duration-300 " />
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralGray font-semibold">{title}</h3>
                            <div >
                                <a href="" className="font-bold text-brandPrimary hover:newtral-700 ">ReadMore <img src={Right} alt="" className="w-5 h-3 inline-block" /></a>
                            </div>
                        </div>
                    </div>)
                }
             </div>
        </div>
    )
}

export default Blog;