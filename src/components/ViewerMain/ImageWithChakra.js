import { chakra, useStyleConfig } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const deviceSizes = [
  320,
  480,
  640,
  750,
  828,
  960,
  1080,
  1200,
  1440,
  1920,
  2048,
  2560,
  3840,
];
const deviceSizesMax = Math.max(...deviceSizes);

/**
 * ? `generateSizes` will create the strings necessary for `Sizes` enum
 *
 * ? Simply uncomment the `console.log` and adjust values
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateSizes = (upperLimit = deviceSizesMax) => {
  const sizes = [...deviceSizes.filter((v) => v < upperLimit), upperLimit];
  return sizes
    .map((v, i) => {
      return i < sizes.length - 1 ? ` (max-width: ${v}px) ${v}px` : ` ${v}px`;
    })
    .join();
};
// console.log(generateSizes(960)) // I use a variable, but since it's easier to understand with a real number...
// console.log(generateSizes())

const Sizes = {
  main:
    "(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, 960px",
  full:
    "(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, (max-width: 960px) 960px, (max-width: 1080px) 1080px, (max-width: 1200px) 1200px, (max-width: 1440px) 1440px, (max-width: 1920px) 1920px, (max-width: 2048px) 2048px, (max-width: 2560px) 2560px, 3840px",
};

const ImageWithChakra = chakra(
  ({
    className,
    dimensions = [0, 0],
    layout = "fill",
    loading,
    objectFit,
    objectPosition,
    priority,
    quality,
    sizes,
    src,
    unoptimized,
    ...nextjsInternals
  }) => {
    const [width, height] = dimensions;

    const layoutAndSize =
      height > 0 || width > 0
        ? {
            height,
            layout: layout === "fill" ? "intrinsic" : layout,
            width,
          }
        : {
            layout: "fill",
          };

    return (
      <NextImage
        className={className}
        loading={loading}
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={src}
        unoptimized={unoptimized}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layoutAndSize}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...nextjsInternals}
      />
    );
  }
);

export const Image = ({ variant, ...props }) => {
  const styles = useStyleConfig("Image", { variant });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ImageWithChakra sx={styles} {...props} />;
};
