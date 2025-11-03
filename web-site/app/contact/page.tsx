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

      <form 
      className="w-full max-w-xl bg-card p-6 rounded-lg shadow-md space-y-4"
      action="https://formsubmit.co/lorena.hendrix@sintef.no"
      method="POST"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border border-border bg-background p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-border bg-background p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-1 block w-full rounded-md border border-border bg-background p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-m text-muted-foreground text-underscore">
        Or email us directly at{" "}
        <a
          href="mailto:simon.clark@sintef.no"
          className="text-primary underline hover:text-primary/80"
          >
            simon.clark@sintef.no
        </a>
      </div>
      
        {/* Address & Socials */}
      <div className="mt-12 text-center text-sm text-muted-foreground space-y-4">
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
    </div>
  );
}
