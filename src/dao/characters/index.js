import CharacterApi from './characters.api'
import CharacterMock from './characters.mock'

const api = CharacterApi
api.generateCharacter = CharacterMock.generateCharacter

export default api
