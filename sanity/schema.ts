import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import homepage from './schemas/singletons/homepage'
import siteSettings from './schemas/singletons/siteSettings'
import technology from './schemas/documents/technology'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ 
    blockContent,
    siteSettings,
    technology,
    
    // pages
    homepage
  ],
}
