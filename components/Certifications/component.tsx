import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import {
  AngularIcon,
  BootstrapIcon,
  MongoIcon,
  NextIcon,
  TailwindIcon,
  TsIcon,
} from "./libs/Icons";
import { Certifiaction } from "./libs/Certification";

const certifications = [
  {
    name: "Graphic Design",
    org: "MAAC",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Video Editing",
    org: "Udemy",
    href: "https://nextjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Fundamentals of Graphic Desgin",
    org: "",
    href: "https://angularjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "3D Modelling",
    org: "Udemy",
    href: "https://nodejs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "UI/UX Design",
    org: "Udemy",
    href: "https://www.mongodb.com/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Interaction Design",
    org: "UC San Diego",
    href: "https://typescriptlang.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "MEAN Stack",
    org: "ISAAC IT Lab solutions",
    href: "https://getbootstrap.com/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Certified Mixologist",
    org: "Udemy",
    href: "https://tailwindcss.com/",
    icon: <FaReact color="#00D8FF" />,
  },
];

export const Certifications: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("certifications.title")}
      description={t("certifications.description")}
    >
      <Container>
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
          ref={ref}
        >
          {certifications.map((certifiaction, i) => (
            <Certifiaction {...certifiaction} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
