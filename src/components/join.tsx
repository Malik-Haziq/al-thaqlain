
export function Join() {
    return <>
        <div className="bg-secondary-600 text-white-500">
            <section className="flex items-center justify-center flex-col py-14">
                <div className="mb-16 flex items-center justify-center flex-col text-center gap-4">
                    <h2>Join our news letter</h2>
                    <p>
                        Sign up for our newsletter to receive the latest travel deals,
                        tips, and news straight to your inbox.
                    </p>
                </div>
                <form action="submit">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="sm:w-96 p-3 outline-none rounded-none bg-white-500 border-2 focus:border-white-100"
                    />
                    <button
                        type="submit"
                        className="py-3 px-5 outline-none rounded-none bg-white-500 border-2 border-l-0 focus:border-white-100 text-black-300 font-medium"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    </>
}