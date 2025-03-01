"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import placeholderLogo from "../../public/AzurePartnersLogo(placeholder).png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Content", href: "/content" },
  { name: "Team", href: "/team" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-800/20 bg-blue-900/95 backdrop-blur supports-[backdrop-filter]:bg-blue-500/60">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-semibold text-white">
            <Image src={placeholderLogo} height={50} alt={"Azure Partners"} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mr-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-blue-700",
                pathname === item.href ? "text-blue-700" : "text-blue-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-300"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] bg-blue-900 border-blue-800"
          >
            <nav className="flex flex-col space-y-4 mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg transition-colors hover:text-blue-500",
                    pathname === item.href ? "text-blue-700" : "text-blue-500"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
