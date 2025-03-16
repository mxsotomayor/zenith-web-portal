import { Navbar } from "@/__generated__/graphql";
import NavBar from "@/components/Navbar";
import React from "react";
import mapper from "./mapper";

function NavBarFragment(props: Navbar) {
    const data = mapper(props);
  return <NavBar selectedSite={0} menu={data} />;
}

export default NavBarFragment;
