import { getAboutMeContent, getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import AboutMeSection from "./_components/about-me-section";



export default async function Home() {

  const projects = await getProjects();
  const aboutMeContent = await getAboutMeContent();


  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-7xl font-extrabold">Hello, <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-violet-800 bg-clip-text text-transparent">Fuck you</span> :)</h1>

      <div className="py-8">
        <AboutMeSection aboutMeContent={aboutMeContent} />
      </div>

      <h2>Projects</h2>

      {projects.map((project: Project) => (
        <div key={project?._id}>
          <h3>{project?.name}</h3>
          <img src={project.image} alt={project.name} />
         <div>{project?.content?.map(
            (block) =>
              block.children.map((child) => (
                <p key={child._key}>{child.text}</p>
              ))
          
         )}</div>
          <a href={project.url}>Visit</a>
        </div>
      ))}
      

    </div>
  );
}



