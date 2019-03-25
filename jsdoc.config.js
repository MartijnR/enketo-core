'use strict';

module.exports = {
    opts: {
        encoding: 'utf8',
        destination: './docs/',
        tutorials: './tutorials',
        recurse: true,
        package: 'package.json',
        readme: 'README.md',
        template: 'node_modules/docdash'
    },
    plugins: ['plugins/markdown'],
    source: {
        include: [
            'src/',
            './README.md'
        ]
    },
    templates: {
        cleverLinks: true,
        monospaceLinks: true,
        default: {
            outputSourceFiles: true,
            includeDate: false,
            useLongnameInNav: true
        }
    },
    markdown: {
        idInHeadings: true
    },
    docdash: {
        static: true,
        sort: true,
        meta: {
            title: 'Enketo Core',
            description: 'Extensible Enketo form engine'
        },
        search: true,
        collapse: true,
        wrap: true,
        typedefs: true,
        removeQuotes: 'none',
        scripts: [],
        menu: {
            'Github repo': {
                href: 'https://github.com/enketo/enketo-core',
                target: '_blank',
                class: 'menu-item',
                id: 'repository'
            },
            'Change log': {
                href: 'https://github.com/enketo/enketo-core/blob/master/CHANGELOG.md',
                target: '_blank',
                class: 'menu-item',
                id: 'change-log'
            }
        },
        sectionOrder: [
            'Tutorials',
            'Classes',
            'Modules',
            'Externals',
            'Events',
            'Namespaces',
            'Mixins',
            'Interfaces'
        ]
    }
};
