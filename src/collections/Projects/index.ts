import { authenticated } from '@/access/authenticated';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used for the project URL'
      }
    },
    {
      name: 'githubId',
      type: 'number',
      unique: true,
      index: true,
      admin: {
        readOnly: true,
      }
    },
    {
      name:'description',
      type: 'textarea',
    },
    {
      name: 'repositoryUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'stargazers',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'lastUpdated',
      type: 'date'
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
    }
  ]
}