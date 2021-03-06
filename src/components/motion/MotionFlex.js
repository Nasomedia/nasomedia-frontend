import { Flex, forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

export default MotionFlex;
