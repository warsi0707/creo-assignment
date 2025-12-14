export default function Footer(){
    return (
        <div className="border-t-2 p-5 px-10 w-full flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col gap-2 w-full">
                <h1 className="text-2xl">Contact Info</h1>
                <div className="flex items-center">
                    <div className="flex items-center text-xl">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Adrees:</p>
                    </div>
                    <p className="text-sm">Mulchand Mansion, Old Hanuman Ln, Dawa Bazaar, Marine Lines, Mumbai - 400002</p>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center text-xl">
                       <i className="fa-solid fa-phone"></i>
                        <p>Phone:</p>
                    </div>
                    <p className="text-sm">+91 98923 60639 (10 AM to 6:30 PM) Mon to Sat</p>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center text-xl">
                      <i className="fa-solid fa-envelope"></i>
                        <p>Email:</p>
                    </div>
                    <p className="text-sm">hello@littlethingscute.com</p>
                </div>

            </div>
            <div className="w-full space-y-3">
                <div className="flex items-center text-2xl">
                    <h1>Follow us:</h1>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                </div>
                <p>We accept the following modes of payments</p>
                <img src="/payment.png" alt="" className="w-72 h-10" />
            </div>
        </div>
    )
}