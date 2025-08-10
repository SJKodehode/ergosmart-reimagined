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
    >
      <Navbar 
        isBlurred={false}
        className="bg-hero-bg/80 backdrop-blur-sm"
        maxWidth="xl"
        height="80px"
      >
        <NavbarBrand>
          <h1 className="text-2xl font-bold text-foreground">
            Ergo Smart
          </h1>
        </NavbarBrand>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              variant="ghost"
              className="text-foreground hover:text-green-accent"
              onClick={scrollToContact}
            >
              Kontakt oss
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
}