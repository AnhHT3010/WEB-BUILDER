import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface INavigationProps {
  user?: null | User;
}

export default function Navigation(props: INavigationProps) {
  const { user } = props;
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src="/assets/favicon_io/android-chrome-192x192.png"
          alt="logo"
          width={42}
          height={42}
        />
        <span className="text-xl font-bold">Builder.</span>
      </aside>
      <nav className="hidden md:block absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary p-2 px-4 rounded-md hover:bg-primary/80 text-white"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
}
