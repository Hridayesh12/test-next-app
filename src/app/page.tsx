import Link from "next/link";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          WebDesk Login
        </h2>

        <form className="space-y-6 ">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="">
            <div className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link
                href="/auth_routes"
                className="w-full h-full flex items-center justify-center"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>

        <div className="text-center">
          <span className="text-sm text-gray-600">Or sign in with</span>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="btn btn-outline btn-primary">Google</button>
            <button className="btn btn-outline btn-secondary">Facebook</button>
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don&apos;t have an account?
          </span>
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
