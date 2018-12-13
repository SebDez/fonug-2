/** @type {string[]} A list of generic words */
export const WORD_LIST = [
  'associer', 'primate', 'chuchotement', 'débat', 'brûlant', 'éléphants', 'voiture', 'deux', 'bonheur', 'table',
  'vampire', 'graphique', 'boutique', 'entonnoir', 'joie', 'double', 'pot', 'sport', 'tête',
  'implant', 'élimination', 'haut', 'portant', 'interminable', 'la', 'description', 'empirique', 'parallèle', 'armée', 'contractuel', 'fauteuil',
  'escargot', 'escalier', 'mécanique', 'tomate', 'adulte', 'pétiller', 'rebondir', 'anatomie', 'massif', 'fabrication', 'adolescent',
  'logique', 'grange', 'flèche', 'chromosome', 'cou', 'cratère', 'public', 'fortune', 'conversation', 'voix'
]

/**
 * Generate a random sentence
 * @param  {string} wordcount The number of words in the sentence
 * @return {string}           The sentence generated
 */
export function getRandomSentence (wordcount) {
  var words = []
  for (var i = 0; i < wordcount; i++) {
    words.push(service.getRandomWord())
  }
  return words.join(' ')
}

/**
 * Generate a random word
 * @return {string}  A random word
 */
export function getRandomWord () {
  return WORD_LIST[service.getRandomInt(0, WORD_LIST.length - 1)]
}

/**
 * Generate a random number
 * @param  {integer} min The min value
 * @param  {integer} max The max value
 * @return {integer}     A random number
 */
export function getRandomInt (min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

/**
 * Generate a random id, which is a number between 0 and 65536
 * @return {integer}  A random id
 */
export function getRandomId () {
  return getRandomInt(0, 65536)
}

/**
 * Generate a random date
 * @param  {Date} min The min value
 * @param  {Date} max The max value
 * @return {Date}     A random Date
 */
export function getRandomDate (min, max) {
  return new Date(Math.floor(Math.random() * (max.getTime() - min.getTime())) + min.getTime())
}

/**
 * Generate a random boolean
 * @return {Boolean}  A random boolean
 */
export function getRandomBoolean () {
  return Math.random() > 0.5
}

/**
 * Generate a random mail adresse
 * @return {string}  A random mail
 */
export function getRandomMail () {
  return `${getRandomWord()}@fake-mail.fr`
}

/**
 * Get a random value in an array
 * @param  {Array} arr The array concerned
 * @return {Object}     A random object in array
 */
export function getRandomValueInArray (arr) {
  if (arr.length > 0) {
    var i = Math.floor(Math.random() * arr.length)
    return arr[(i < arr.length) ? i : arr.length - 1]
  }
  return null
}

/**
 * Generate an array with random elements in it
 * @param  {integer} maxLength     The number max of items
 * @param  {Function} itemGenerator A function that return an object that will be generated
 * @return {Array}               An array with random elements in it
 */
export function getRandomArray (maxLength, itemGenerator) {
  var result = []
  var length = getRandomInt(0, maxLength)
  for (var i = 0; i < length; i++) {
    result.push(itemGenerator(i))
  }
  return result
}

export function getRandomPhoneNumber () {
  return `0${getRandomInt(1, 9)}${Math.random().toString().slice(2, 10)}`
}

export function getRandomDayMonth () {
  return ('0' + Math.ceil(1 + Math.random() * 30)).slice(-2) + '/' + ('0' + Math.ceil(1 + Math.random() * 11)).slice(-2)
}

export function setFieldsToUndefinedRandomly (object) {
  for (const key of Object.keys(object)) {
    if (getRandomValueInArray([1, 2, 3]) > 2) {
      object[key] = void (0)
    }
  }
  return object
}

const service = {
  getRandomSentence,
  getRandomWord,
  getRandomInt,
  getRandomId,
  getRandomDate,
  getRandomBoolean,
  getRandomMail,
  getRandomValueInArray,
  getRandomArray,
  getRandomPhoneNumber,
  getRandomDayMonth,
  WORD_LIST,
  setFieldsToUndefinedRandomly
}
export default service
