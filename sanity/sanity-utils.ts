import { createClient, groq } from "next-sanity";
const client = createClient({
  projectId: "8j2dqrzf",
  dataset: "production",
  apiVersion: "2024-07-17",
});

export async function getProjects() {
 

    return client.fetch(
        groq`*[_type == "project"] | order(_createdAt asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
      content
        }`
    )
}

export async function getAboutMeContent() {
  
  
    return client.fetch(
      groq`*[_type == "aboutMe" && _id == "aboutMeSingle"][0]  {  
        _id,
        _createdAt,
        headline,
        intro,
        "image": image.asset->url,
        list
      }`
    );
  }

  export async function getSkills() {
    return client.fetch(
      groq`*[_type == "skill"]{
        _id,
        name,
        proficiency,
        "icon": icon.asset->url
      }`
    );
  }