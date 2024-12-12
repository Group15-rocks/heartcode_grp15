"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="HOME">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">INTRODUCTION</HoveredLink>
            <HoveredLink href="/">REASON</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="QUIZ">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="HOW TO HELP"
              href="/quiz_how_to"
              src="/assets/how.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="COMMON SUBSTANCE ABUSE"
              href="/quiz_common"
              src="/public/how.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="HEALTHY ALTERNATIVES DESTRESS"
              href="/quiz_healthy"
              src="/quiz_healthy"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ABOUT">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-me">About Me</HoveredLink>
            <HoveredLink href="/about-me">Education</HoveredLink>
            <HoveredLink href="/about-me">Skills</HoveredLink>
            <HoveredLink href="/about-me">Interests</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
    <div
        className={cn("fixed top-10 right-0 max-w-2xl mx- z-30", className)}
    >
        <Menu setActive={setActive}>
        <ModeToggle/>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </Menu>
    </div>


    </div>
  );
}
