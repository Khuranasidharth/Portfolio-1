import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Skill } from "./libs/Skill";

const skills = [
    {
        name: "User Research",
        href: "https://reactjs.org",
    },
    {
        name: "Experience Design",
        href: "https://nextjs.org/",
    },
    {
        name: "Usability Testing",
        href: "https://angularjs.org/",
    },
    {
        name: "Interaction Design",
        href: "https://typescriptlang.org",
    },
    {
        name: "Business analysis",
        href: "https://nodejs.org",
    },
    {
        name: "Visual Design",
        href: "https://www.mongodb.com/",
    },
    {
        name: "Brainstorming",
        href: "https://typescriptlang.org",
    },
    {
        name: "Journey mapping",
        href: "https://getbootstrap.com/",
    },
    {
        name: "Typography",
        href: "https://tailwindcss.com/",
    },
    {
        name: "Motion Graphics",
        href: "https://www.python.org/",
    },
    {
        name: "Brand Identity Design",
        href: "https://www.python.org/",
    },
    {
        name: "Prototyping",
        href: "https://www.python.org/",
    },
    {
        name: "Poster Design",
        href: "https://www.python.org/",
    },
    {
        name: "Video Editing",
        href: "https://www.python.org/",
    },
    {
        name: "Testing",
        href: "https://www.python.org/",
    },
    {
        name: "Documentation",
        href: "https://www.python.org/",
    },
    {
        name: "Information Architecture",
        href: "https://typescriptlang.org",
    },
];

export const Skills: FC = () => {
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
            title={t("skills.title")}
            description={t("skills.description")}
        >
            <Container>
                <div
                    className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
                    ref={ref}
                >
                    {skills.map((skill, i) => (
                        <Skill {...skill} key={i} custom={i} controls={controls} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
