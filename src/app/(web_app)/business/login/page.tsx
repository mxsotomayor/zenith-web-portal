import NavBar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function BusinessLoginPage() {
  return (
    <div className="pt-[100px] h-screen">
      <NavBar selectedSite={1}/>
      <div className="container mx-auto py-8 flex items-center h-full">
        <div className="flex-1">
          <h1 className="text-xl lg:text-4xl font-semibold text-orange-500">
            Unibank for Business
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, purus in aliquet varius, lorem lorem mollis nunc, nec
            fermentum sapien nulla sed turpis.
          </p>
        </div>
        <div className="flex-1">
          <Card className="w-[450px]">
            <CardTitle className="px-5 pt-4 pb-2 text-2xl text-blue-950">
              Sign In <span className="text-orange-500">Unibank Business</span>
            </CardTitle>
            <CardContent>
              <p className="mb-3 text-gray-600 text-sm border-b pb-3">Please provide your credentials to have access your account.</p>
              <form className="grid gap-y-3">
                <div className="grid gap-y-2">
                  <Label htmlFor="username">Your ID</Label>
                  <Input id="username" placeholder="Insert Business ID"/>
                  <Link href="#" className="text-xs text-end text-blue-800 underline">You Forgot your Business ID?</Link>
                </div>

                <div className="grid gap-y-2">
                  <Label htmlFor="username">Password</Label>
                  <Input id="password" type="password" placeholder="Insert Password" />
                  <Link href="#" className="text-xs text-end text-blue-800 underline">You Forgot your password?</Link>
                </div>

                <div>
                  <Button className="w-full">SignIn</Button>
                </div>
                 <div className="text-center text-xs">You dont have account yet?</div>
                <div>
                  <Link href="/business/signup" className="text-white text-sm bg-primary flex justify-center items-center py-2 rounded-lg w-full">Create Unibank Account</Link>
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
