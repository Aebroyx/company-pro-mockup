import Timeline from "../Components/Timeline"

async function getData() {
    const res = await fetch('https://randomuser.me/api/?results=15&seed=logic')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function About() {
    const data = await getData()
    return(
        <>
            <section id='overview' className="text-black mx-4 my-12">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-4xl font-bold pb-4">
                        Company History
                    </h2>
                    <div className="py-12 hidden md:block">
                        <Timeline/>
                    </div>
                </div>
                <div className="mx-8 container flex flex-col mt-4 gap-4">
                    <p>
                        Quantum Logic Inc. is a leading technology company specializing in artificial
                        intelligence and software development. Since our establishment, we have been
                        at the forefront of innovation, creating intelligent solutions that transform
                        industries.
                    </p>
                    
                    <p>
                    Founded in 2023, Quantum Logic Inc. has a rich history of pushing the boundaries
                    of technology. From our early days to the present, our journey has been marked by
                    continuous growth and a commitment to excellence.
                    </p>
                    
                    <h3 className="text-2xl">Our Team</h3>
                    <p>
                    At Quantum Logic Inc., we pride ourselves on having a diverse and talented team of
                    professionals. Our experts in artificial intelligence, machine learning, and software
                    development collaborate seamlessly to drive innovation and deliver cutting-edge solutions.
                    </p>

                    <section id="team" className="">
                        <div className="bg-white">
                            <h1 className="text-black text-4xl pb-4 font-bold">Leadership</h1>
                            <div className="grid grid-rows-4 gap-4" >
                                <div className="flex text-black">
                                    <div className="flex w-1/3 flex-col justify-center items-center">
                                        <div>
                                            <img src={`${data.results[0].picture.large}`} alt="" className="" />
                                        </div>
                                        <h1 className="text-xl font-bold">{data.results[0].name.title}. {data.results[0].name.first} {data.results[0].name.last}</h1>
                                        <h2>Co-Founder & CEO</h2>
                                    </div>
                                    <div className="flex w-2/3 justify-center items-center">
                                        <p>
                                        {data.results[0].name.title}. {data.results[0].name.first} {data.results[0].name.last}, Ph.D. in Computer Science, is the visionary CEO of Quantum Logic Inc., a leading AI company. With a rich background in academia and industry, she has seamlessly blended groundbreaking research with ethical AI practices. She is renowned for her leadership in pushing the boundaries of technology, inspiring teams to create innovative AI solutions. Under her guidance, Quantum Logic thrives as a global hub for AI excellence, committed to harnessing artificial intelligence for the greater good and making impactful contributions to society.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex text-black">
                                    <div className="flex w-1/3 flex-col justify-center items-center">
                                        <div>
                                            <img src={`${data.results[3].picture.large}`} alt="" className="" />
                                        </div>
                                        <h1 className="text-xl font-bold">{data.results[3].name.title}. {data.results[3].name.first} {data.results[0].name.last}</h1>
                                        <h2>Co-Founder & CTO</h2>
                                    </div>
                                    <div className="flex w-2/3 justify-center items-center">
                                        <p>
                                            {data.results[3].name.title}. {data.results[3].name.first} {data.results[0].name.last}, Ph.D. in Electrical Engineering, serves as the innovative Chief Technology Officer at Quantum Logic Inc. With a proven track record in leading R&D teams, He excels in translating theoretical AI concepts into practical applications. His expertise and visionary approach guide Quantum Logic's technical direction, ensuring the company remains at the forefront of AI innovation. His commitment to scalability and real-world impact contributes to Quantum Logic's mission of advancing AI for positive societal change.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex text-black">
                                    <div className="flex w-1/3 flex-col justify-center items-center">
                                        <div>
                                            <img src={`${data.results[1].picture.large}`} alt="" className="" />
                                        </div>
                                        <h1 className="text-xl font-bold">{data.results[1].name.title}. {data.results[1].name.first} {data.results[1].name.last}</h1>
                                        <h2>Chief Financial Officer</h2>
                                    </div>
                                    <div className="flex w-2/3 justify-center items-center">
                                        <p>
                                            {data.results[1].name.title}. {data.results[1].name.first} {data.results[1].name.last}, the Chief Financial Officer at Quantum Logic Inc. With a strong background in finance and strategic planning, She plays a pivotal role in ensuring the financial health and sustainability of the company. Her expertise includes financial analysis, risk management, and resource allocation. Under the stewardship, Quantum Logic maintains fiscal responsibility while fueling innovation in the dynamic field of artificial intelligence.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex text-black">
                                    <div className="flex w-1/3 flex-col justify-center items-center">
                                        <div>
                                            <img src={`${data.results[2].picture.large}`} alt="" className="" />
                                        </div>
                                        <h1 className="text-xl font-bold">{data.results[2].name.title}. {data.results[2].name.first} {data.results[2].name.last}</h1>
                                        <h2>Chief Human Resources Officer</h2>
                                    </div>
                                    <div className="flex w-2/3 justify-center items-center">
                                        <p>
                                            {data.results[2].name.title}. {data.results[2].name.first} {data.results[2].name.last}, the Chief Human Resource Officer at Quantum Logic Inc. With a proven track record in HR leadership, she fosters a vibrant and inclusive workplace culture. Her expertise in talent acquisition, employee development, and organizational well-being ensures Quantum Logic attracts and retains top-tier talent. Her strategic people-centric approach aligns with the company's commitment to nurturing a diverse and collaborative environment, where employees thrive and contribute to the success of Quantum Logic's transformative AI initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-black text-4xl pb-4 pt-8 font-bold">Project Managers</h1>
                            <div className="grid grid-rows-4 gap-4">
                                {
                                    data.results.slice(4,5).map((items, index) => {
                                        return(
                                            <div className="flex text-black">
                                                <div className="flex w-1/3 flex-col justify-center items-center">
                                                    <div>
                                                        <img src={`${items.picture.large}`} alt="" className="" />
                                                    </div>
                                                    <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                    <h2>PM Fullstack</h2>
                                                </div>
                                                <div className="flex w-2/3 justify-center items-center">
                                                    <p>
                                                    {items.name.title}. {items.name.first} {items.name.last}, the Fullstack Project Manager at Quantum Logic Inc. He seamlessly combines technical acumen with project management expertise, overseeing end-to-end development cycles. With a background in both frontend and backend technologies, he ensures cohesive collaboration between software engineers and designers. Jason's role is crucial in delivering AI solutions on time and with precision, meeting both technical requirements and user experience standards. His multitasking prowess and comprehensive understanding of the development process make him instrumental in driving Quantum Logic's innovative projects to successful completion.
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    data.results.slice(7,8).map((items, index) => {
                                        return(
                                            <div className="flex text-black">
                                            <div className="flex w-1/3 flex-col justify-center items-center">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>PM UI/UX</h2>
                                            </div>
                                            <div className="flex w-2/3 justify-center items-center">
                                                <p>
                                                {items.name.title}. {items.name.first} {items.name.last}, the UI/UX Project Manager at Quantum Logic Inc. She brings a unique blend of design sensibility and project management skills to ensure seamless and user-centric experiences. With a background in both UI and UX, she orchestrates the creative process, from ideation to implementation. Her role is vital in aligning design principles with project timelines, ensuring Quantum Logic's AI solutions not only meet technical specifications but also deliver intuitive and visually appealing user interfaces. Her meticulous approach and dedication to user experience contribute to the success of Quantum Logic's innovative projects. 
                                                </p>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                                        {
                                    data.results.slice(10,11).map((items, index) => {
                                        return(
                                            <div className="flex text-black">
                                            <div className="flex w-1/3 flex-col justify-center items-center">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>PM Frontend</h2>
                                            </div>
                                            <div className="flex w-2/3 justify-center items-center">
                                                <p>
                                                {items.name.title}. {items.name.first} {items.name.last}, the Frontend Project Manager at Quantum Logic Inc. With a passion for crafting visually engaging and highly functional user interfaces, she plays a key role in leading the frontend development team. Her expertise lies in translating design concepts into responsive and user-friendly web applications. He ensures that Quantum Logic's AI solutions not only meet technical standards but also provide an exceptional user experience. With a keen eye for detail and a commitment to staying at the forefront of frontend technologies,  drives the successful implementation of innovative and user-centric features in Quantum Logic's projects.
                                                </p>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                {
                                    data.results.slice(13,14).map((items, index) => {
                                        return(
                                            <div className="flex text-black">
                                            <div className="flex w-1/3 flex-col justify-center items-center">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>PM Backend</h2>
                                            </div>
                                            <div className="flex w-2/3 justify-center items-center">
                                                <p>
                                                {items.name.title}. {items.name.first} {items.name.last}, the Backend Project Manager at Quantum Logic Inc. She is a seasoned professional with a strong background in backend development and project management. Leading the backend development team, she excels in architecting robust server-side solutions that power Quantum Logic's AI applications. Her expertise lies in optimizing performance, scalability, and ensuring seamless integration with frontend systems. Her strategic oversight ensures that Quantum Logic's AI solutions not only meet technical specifications but also operate efficiently and reliably. Her commitment to backend excellence contributes to the overall success of Quantum Logic's cutting-edge projects.
                                                </p>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    
                    <h3 className="text-2xl">Our Culture</h3>
                    <p>
                    Our company culture is built on a foundation of creativity, collaboration, and
                    a passion for technology. We foster an environment where ideas flourish, and our
                    team members are empowered to make a real impact.
                    </p>
                </div>
            </section>
        </>
    )
}