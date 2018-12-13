<template>
  <VLayout column text-xs-center>
    <VCard>
      <VFlex>
        <VCardTitle primary-title>
          <div>
            <h3 class="headline mb-0">
              {{ $t('home.title') }}
            </h3>
          </div>
        </VCardTitle>
      </VFlex>

      <VFlex>
        <p class="text-md-center">
          {{ $t('home.selectGenderLabel') }}
        </p>
      </VFlex>

      <VCardActions class="justify-center">
        <VFlex xs8>
          <VSelect
            :items="genders"
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
          {{ $t('home.generateButton') }}
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
      genderSelected: 0
    }
  },
  computed: {
    genders () {
      return GENDERS.map(value => ({ text: this.$t(`genders.${value}`), value }))
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
