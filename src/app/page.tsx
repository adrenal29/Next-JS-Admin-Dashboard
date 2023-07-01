import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white  w-full md:w-1/2 rounded-md shadow-md flex flex-col md:flex-row">
       <div>
       <Image src="/Login.png" alt="Your Image" width={350} height={400} className="hidden md:block h-full"/>
       </div>
        <div className="md:w-1/2 pt-8 md:pl-12 pl-6 pb-8 md:pr-0 pr-4 " >
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="">Lorem ipsum dolor sit amet.</p>
          <form className="flex flex-col space-y-4 pb-0 mt-7 ">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Placeholder Content"
                className="bg-200 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Placeholder Content"
                className="bg border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <span className="text-sm ml-auto">Forgot Password?</span>
            <Link href="/Dashboard">
            <button
              type="submit"
              className="bg-blue-500 text-white width py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
            >
              Login
            </button>
            </Link>
            
            <div className="flex items-center">
              <div className="flex-1 border-b border-gray-300"></div>
              <span className="bg-white px-2">or</span>
              <div className="flex-1 border-b border-gray-300"></div>
            </div>
            <Link href='/Dashboard'>
            <button
              type="submit"
              className="text-black width py-2 px-4 rounded-md  transition-colors w-full border"
            >
              Register Now
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;