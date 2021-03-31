# vue-enterprise-boilerplate

This project is a Vue 3 configured boilerplate that can be used for large-scale applications.

## VS Code settings

Add these lines to your VS Code settings:

```
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "vetur.validation.style": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

These tell VS Code and Vetur not to check style formatting, as Stylelint does that. Also, we configure Prettier to be a default formatter.

## Config files

### Prettier

prettier.config.js

### Stylelint

stylelint.config.js

If you're not using SCSS you can remove _scss_ rules and remove the _stylelint-scss_ plugin

### Eslint

eslintrc.js

### PostCSS

postcss.config.js

PostCSS is set up with plugins that provide SCSS-like functionality such as variables, mixins, nested blocks, etc.

### Jest

jest.config.js \
jest.setup.js

## How to use each directory

### /api

Any methods that are dealing with API requests should be placed in the _api_ folder.

### /assets

Any assets used in the projects, such as images, fonts, etc.

### /components

This directory should contain only components that are reusable, and not specific to any feature. Other components should be placed in the feature directory. 

#### /components/base

In the _base_ directory you can put components that are used very often throughout your application, such as buttons, form fields, or icons. These components are automatically imported and registered by the _registerBaseComponents_ methods in the _main.js_ file.

#### /components/common

Here you can put any components that are reusable, but are not used as often.

#### /components/transitions

Components that provide transitions and animation functionality

### /composables

Here you can put methods utilising Composition API.

### config

Any app related or third-party config files.

### constants

Global constants for the app

### directives (optional)

Here you can put reusable directives

### helpers

Put here small and reusable methods. If you have a helper consisting of a few methods, then you probably should put it in the _services_ folder.

### intl (optional)

Here you can put any intl data. If your app does not incorporate internatiolisation, then you can remove it.

### layout

Any components that deal with providing layouts. 

### plugins

Here you should put all third-party libraries's registrations. You should not import any files from the _plugins_ directory. Instead, add plugin filename to _loadPlugins_ call in the _main.js_ file. If you're using Typescript, then modify the _loadPlugins_ method and change extension on line 14 from .js to .ts

### router

Vue-Router config and utils

### services

Files with methods that provide specific functionality that can be reused and is not tightly coupled to any component. For instance, validation, error handling, etc.

#### services/stateful

Here you can put any services that use reactive data. In Vue 3 it could be via a _ref_ or _reactive_, and in Vue 2 _observable_.

### store

Vuex store. You can use the _scripts/generateVuexModule.js_ script to automatically scaffold a Vuex module

### styles

Global styles, variables, etc.

### views

In this folder you should put your features.
