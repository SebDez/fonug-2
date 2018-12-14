export default class Character {
  constructor () {
    this.gender = ''
    this.name = ''
    this.setMainValues()
  }

  setMainValues () {
    this.main = {
      age: 'my-age',
      civilization: 'my-civilization',
      charClass: 'my-charClass',
      alignment: 'my-alignment',
      punchline: 'my-punchline',
      charisma: 'my-charisma',
      beauty: 'my-beauty',
      intellect: 'my-intellect',
      perception: 'my-perception',
      fightskills: ''
    }
  }
}
