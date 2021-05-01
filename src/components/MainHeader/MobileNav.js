import { Drawer, DrawerOverlay } from "@chakra-ui/react";
import { MobileDrawerNavigation } from "./MobileDrawerNavigation";

export const MobileNav = ({ isOpen, onClose, isLoggedIn, user, logout }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <MobileDrawerNavigation
          isLoggedIn={isLoggedIn}
          user={user}
          logout={logout}
        />
      </DrawerOverlay>
    </Drawer>
  );
};
