import React from "react";
import moment from "moment";
import { IconLogo } from "../../components/icons";

const SignIn = () => {
  const curTime = moment().format("DD-MM-YYYY");
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div className="grid grid-cols-1">
        <div>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
              <IconLogo />
              <h1 className="text-xl font-semibold mt-6">Sign In</h1>
              <p className="text-sm">Sign in to access your account</p>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Username</label>

                <input
                  placeholder="Type here"
                  type="text"
                  className="input max-w-full"
                />
                <label className="form-label">
                  <span className="form-label-alt hidden text-red-400">
                    Please enter a valid username.
                  </span>
                  <span className="form-label-alt text-red-400">
                    Incorrect credentials.
                  </span>
                </label>
              </div>
              <div className="form-field">
                <label className="form-label">Password</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="password"
                    className="input max-w-full"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="form-control justify-between md:gap-10">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checked:bg-black checked:border-black"
                    />
                    <a href="#">Remember me</a>
                  </div>
                  <label className="form-label">
                    <a className="link link-underline-hover text-slate-600 text-sm">
                      Forgot your password?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-field pt-5">
                <div className="form-control justify-between">
                  <button
                    type="button"
                    className="btn bg-black text-white w-full hover:bg-slate-800 hover:text-white"
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <div className="form-field">
                <div className="form-control justify-center">
                  <a className="link link-underline-hover text-slate-600 text-sm">
                    Don't have an account yet? &nbsp;Sign up.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
