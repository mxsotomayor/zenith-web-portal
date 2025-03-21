import { Navbar } from "@/__generated__/graphql";
import NavBar from "@/components/Navbar";
import React from "react";
import mapper from "./mapper";

function NavBarFragment(props: Navbar & { selected?: number }) {
    const data = mapper(props);
  return <NavBar selectedSite={props.selected ?? 0} menu={data} />;
}

export default NavBarFragment;
