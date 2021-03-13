import { Drawer, DrawerOverlay } from "@chakra-ui/react";
import { MobileDrawerNavigation } from "./MobileDrawerNavigation";

export const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <MobileDrawerNavigation />
      </DrawerOverlay>
    </Drawer>
  );
};
