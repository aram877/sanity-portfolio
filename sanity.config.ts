import { defineConfig } from "sanity";
;
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import structure from "./structure.sanity";



const config = defineConfig({
    projectId: "8j2dqrzf",
    dataset: "production",
    title: "Sanity Studio Tutorial",
    apiVersion: "2024-07-17",
    basePath: "/admin",
    plugins: [
     
        structureTool({
            structure
        }),
        
    ],
    schema: {
        types: schemas
    }
});

export default config;