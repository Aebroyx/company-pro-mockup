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
                            <div className="grid grid-cols-4 gap-4" >
                                <div className="text-black">
                                    <div>
                                        <img src={`${data.results[0].picture.large}`} alt="" className="w-full" />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.results[0].name.title}. {data.results[0].name.first} {data.results[0].name.last}</h1>
                                    <h2>Co-Founder & CEO</h2>
                                </div>
                                <div className="text-black">
                                    <div>
                                        <img src={`${data.results[3].picture.large}`} alt="" className="w-full" />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.results[3].name.title}. {data.results[3].name.first} {data.results[3].name.last}</h1>
                                    <h2>Co-Founder & CTO</h2>
                                </div>
                                <div className="text-black">
                                    <div>
                                        <img src={`${data.results[1].picture.large}`} alt="" className="w-full" />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.results[1].name.title}. {data.results[1].name.first} {data.results[1].name.last}</h1>
                                    <h2>Chief Financial Officer</h2>
                                </div>
                                <div className="text-black">
                                    <div>
                                        <img src={`${data.results[2].picture.large}`} alt="" className="w-full" />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.results[2].name.title}. {data.results[2].name.first} {data.results[2].name.last}</h1>
                                    <h2>Chief Human Resources Officer</h2>
                                </div>
                            </div>
                            <h1 className="text-black text-4xl pb-4 pt-8 font-bold">Developers</h1>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    data.results.slice(4,6).map((items, index) => {
                                        return(
                                            <div className="text-black">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="w-full" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>Fullstack Developer</h2>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    data.results.slice(7,9).map((items, index) => {
                                        return(
                                            <div className="text-black">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="w-full" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>UI/UX Designer</h2>
                                            </div>
                                        )
                                    })
                                }
                                                        {
                                    data.results.slice(10,13).map((items, index) => {
                                        return(
                                            <div className="text-black">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="w-full" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>Frontend Developer</h2>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    data.results.slice(13,15).map((items, index) => {
                                        return(
                                            <div className="text-black">
                                                <div>
                                                    <img src={`${items.picture.large}`} alt="" className="w-full" />
                                                </div>
                                                <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                                <h2>Backend Developer</h2>
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