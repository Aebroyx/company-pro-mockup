import Image from "next/image"

async function getData() {
    const res = await fetch('https://randomuser.me/api/?results=15&seed=logic')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Team() {
    const data = await getData()
    return(
        <>
            <section id="team" className="m-8">
                <div className="bg-white">
                    <h1 className="text-black text-4xl pb-4 font-bold">Leadership</h1>
                    <div className="grid grid-cols-4 gap-4" >
                             <div className="text-black">
                                <div>
                                    <Image src={`${data.results[0].picture.large}`} alt="" width={100} height={100} className="w-full" />
                                </div>
                                <h1 className="text-xl font-bold">{data.results[0].name.title}. {data.results[0].name.first} {data.results[0].name.last}</h1>
                                <h2>Co-Founder & CEO</h2>
                                <h3 className="hidden md:block">Email: {data.results[0].email}</h3>
                            </div>
                            <div className="text-black">
                                <div>
                                    <Image src={`${data.results[3].picture.large}`} width={100} height={100} alt="" className="w-full" />
                                </div>
                                <h1 className="text-xl font-bold">{data.results[3].name.title}. {data.results[3].name.first} {data.results[3].name.last}</h1>
                                <h2>Co-Founder & CTO</h2>
                                <h3 className="hidden md:block">Email: {data.results[3].email}</h3>
                            </div>
                            <div className="text-black">
                                <div>
                                    <Image src={`${data.results[1].picture.large}`} alt="" width={100} height={100} className="w-full" />
                                </div>
                                <h1 className="text-xl font-bold">{data.results[1].name.title}. {data.results[1].name.first} {data.results[1].name.last}</h1>
                                <h2>Chief Financial Officer</h2>
                                <h3 className="hidden md:block">Email: {data.results[1].email}</h3>
                            </div>
                            <div className="text-black">
                                <div>
                                    <Image src={`${data.results[2].picture.large}`} alt="" width={100} height={100} className="w-full" />
                                </div>
                                <h1 className="text-xl font-bold">{data.results[2].name.title}. {data.results[2].name.first} {data.results[2].name.last}</h1>
                                <h2>Chief Human Resources Officer</h2>
                                <h3 className="hidden md:block">Email: {data.results[2].email}</h3>
                            </div>
                    </div>
                    <h1 className="text-black text-4xl pb-4 pt-8 font-bold">Developers</h1>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            data.results.slice(4,6).map((items, index) => {
                                return(
                                    <div key={index} className="text-black">
                                        <div>
                                            <Image src={`${items.picture.large}`} alt="" width={100} height={100} className="w-full" />
                                        </div>
                                        <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                        <h2>Fullstack Developer</h2>
                                        <h3 className="hidden md:block">Email: {items.email}</h3>
                                    </div>
                                )
                            })
                        }
                        {
                            data.results.slice(7,9).map((items, index) => {
                                return(
                                    <div key={index} className="text-black">
                                        <div>
                                            <Image src={`${items.picture.large}`} alt="" width={100} height={100} className="w-full" />
                                        </div>
                                        <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                        <h2>UI/UX Designer</h2>
                                        <h3 className="hidden md:block">Email: {items.email}</h3>
                                    </div>
                                )
                            })
                        }
                                                {
                            data.results.slice(10,13).map((items, index) => {
                                return(
                                    <div key={index} className="text-black">
                                        <div>
                                            <Image src={`${items.picture.large}`} alt="" width={100} height={100} className="w-full" />
                                        </div>
                                        <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                        <h2>Frontend Developer</h2>
                                        <h3 className="hidden md:block">Email: {items.email}</h3>
                                    </div>
                                )
                            })
                        }
                        {
                            data.results.slice(13,15).map((items, index) => {
                                return(
                                    <div key={index} className="text-black">
                                        <div>
                                            <Image src={`${items.picture.large}`} alt="" width={100} height={100} className="w-full" />
                                        </div>
                                        <h1 className="text-xl font-bold">{items.name.title}. {items.name.first} {items.name.last}</h1>
                                        <h2>Backend Developer</h2>
                                        <h3 className="hidden md:block">Email: {items.email}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}