// import NavBar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function BusinessLoginPage() {
  return (
    <div className="pt-[100px] h-screen relative overflow-auto lg:overflow-hidden">
      {/* <NavBar selectedSite={0} /> */}
      <div className="justify-end w-full h-screen -z-10 absolute hidden lg:flex">
        <div className="bg-blue-950 w-1/2 h-screen "></div>
      </div>
      <div className="z-10 container mx-auto px-4 xxl:px-0 py-8 flex flex-col lg:flex-row  items-center lg:h-full">
        <div className="flex-1">
          <h1 className="text-xl lg:text-4xl font-semibold text-orange-500">
            Unibank Personal
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl text-ellipsis line-clamp-2 lg:line-clamp-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, purus in aliquet varius, lorem lorem mollis nunc, nec
            fermentum sapien nulla sed turpis.
          </p>
        </div>
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center ">
          <Card className="w-full lg:w-[450px]">
            <CardTitle className="px-5 pt-4 pb-2 text-2xl text-blue-950">
              Sign In <span className="text-orange-500">Unibank</span>
            </CardTitle>
            <CardContent>
              <p className="mb-3 text-gray-600 text-sm border-b pb-3">
                Please provide your credentials to have access your account.
              </p>
              <form className="grid gap-y-3">
                <div className="grid gap-y-2">
                  <Label htmlFor="username">Customer ID</Label>
                  <Input
                    id="username"
                    placeholder="Insert Customer Email, Phone, Unibank ID"
                  />
                  <Link
                    href="#"
                    className="text-xs text-end text-blue-800 underline"
                  >
                    Forgot your Customer ID?
                  </Link>
                </div>

                {/* <div className="grid gap-y-2">
                  <Label htmlFor="username">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Insert Password"
                  />
                  <Link
                    href="#"
                    className="text-xs text-end text-blue-800 underline"
                  >
                    Forgot your password?
                  </Link>
                </div> */}

                <div>
                  <Button className="w-full">Continue</Button>
                </div>
                <div className="text-center text-xs">
                  You don&apos;t have an <span className="text-orange-500">Unibank</span>  account yet?
                </div>
                <div>
                  <Link
                    href="/signup"
                    className="text-white text-sm bg-primary flex justify-center items-center py-2 rounded-lg w-full"
                  >
                    Create Unibank Account
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BusinessLoginPage;
