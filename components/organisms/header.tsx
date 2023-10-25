import Link from "next/link";
import { Search } from "@/components/atoms";
import { UserNav } from "@/components/molecules";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => (
  <div className="flex items-center justify-between border-b px-4">
    <div className="flex items-center">
      <img className="rounded-full" src="/logo.png" width={50}></img>
      <h1 className="text-xl font-bold">Unieco</h1>
    </div>
    <NavigationMenu className="mr-8">
      <NavigationMenuList>
        <NavigationMenuItem className="space-x-2">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Associations
            </NavigationMenuLink>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Évenements
            </NavigationMenuLink>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Autour de moi
            </NavigationMenuLink>
          </Link>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              À propos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex items-center space-x-2">
      <Search />
      <UserNav />
    </div>
  </div>
);

export default Header;
