const eventColors = {
  nightclazz: 'blue',
  talk: 'red',
  matinale: 'yellow',
  codelab: 'green'
}

export default {
  methods: {
    color (type) {
      const normalizedType = type.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

      return eventColors[normalizedType]
    }
  }
}
