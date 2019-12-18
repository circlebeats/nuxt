export const getTags = {
  watch:{
    selectedGenre: async function (e) {
      console.log(e)
      if (e === 'Trap'){
        const filteredTags = await this.$axios.$get('http://35.188.61.24:80/tags/trap')
        console.log(tags)
      }else if(e === 'Hip Hop'){
        const filteredTags = await this.$axios.$get('http://35.188.61.24:80/tags/hiphop')
        this.tags = filteredTags
        console.log(filteredTags)
      }else if(e === 'R&B'){
        const filteredTags = await this.$axios.$get('http://35.188.61.24:80/tags/r&b')
        this.tags = filteredTags
      }
      //TODO: Add other else if statements
    }
  }
}
