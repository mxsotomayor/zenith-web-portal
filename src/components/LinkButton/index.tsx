import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      data-name="LinkButton"
      asChild
      className="w-fit h-12 bg-orange-600 hover:bg-orange-500"
      size="lg"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default LinkButton;
