import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import homepage from './schemas/singletons/homepage'
import siteSettings from './schemas/singletons/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ 
    category,
    blockContent,
    siteSettings,
    
    // pages
    homepage
  ],
}
