export const formDataUpload = {
  methods:{
    async onUpload() {
      let mp3Fd = new FormData ()
      let wavFd = new FormData ()
      let stemFd = new FormData ()
      let imageFd = new FormData ()

      mp3Fd.append('mp3File', this.MP3SelectedFile)
      wavFd.append('wavFile', this.WAVSelectedFile)
      stemFd.append('stemsFile', this.StemsSelectedFile)
      imageFd.append('imageFile', this.ImageSelectedFile)

        await this.$axios.$post('http://35.188.61.24:80/beats/mp3', mp3Fd)
          .then(res=>{
            console.log(res)
          })
        await this.$axios.$post('http://35.188.61.24:80/beats/wav', wavFd)
          .then(res=>{
            console.log(res)
          })
        await this.$axios.$post('http://35.188.61.24:80/beats/stems', stemFd)
          .then(res=>{
            console.log(res)
          })
        await this.$axios.$post('http://35.188.61.24:80/beats/images', imageFd)
          .then(res=>{
            console.log(res)
          })
    }
  }
}
