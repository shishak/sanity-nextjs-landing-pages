export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7a7a2437faaeaaa7b33aa6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2mio7vko',
                  apiId: '236c376c-5bda-4cb2-8924-79918d349e41'
                },
                {
                  buildHookId: '5d7a7a2b26b77a5ed9e1a8a5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x4niw7gw',
                  apiId: 'f005ffb1-d71f-4222-936a-f88d66861673'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shishak/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x4niw7gw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
