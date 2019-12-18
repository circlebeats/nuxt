export const completedUpdater = {
  methods: {
    onTitleComplete(input){
      this.title = input.target.value
    },
    onTag1Complete(input){
      this.userTag1 = input.target.value
    },
    onTag2Complete(input){
      this.userTag2 = input.target.value
    },
    onBPMComplete(input){
      this.bpm = input.target.value
    },
    onFilterTag1Complete(input){
      this.filterTag1 = input.target.value
    },
    onFilterTag2Complete(input){
      this.filterTag2 = input.target.value
    },
    onGenreComplete(input){
      this.genre = input.target.value
    },
    onConfirmComplete(input){
      this.producer = input.target.value
    }
  }
}
