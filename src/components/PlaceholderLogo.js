import React from "react";
import { Center, Img, Stack, Text } from "@chakra-ui/react";

const PlaceholderLogo = ({ isBounce = true, description }) => {
  return (
    <Stack>
      <Center>
        <span
          className={isBounce ? "nasoLoadingLogo nasoLoadingLogo--xLarge" : ""}
        >
          <span className={isBounce ? "nasoLoadingLogo__icon" : ""}>
            <Img src="/icons/nasoicon.svg" alt="logo" w={"8"} h={"8"} />
          </span>
        </span>
      </Center>
      <style jsx>{`
        @keyframes euiLoadingKibanaBounceMedium {
          50% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
          }
        }

        @keyframes euiLoadingKibanaBounceLarge {
          50% {
            -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
          }
        }

        @keyframes euiLoadingKibanaBounceXLarge {
          50% {
            -webkit-transform: translateY(-16px);
            transform: translateY(-16px);
          }
        }

        @keyframes euiLoadingKibanaPulsateAndFade {
          0% {
            opacity: 0;
          }
          50% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0.1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes euiLoadingKibanaPulsate {
          0% {
            opacity: 0.15;
          }
          50% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0.05;
          }
          100% {
            opacity: 0.15;
          }
        }

        @media screen and (prefers-reduced-motion: no-preference) {
          .nasoLoadingLogo:before,
          .nasoLoadingLogo:after,
          .euiLoadingKibana:before,
          .euiLoadingKibana:after {
            position: absolute;
            content: "";
            width: 90%;
            left: 5%;
            border-radius: 50%;
            opacity: 0.2;
            z-index: 1;
          }
          .nasoLoadingLogo:before,
          .euiLoadingKibana:before {
            box-shadow: 0 0 8px #000;
            -webkit-animation: 1s euiLoadingKibanaPulsateAndFade
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
            animation: 1s euiLoadingKibanaPulsateAndFade
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
          }
          .nasoLoadingLogo:after,
          .euiLoadingKibana:after {
            background-color: #000;
            -webkit-animation: 1s euiLoadingKibanaPulsate
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
            animation: 1s euiLoadingKibanaPulsate
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
          }
        }

        .nasoLoadingLogo .nasoLoadingLogo__icon,
        .nasoLoadingLogo .euiLoadingKibana__icon,
        .euiLoadingKibana .nasoLoadingLogo__icon,
        .euiLoadingKibana .euiLoadingKibana__icon {
          display: block;
        }

        @media screen and (prefers-reduced-motion: no-preference) {
          .nasoLoadingLogo .nasoLoadingLogo__icon,
          .nasoLoadingLogo .euiLoadingKibana__icon,
          .euiLoadingKibana .nasoLoadingLogo__icon,
          .euiLoadingKibana .euiLoadingKibana__icon {
            -webkit-animation: 1s euiLoadingKibanaBounceMedium
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
            animation: 1s euiLoadingKibanaBounceMedium
              cubic-bezier(0.694, 0.0482, 0.335, 1) infinite;
          }
        }

        .nasoLoadingLogo--medium,
        .euiLoadingKibana--medium {
          width: 16px;
        }

        .nasoLoadingLogo--medium:before,
        .nasoLoadingLogo--medium:after,
        .euiLoadingKibana--medium:before,
        .euiLoadingKibana--medium:after {
          height: 3px;
          bottom: -4px;
        }

        .nasoLoadingLogo--medium .nasoLoadingLogo__icon,
        .nasoLoadingLogo--medium .euiLoadingKibana__icon,
        .euiLoadingKibana--medium .nasoLoadingLogo__icon,
        .euiLoadingKibana--medium .euiLoadingKibana__icon {
          z-index: 999;
          -webkit-animation-name: euiLoadingKibanaBounceMedium;
          animation-name: euiLoadingKibanaBounceMedium;
        }

        .nasoLoadingLogo--large,
        .euiLoadingKibana--large {
          width: 24px;
        }

        .nasoLoadingLogo--large:before,
        .nasoLoadingLogo--large:after,
        .euiLoadingKibana--large:before,
        .euiLoadingKibana--large:after {
          height: 6px;
          bottom: -8px;
        }

        .nasoLoadingLogo--large .nasoLoadingLogo__icon,
        .nasoLoadingLogo--large .euiLoadingKibana__icon,
        .euiLoadingKibana--large .nasoLoadingLogo__icon,
        .euiLoadingKibana--large .euiLoadingKibana__icon {
          -webkit-animation-name: euiLoadingKibanaBounceLarge;
          animation-name: euiLoadingKibanaBounceLarge;
        }

        .nasoLoadingLogo--xLarge,
        .euiLoadingKibana--xLarge {
          width: 32px;
        }

        .nasoLoadingLogo--xLarge:before,
        .nasoLoadingLogo--xLarge:after,
        .euiLoadingKibana--xLarge:before,
        .euiLoadingKibana--xLarge:after {
          height: 8px;
          bottom: -12px;
        }

        .nasoLoadingLogo--xLarge .nasoLoadingLogo__icon,
        .nasoLoadingLogo--xLarge .euiLoadingKibana__icon,
        .euiLoadingKibana--xLarge .nasoLoadingLogo__icon,
        .euiLoadingKibana--xLarge .euiLoadingKibana__icon {
          -webkit-animation-name: euiLoadingKibanaBounceXLarge;
          animation-name: euiLoadingKibanaBounceXLarge;
        }
      `}</style>
      <Center>
        <Text color={"gray.400"}>{description}</Text>
      </Center>
    </Stack>
  );
};

export default PlaceholderLogo;
