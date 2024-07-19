

const aboutMe = {
    name: 'aboutMe',
    title: 'About Me',
    type: 'document',
    
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'intro',
            title: 'Intro Text',
            type: 'text'
        },
      
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [{
                name: 'alt',
                title: "Alt",
                type: 'string',
        }],   
        },
     
        {
            name: 'list',
            title: 'List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'text',
                            title: 'Text',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}

export default aboutMe;