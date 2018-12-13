<template>
  <VLayout column text-xs-center>
    <VCard>
      <VFlex>
        <VCardTitle primary-title>
          <div>
            <h3 class="headline mb-0">
              Nouveau personnage
            </h3>
          </div>
        </VCardTitle>
      </VFlex>

      <VFlex>
        <p class="text-md-center">
          Genre du personnage
        </p>
      </VFlex>

      <VCardActions class="justify-center">
        <VFlex xs8>
          <VSelect
            :items="GENDERS"
            :value="genderSelected"
            solo
            outline
          />
        </VFlex>
      </VCardActions>

      <VFlex>
        <VBtn color="pink"
              @click="generateCharacter"
        >
          Generer mon personnage
        </VBtn>
      </VFlex>
    </VCard>
  </VLayout>
</template>

<script>
import { GENDERS } from '@/constants'

export default {
  name: 'home',
  data () {
    return {
      GENDERS,
      genderSelected: 0
    }
  },
  methods: {
    generateCharacter () {
      // call action for generating
      this.$router.push({ name: 'character' })
    }
  }
}
</script>
