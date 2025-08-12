import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <Navbar 
        isBlurred={false}
        className="bg-hero-bg backdrop-blur-sm py-10"
        maxWidth="xl"
        height="80px"
      >
        <div className="flex w-full justify-between mx-4 sm:mx-8 lg:mx-20">

        <NavbarBrand>
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground">
            Ergo Smart
          </h1>
        </NavbarBrand>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              variant="ghost"
              className="text-foreground bg-white border border-border shadow-lg rounded-md"
              onClick={scrollToContact}
              >
              Kontakt oss
            </Button>
          </NavbarItem>
        </NavbarContent>
              </div>
      </Navbar>
    </motion.div>
  );
}