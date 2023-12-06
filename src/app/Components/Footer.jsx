import Image from "next/image"

export default function Footer() {
    return(
        <>
            <footer className="bg-black text-white">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center gap-4 items-center space-x-4">
                            <Image src="/Logo.svg" alt="Quantum Logic Inc. Logo" width={100} height={100} className="w-10 h-10"/>
                            <h4 className="text-lg font-bold">Quantum Logic, Inc.</h4>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold">Quick Links</h4>
                            <ul className="list-none">
                                <li><a href="/aboutus" className="text-gray-300 hover:text-white">Company Overview</a></li>
                                <li><a href="/team" className="text-gray-300 hover:text-white">Meet Our Team</a></li>
                                <li><a href="/contactus" className="text-gray-300 hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold">Contact Us</h4>
                            <p className="text-gray-300">
                            Quantum Logic Inc.<br />
                            123 Tech Street<br />
                            Tech City, TC 12345<br />
                            Email: info@quantumlogic.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-center text-white">&copy; 2023 Quantum Logic Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}