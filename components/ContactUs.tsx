

export const ContactUs = () => {
  return (
    <div className="bg-stone-800 text-white p-4 md:flex items-start gap-x-8 md:p-9" id="contact">
        <div className="">
            <h2 className="uppercase border-l-2 border-orange-600 text-3xl pl-3 mb-3">
                contact us
            </h2>
            <div className="mb-5 sourceSerif">
                <p>Let us make a lasting impression on you.</p>
                <p>Tell us about your project and let's begin!</p>
            </div>
            <div className="flex gap-x-8 justify-center md:flex-col gap-y-5">
                <div className="">
                    <p className="uppercase font-medium">headquarters</p>
                    <div className="font-light text-sm">
                        <p>Some street 312</p>
                        <p>Suite 101-191</p>
                        <p>Foreign Country, 79000 </p>
                    </div>
                </div>
                <div>
                    <p className="uppercase font-medium">get in touch</p>
                    <div className="font-light text-sm">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p className="ml-2">123-123-1234</p>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                                <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
                            </svg>
                            <p className="ml-2">UserID</p>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                            <p className="ml-2">email@mail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full">
            <div className="my-5 grid grid-col-1 sm:grid-cols-2 gap-x-8 md:mt-0 md:mb-5">
                <div>
                    <label className="mb-1 font-light" htmlFor="full-name">
                        Full Name
                    </label>
                    <input type="text" id="full-name"
                        className="appearance-none focus:bg-orange-100 transition-colors ease-in-out border-4 border-white w-full py-1 px-4 text-gray-900 leading-tight focus:outline-none focus:border-orange-500 focus:shadow mb-3 hover:bg-orange-100 hover:border-orange-100"
                    />
                </div>
                <div>
                    <label className="mb-1 font-light" htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email"
                        className="appearance-none hover:bg-orange-100 hover:border-orange-100 focus:bg-orange-100 transition-colors ease-in-out border-4 border-white w-full py-1 px-4 text-gray-900 leading-tight focus:outline-none focus:border-orange-500 mb-3"
                    />
                </div>
                <div className="flex flex-col justify-end">
                    <p className="mb-1 font-light">
                        What's your budget?
                    </p>
                    <div className="relative mb-3">
                        <select className="appearance-none hover:bg-orange-100 hover:border-orange-100 focus:bg-orange-100 transition-colors ease-in-out border-4 border-white w-full py-1 px-4 text-gray-900 leading-tight focus:outline-none focus:border-orange-500" id="grid-state">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mb-1 font-light">
                        Services you're inquiring about
                    </p>
                    <div className="relative mb-3">
                        <select className="appearance-none hover:bg-orange-100 hover:border-orange-100 focus:bg-orange-100 transition-colors ease-in-out border-4 border-white w-full py-1 px-4 text-gray-900 leading-tight focus:outline-none focus:border-orange-500" id="grid-state">
                            <option>Technical support</option>
                            <option>App development</option>
                            <option>UX/UI design</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-light mb-1">Tell us about your project</p>
            <textarea name="" id="" rows={5}
            className="transition-colors hover:bg-orange-100 hover:border-orange-100 focus:bg-orange-100 ease-in-out border-4 border-white w-full py-1 px-4 text-gray-900 leading-tight focus:outline-none focus:border-orange-500">
            </textarea>
            <div className="bg-stone-900 px-4 py-1 w-fit mt-2 transition-all ease-in-out hover:bg-orange-600">
                <p className="uppercase">send message</p>
            </div>
        </div>

    </div>
  )
}
