import Image from "next/image"

export default function Products() {
    return(
        <>
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

                            <section id="testimonial" className="text-black">
                                <hr />
                                <div className="mx-8 container">
                                    <div className="py-12">
                                        <div className="flex justify-center items-center">
                                            <h2 className="text-xl">
                                                "Logic-GPT from Quantum Logic Inc. has transformed our customer support. Its natural language understanding and adaptability have elevated our interactions, providing prompt and accurate assistance. Implementing Logic-GPT has streamlined our processes and significantly increased customer satisfaction. Kudos to Quantum Logic for this game-changing tool!"
                                            </h2>
                                        </div>
                                        <h3 className="pt-4 text-sm font-bold">
                                            Devoted Logic-GPT User
                                        </h3>
                                    </div>
                                </div>
                                <hr />
                            </section>

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

                            <section id="testimonial" className="text-black">
                                <hr />
                                <div className="mx-8 container">
                                    <div className="py-12">
                                        <div className="flex justify-center items-center">
                                            <h2 className="text-xl">
                                            "FarJourney from Quantum Logic Inc. has revolutionized our creative processes. As a design agency, the ability to generate unique and imaginative visuals with a simple prompt has been a game-changer. The diversity of outputs from DALL-E allows us to explore endless possibilities, fueling our creativity and setting us apart in the competitive market. Thanks to Quantum Logic, FarJourney has become an indispensable tool in our toolkit, bringing our creative visions to life effortlessly."
                                            </h2>
                                        </div>
                                        <h3 className="pt-4 text-sm font-bold">
                                            Devoted FarJourney User
                                        </h3>
                                    </div>
                                </div>
                                <hr />
                            </section>

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

                            <section id="testimonial" className="text-black">
                                <hr />
                                <div className="mx-8 container">
                                    <div className="py-12">
                                        <div className="flex justify-center items-center">
                                            <h2 className="text-xl">
                                                "Our experience with the AI music composer has been nothing short of incredible. It has added a whole new dimension to our creative projects, effortlessly generating unique and captivating musical compositions. The AI's ability to understand our preferences and create music that resonates with our brand is simply impressive. It's like having a musical genius on demand. Thanks to this AI, our projects now have a soulful soundtrack that enhances the overall experience. Kudos to the developers for bringing this innovative musical ally into our creative journey!"
                                            </h2>
                                        </div>
                                        <h3 className="pt-4 text-sm font-bold">
                                            Devoted Mumble User
                                        </h3>
                                    </div>
                                </div>
                                <hr />
                            </section>
                            
                        </div>
                    </div>
            </section>
        </>
    )
}