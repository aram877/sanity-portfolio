const education = {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
name: 'headline',
title: 'Headline',
type: 'string'
        },

    {
        name: 'preAndSubTitle',
        title: 'Education Item',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'preAndSubTitle' }] }],
    },     
    ],
    };

    export default education;