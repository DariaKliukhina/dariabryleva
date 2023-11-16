import {CogIcon} from '@sanity/icons'
import {StructureResolver} from 'sanity/desk'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Main Page')
        .id('homepage-list')
        .child(S.document().schemaType('homepage').documentId('homepage').title('Homepage')),

      S.divider(),

      S.documentListItem().schemaType('siteSettings').icon(CogIcon).title('Site Settings'),

    ])
