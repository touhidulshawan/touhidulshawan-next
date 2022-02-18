import React from "react";
import Layout from "../components/Layout";
import Skill from "../components/pageComponents/Skill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiGraphql } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";

const Skills = () => {
  return (
    <Layout title="Skills">
      <div className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6">
          <Skill
            icon={<FaHtml5 />}
            skillText="html"
            color="text-red-500 dark:text-red-400"
          />
          <Skill
            icon={<FaCss3Alt />}
            skillText="css/scss"
            color="text-blue-500 dark:text-blue-400"
          />
          <Skill
            icon={<FaCss3Alt />}
            skillText="tailwindcss"
            color="text-blue-500 dark:text-blue-400"
          />
          <Skill
            icon={<FaBootstrap />}
            skillText="bootstrap"
            color="text-purple-600 dark:text-purple-400"
          />
          <Skill
            icon={<DiJavascript1 />}
            skillText="javascript"
            color="text-yellow-500 dark:text-yellow-300"
          />
          <Skill
            icon={<SiTypescript />}
            skillText="typescript"
            color="text-indigo-600 dark:text-indigo-400"
          />
          <Skill
            icon={<FaReact />}
            skillText="react"
            color="text-blue-600 dark:text-blue-400"
          />
          <Skill
            icon={<SiRedux />}
            skillText="redux"
            color="text-purple-600 dark:text-purple-400"
          />
          <Skill
            icon={<SiNextdotjs/>}
            skillText="nextjs"
            color="text-black dark:text-gray-200"
          />
          <Skill
            icon={<FaNodeJs />}
            skillText="nodejs"
            color="text-green-600 dark:text-green-400"
          />
          <Skill
            icon={<DiMongodb />}
            skillText="mongodb"
            color="text-green-600 dark:text-green-400"
          />
          <Skill
            icon={<SiGraphql />}
            skillText="graphql"
            color="text-pink-700 dark:text-pink-500"
          />
          <Skill
            icon={<SiApollographql />}
            skillText="apollo"
            color="text-blue-700 dark:text-blue-400"
          />
          <Skill icon={<DiGit />} skillText="git" color="text-red-600" />
          <Skill
            icon={<SiNeovim />}
            skillText="Neovim"
            color="text-green-800 dark:text-green-400"
          />
          <Skill
            icon={<GrArchlinux />}
            skillText="Linux"
            color="text-blue-800 dark:text-blue-600"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
