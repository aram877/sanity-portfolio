// schemas/skill.js
export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'proficiency',
        title: 'Proficiency',
        type: 'number',
        description: 'A number between 0 and 100 representing the proficiency level',
        validation: Rule => Rule.min(0).max(100),
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };