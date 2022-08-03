/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    custom: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
      urls: [
        'https://fonts.font.im/css?family=Roboto:100,300,400,500,700,900&display=swap',
      ]
    },
  })
}
