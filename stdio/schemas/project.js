export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "date",
        type: "datetime",
      },
      {
        name: "place",
        type: "string",
      },
      {
        name: "description",
        type: "text",
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: "projectType",
        title: "Project type",
        type: "string",
        options: {
          list: [
            { value: "personal", title: "Personal" },
            { value: "client", title: "Client" },
            { value: "others", title: "others" },
          ],
        },
      },
      {
        name: "link",
        type: "url",
      },
      {
        name: "tags",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
        options: {
          layout: "tags",
        },
      },
      {
        name: 'tags2',
        title: 'Tags2',
       type:'array',
       of: [
         {
           name:'tag2',
           title:'Tag2',
           type:'string'
         }
       ]
      },
    ],
  };