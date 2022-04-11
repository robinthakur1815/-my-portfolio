import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import post from './post'
import author from './author'
import project from "./project";
import testimonials from './testimonials'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'


export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    project,
    testimonials,
    skills,
    contact,
    workExperience,
    blockContent,
  ]),
})
