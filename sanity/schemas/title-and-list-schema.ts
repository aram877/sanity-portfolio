const titleAndList = {
    name: 'titleAndList',
    type: 'document',
    title: 'Title and List',
    fields: [
      {
        name: 'titleOfList',
        type: 'string',
        title: 'Title of List',
      },
       {
        name: 'listItems',
        type: 'array',
        title: 'List Items',
        of: [{ type: 'string' }],
      },
     
    ],
  };

  export default titleAndList;