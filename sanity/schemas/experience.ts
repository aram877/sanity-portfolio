
export const  experienceItem =  {
    name: 'experienceItem',
    title: 'Experience Item',
    type: 'object',
    fields: [
        {
            name: "experienceTitles",
            title: "Experience Item",
            type: "array",
            of: [{ type: "preAndSubTitle" }],
          },
          {
              name:"responsibilities",
              title:"Responsibilities",
              type:"array",
              of:[{type:"titleAndList"}]
          }
    ],
}

const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "experienceItems",
      title: "Experience Items",
      type: "array",
      of: [{ type: "experienceItem" }],
    },
  ],
};

export default experience;
