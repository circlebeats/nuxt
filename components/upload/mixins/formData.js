export const formData = {
  asyncData(){
    return{
      /*FORM DATA*/
      tags:'',
      producer:'',
      selectedGenre: '',
      filterTag1:'',
      filterTag2:'',
      MP3SelectedFile: null,
      WAVSelectedFile: null,
      StemsSelectedFile: null,
      ImageSelectedFile: null,
      title:'',
      userTag1:'',
      userTag2:'',
      bpm:'',
      genre:'',
      /*Pre-Fill Genres*/
      genres:[
        { name: "Hip Hop"},
        { name: "Trap"},
        { name: "R&B"},
        { name: "EDM"},
        { name: "Pop"},
      ]
    }
  },
}
