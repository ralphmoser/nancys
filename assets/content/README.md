# Static content

**- This folder contains all static content files written in markdown syntax -**

## Setup

- Add `@nuxtjs/markdownit` dependency using yarn or npm to your project
- Add `@nuxtjs/markdownit` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/markdownit'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      ['markdown-it-container', containerName],
      'markdown-it-attrs'
    ]
  }
}
```

## Usage

### Using `.vue` files

**TIP** You can also write Vue logic inside `<template lang="md">`!

`hello.vue`:

```html
<template lang="md">
  # Hello World!

  Current route is: {{ $route.path }}
</template>
```

### Using `.md` files

`hello.md`

```md
# Hello World!!
```

`hello.vue`

```html
<template>
  <div v-html="model"></div>
</template>

<script>
  import hello from '~/static/markdownFiles/hello.md'

  export default {
    data () {
      return {
        // hello is already rendered by webpack loader
        model: hello
      }
    }
  }
</script>
```

`hello.vue`:

```html
<template>
  <div v-html="$md.render(model)"></div>
</template>

<script>
export default {
  data() {
    return {
      model: '# Hello World!'
    }
  }
}
</script>
```

### Using `$md` to render markdown

`nuxt.config.js`:

```js
{
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  }
}
```
