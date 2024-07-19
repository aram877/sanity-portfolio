import { createClient, groq } from "next-sanity";

function getClient() {
    const client = createClient({
        projectId: "8j2dqrzf",
        dataset: "production",
        apiVersion: "2024-07-17",
    });
    return client
}

export async function getProjects() {
   const client = getClient()

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
    const client = getClient();
    console.log('getting about me content')
  
    return client.fetch(
      groq`*[_type == "aboutMe" && _id == "aboutMeSingle"][0]  {  
        _id,
        _createdAt,
        headline,
        intro,
        "image": profileImage.asset->url,
        list
      }`
    );
  }