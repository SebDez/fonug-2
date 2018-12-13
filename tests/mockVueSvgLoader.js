module.exports = {
  process (src, filename, config, options) {
    let name = filename.match(/.*[/\\](.*)\.svg$/)[1]
    return `module.exports = {
        name: '${name}-icon',
        render: function (h) { return h('div') }
      }`
  }
}
