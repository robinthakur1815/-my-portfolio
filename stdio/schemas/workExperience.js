export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'profile',
               type:'string'
            },
            {
                name: "date",
                type: "datetime",
              },
              {
                name: "To_date",
                type: "datetime",
              },
              {
                name: "duration",
                type: "string",
              },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            }
    ]
}