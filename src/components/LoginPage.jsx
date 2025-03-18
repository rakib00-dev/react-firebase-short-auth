import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../firebase/auth';
import { useAuth } from '../contexts/authContexts/AuthProvider';

const LoginPage = () => {
  // const { userLoggedIn } = useAuth();

  const [isWantToLogin, setIsWantToLogin] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  console.log({ email, password, isSigningIn });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 border border-gray-200 shadow-xl text-gray-800 my-12">
      {isWantToLogin ? (
        <div className="mb-8 text-center">
          <h1
            className="my-3 text-4xl font-bold"
            style={{ color: 'var(--black-primary)' }}
          >
            Login
          </h1>
          <p className="text-sm text-gray-600">Login to access your account</p>
        </div>
      ) : (
        <div className="mb-8 text-center">
          <h1
            className="my-3 text-4xl font-bold"
            style={{ color: 'var(--black-primary)' }}
          >
            Sign Up
          </h1>
          <p className="text-sm text-gray-600">
            Sign Up to access your account
          </p>
        </div>
      )}
      <form
        noValidate=""
        action=""
        className="space-y-12"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="space-y-4">
          <div>
            {!isWantToLogin && (
              <>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  required
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Mr. Example Smith"
                  className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
                />
              </>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email address
            </label>
            <input
              required
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              required
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md border-gray-300  text-gray-800"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {!isWantToLogin && (
            <>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-200 "></div>
                <p className="px-3 text-sm">OR</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
              </div>
              <div className="transition-all decoration-300 flex justify-center space-x-4 bg-gray-100 hover:bg-blue-100">
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm flex gap-2 font-medium cursor-pointer w-full h-full justify-center items-center border border-gray-100"
                  onClick={(e) => {
                    onGoogleSignIn(e);
                  }}
                >
                  <FcGoogle className="text-2xl" /> Continue with Google
                </button>
              </div>
            </>
          )}
        </div>
        <div className="space-y-2">
          <div>
            {isWantToLogin ? (
              <button
                type="submit"
                className="transition-all duration-300 w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50 hover:bg-blue-500"
                onClick={() => {
                  setIsLogedIn(true);
                }}
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="transition-all duration-300 w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50 hover:bg-blue-500"
              >
                Sign Up
              </button>
            )}
          </div>
          {isWantToLogin ? (
            <p className="px-6 text-md pt-2 text-center text-gray-600">
              Don't have an account yet?{' '}
              <button
                type="button"
                className="hover:underline text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsWantToLogin((prev) => !prev);
                }}
              >
                Sign up
              </button>
              .
            </p>
          ) : (
            <p className="px-6 text-md pt-2 text-center text-gray-600">
              I already have an account!{' '}
              <button
                type="button"
                className="hover:underline text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsWantToLogin((prev) => !prev);
                }}
              >
                login
              </button>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
