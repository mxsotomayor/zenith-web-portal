import React from "react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";

function ContactLocations() {
  return (
    <div data-name="ContactLocations" className="min-h-[650px] relative">
      <div className="absolute w-full h-full top-0 right-0 z-0">
        <Image
          src="/unibank-map.png"
          width="1500"
          height="1500"
          alt=""
          className=" object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 2xl:px-0 py-20 z-10 relative">
        <div className="max-w-xl">
          <Card className="bg-white p-4">
            <Tabs defaultValue="support">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="support">Customer Support</TabsTrigger>
                <TabsTrigger value="headquarters">Headquarters</TabsTrigger>
                <TabsTrigger value="locations">Our Offices</TabsTrigger>
              </TabsList>
              {/* LOCATIONS */}
              <TabsContent value="support">
                <h3 className="text-2xl font-bold mb-3 mt-3 text-blue-800">
                  We can help you?
                </h3>

                <div className="grid gap-3">
                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Personal Customer</span> <PhoneCall />
                      </h4>
                      <p className="mb-2">
                        Email:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          contact@unibank.com.pa
                        </span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          +(507)297-6000
                        </span>
                      </p>
                    </Card>
                  </button>

                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Corporate Customer</span> <PhoneCall />
                      </h4>
                      <p className="mb-2">
                        Email:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          contact@unibank.com.pa
                        </span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          +(507)297-6000
                        </span>
                      </p>
                    </Card>
                  </button>

                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Government Customer</span> <PhoneCall />
                      </h4>
                      <p className="mb-2">
                        Email:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          contact@unibank.com.pa
                        </span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          +(507)297-6000
                        </span>
                      </p>
                    </Card>
                  </button>
                </div>
              </TabsContent>
              {/* HEADQUARTERS */}
              <TabsContent value="headquarters">
                <h3 className="text-2xl font-bold mb-3 mt-3 text-blue-800">
                  Our base location
                </h3>

                <div className="grid gap-3">
                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Unibank Headquarters</span> <MapPin />
                      </h4>
                      <p>
                        Balboa Avenue, Grand Bay Tower, Ground Floor Panama
                        City, Republic of Panama
                      </p>
                    </Card>
                  </button>
                </div>
              </TabsContent>
              {/* LOCATIONS */}
              <TabsContent value="locations">
                <h3 className="text-2xl font-bold mb-3 mt-3 text-blue-800">
                  All our locations
                </h3>

                <div className="grid gap-3">
                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Balboa Avenue</span> <MapPin />
                      </h4>
                      <p className="mb-2">
                        Balboa Avenue, Grand Bay Tower, Ground Floor Panama
                        City, Republic of Panama
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          +(507) 297-6000
                        </span>
                      </p>
                    </Card>
                  </button>

                  <button className="text-start">
                    <Card className="p-4">
                      <h4 className="flex justify-between font-bold text-xl border-b pb-2 mb-2">
                        <span>Costa del Este Branch</span> <MapPin />
                      </h4>
                      <p className="mb-2">Centenario Ave. Peninsula Center Tower Local #5</p>
                      <p>
                        Phone:{" "}
                        <span className="underline underline-offset-2 font-semibold text-orange-500">
                          +(507) 297-6000
                        </span>
                      </p>
                    </Card>
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactLocations;
