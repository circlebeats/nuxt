export const formDbUpload = {
  methods: {
    /*FORM UPLOAD*/
    async dbUpload() {
      await this.$axios.$post('http://35.188.61.24:80/beatsFull',{
        title: this.title,
        userTag1: this.userTag1,
        userTag2: this.userTag2,
        filterTag1: this.filterTag1,
        filterTag2: this.filterTag2,
        bpm: this.bpm,
        producer: this.producer,
        genre: this.genre
      }).then(res =>{
        console.log(res)
      })
    }
  },
}
