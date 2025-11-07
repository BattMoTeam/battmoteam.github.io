import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/navigation-menu"


import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";

const promotionLinks = [
  { href: "https://github.com/BattMoTeam", label: "", icon: SiGithub, active: false },
  { href: "https://www.youtube.com/@battmo5613", label: "", icon: SiYoutube, active: false },
  { href: "https://www.linkedin.com/company/battmo/", label: "", icon: SiLinkedin, active: false }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-muted-foreground max-w-xl text-center mb-10">
        We'd love to hear from you! Whether you have a question about BattMo, want to collaborate, or just want to say hello — feel free to reach out.
      </p>
        {/* Address & Socials */}
      <div className="mt-5 text-center text-sm text-muted-foreground space-y-4">
        <h2 className="text-lg font-semibold text-foreground">E-mail</h2>
        <div className="mt-4 text-center text-lg text-muted-foreground text-underscore">
        address: {" "}
        <a
          href="mailto:battmo@sintef.no"
          className="text-primary underline hover:text-primary/80"
          >
            battmo@sintef.no
        </a>
        </div>
      </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Address</h2>
          <p>SINTEF, Bratsbergvegen 5, 7031 Trondheim, Norway</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground">Follow Us</h2>
          <div className="flex justify-center gap-4 mt-2">
            <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-6">
            {promotionLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    href={link.href}
                    className="text-foreground hover:text-primary active:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                  >
                    <Icon size={30} className="text-muted-foreground" aria-hidden="true" />
                    {/* <span>{link.label}</span> */}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
            
            </div>
        </div>
      </div>
  );
}
