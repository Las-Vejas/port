import * as React from 'react'
import { User, FileText, Github, Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function NavBarReact() {
  return (
    <div className="flex items-center gap-6">
      {/* Desktop */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                aria-label="About"
              >
                <User className="h-4 w-4" />
                <NavigationMenuLink>About</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                aria-label="Writing"
              >
                <FileText className="h-4 w-4" />
                <NavigationMenuLink>Writing</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://github.com/Las-Vejas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <NavigationMenuLink>GitHub</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center rounded-md border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-3">
              <a href="/about" className="inline-flex items-center gap-2">
                <User className="h-4 w-4" /> About
              </a>
              <a href="/blog" className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4" /> Writing
              </a>
              <a
                href="https://github.com/Las-Vejas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
