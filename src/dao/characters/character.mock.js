import Character from '@/entity/Character.model'
import ValueContent from '@/entity/ValueContent.model'
import MockHelper from './../../../tests/mockHelper.service'

export default {
  generateCharacter () {
    return Promise.resolve(
      new Character({
        name: MockHelper.getRandomWord(),
        gender: MockHelper.getRandomValueInArray(['male', 'female']),
        main: generateRandomMainValues()
      }))
  }
}

function generateRandomMainValues () {
  return {
    age: generateRandomValueContent(),
    civilization: generateRandomValueContent(),
    charClass: generateRandomValueContent(),
    alignment: generateRandomValueContent(),
    punchline: generateRandomValueContent(),
    charisma: generateRandomValueContent(),
    beauty: generateRandomValueContent(),
    intellect: generateRandomValueContent(),
    perception: generateRandomValueContent(),
    fightskills: generateRandomValueContent()
  }
}

function generateRandomValueContent () {
  return new ValueContent({
    i18nKey: MockHelper.getRandomWord(),
    i18nFullKey: MockHelper.getRandomWord(),
    i18nValue: MockHelper.getRandomWord(),
    percentage: MockHelper.getRandomInt(0, 100)
  })
}
