<template>
  <VLayout>
    <VFlex xs12 sm6 offset-sm3>
      <VCard>
        <VCardTitle primary-title>
          <div>
            <h3 class="headline mb-0">
              FONUG est un générateur aléatoire de personnage.
            </h3>
          </div>
        </VCardTitle>

        <VCardText>
          <p class="text-md-center">
            Il convient autant pour la génération rapide de Personages Non Joueurs (PNJ) que
            pour d'autres personnages de fiction, le but n'est pas de générer une fiche personnage mais de bien donner des pistes lors de la création du personnage.
            Vous pouvez préselectionner le genre de votre personnage si vous le désirez, puis lancez la génération.
          </p>
        </VCardText>

        <VSelect
          :items="genders"
          :value="genderSelected"
          label="Select gender"
          solo
        />

        <VCardActions>
          <VBtn class="text-md-center" color="info" @click="generateCharacter">
            Generer mon personnage
          </VBtn>
        </VCardActions>
      </VCard>
    </VFlex>
  </VLayout>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      genders: [
        { text: 'Peu importe', value: 0 },
        { text: 'Male', value: 1 },
        { text: 'Femelle', value: 2 }
      ],
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
