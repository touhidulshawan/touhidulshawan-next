import Layout from "../components/Layout";
import fs from "fs/promises";
import path from "path";
import { InferGetStaticPropsType } from "next";
import Project from "../components/pageComponents/Project";

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Projects">
      <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5">
          {projects.map((p) => {
            return (
              <Project
                key={p.id}
                title={p.projectTitle}
                description={p.projectDes}
                sourceLink={p.sourceLink}
                liveLink={p.liveLink}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "ProjectsData.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const projectData = JSON.parse(jsonData);

  return {
    props: {
      projects: projectData.projects,
    },
    revalidate: 10,
  };
}

export default Projects;
