export const selectedUpdater = {
  methods:{
    onMP3FileSelected(event) {
      this.MP3SelectedFile = event.target.files[0]
    },
    onWAVFileSelected(event) {
      this.WAVSelectedFile = event.target.files[0]
    },
    onStemsFileSelected(event) {
      this.StemsSelectedFile = event.target.files[0]
    },
    onImageSelected(event) {
      this.ImageSelectedFile = event.target.files[0]
    },
  }
}
