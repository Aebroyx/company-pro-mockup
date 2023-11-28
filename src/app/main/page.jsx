import Image from "next/image"

export default function Main() {
    return(
        <>
            <section id='hero' className="bg-black text-white pt-24">
                <div className="flex flex justify-center items-center">
                    <h1 className="flex justify-center items-center font-bold text-8xl mb-24 mx-12">
                        WELCOME TO QUANTUM LOGIC, INC.
                    </h1>
                </div>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(/QLimage1.png)'}}>
                <div className="hero-overlay bg-opacity-25"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl text-white font-bold">Quantum Logic, Inc. Solves the world's problems with advanced algorithms and innovative solutions. We build and create intelligent software, applications, and systems ranging from machine learning and quantum computing solutions.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id='overview' className="text-black pt-24 pb-12">
                <div className="flex flex-col justify-center items-center mx-12">
                    <h2 className="text-4xl font-bold pb-4">
                        Company Overview
                    </h2>
                </div>
                <div className="mx-8 container flex flex-col mt-4 gap-4">
                    <p>
                        Quantum Logic Inc. is a leading technology company specializing in artificial
                        intelligence and software development. Since our establishment, we have been
                        at the forefront of innovation, creating intelligent solutions that transform
                        industries.
                    </p>
                    
                    <h3 className="text-2xl">Our History</h3>
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
                    
                    <h3 className="text-2xl">Our Culture</h3>
                    <p>
                    Our company culture is built on a foundation of creativity, collaboration, and
                    a passion for technology. We foster an environment where ideas flourish, and our
                    team members are empowered to make a real impact.
                    </p>
                </div>
            </section>

            <hr />

            <section id="tagline" className="text-black">
                <div className="mx-8 container">
                    <div className="py-12">
                        <div className="flex justify-center items-center">
                            <h2 className="text-xl">
                            "AI is not just technology; it's our ally in shaping a brighter future. Harnessing its potential to solve the world's problems, we aspire to create a more sustainable, inclusive, and innovative world where artificial intelligence becomes a force for positive transformation."
                            </h2>
                        </div>
                        <h3 className="pt-4 text-sm font-bold">
                            Marvin Damon <br />
                            CEO of Quantum Logic, Inc.
                        </h3>
                    </div>
                </div>
            </section>

            <hr />

            <section id="research" className="pt-12 text-black">
                    <div className="">
                        <div className="flex flex-col justify-center items-center mx-12">
                            <h2 className="text-4xl font-bold">
                                Research & Products
                            </h2>
                        </div>
                        <div className="mx-8 container flex flex-col mt-4 gap-4">
                            <h3 className="text-2xl">Text Model</h3>
                            <p>
                            Our text models are sophisticated language processing instruments with excellent 
                            accuracy and coherence levels for text generation, classification, and summarization.
                            </p>
                            
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Image src="/logicgpt.png" alt="logicgpt" width={500} height={500}></Image>
                                    <h4 className="font-bold hover:underline">
                                        Logic-GPT
                                    </h4>
                                    <p>
                                    Logic-GPT is a language model by Quantum Logic, Inc., using the GPT architecture, capable of generating coherent human-like text for various conversational applications, such as answering questions and engaging in interactive dialogues.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <Image src="/parabot.png" alt="logicgpt" width={500} height={500}></Image>
                                    <h4 className="font-bold hover:underline">
                                        ParaBot
                                    </h4>
                                    <p>
                                    Parabot is a paraphrasing chatbot, which is a tool designed to rephrase or reword a given text. It utilizes natural language processing techniques to understand and generate alternative expressions, providing users with paraphrased versions of the inputted text. This enhances versatility in language use and aids in content refinement.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-2xl">Image Model</h3>
                            <p>
                            Our research on generative modeling for images has resulted in representation models such as FarJourney, 
                            an image generation tool that generates dynamic images from text descriptions.
                            </p>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Image src="/farjourney.png" alt="logicgpt" width={500} height={500}></Image>
                                    <h4 className="font-bold hover:underline">
                                        FarJourney
                                    </h4>
                                    <p>
                                        FarJourney is a Quantum Logic generative model that uses the GPT architecture to create diverse images based on textual descriptions. It showcases the capability of synthesizing imaginative visuals through the interaction of language and visual content.
                                    </p>
                                </div>
                                <div className="flex-1">
                                </div>
                            </div>

                            <h3 className="text-2xl">Audio Model</h3>
                            <p>
                            Our research on the use of AI in audio synthesis and processing have produced 
                            advances in both original musical compositions and automatic speech recognition.
                            </p>

                            <div className="flex gap-4 mb-12">
                                <div className="flex-1">
                                    <Image src="/mumble.png" alt="logicgpt" width={500} height={500}></Image>
                                    <h4 className="font-bold hover:underline">
                                        Mumble
                                    </h4>
                                    <p>
                                        Mumble is a neural net that recognizes voices or instruments and can detect notes.
                                        The model uses the frequency data to determine which notes is currently playing and it can then generate recommendation of chords and notes to be played next.
                                    </p>
                                </div>
                                <div className="flex-1">
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}