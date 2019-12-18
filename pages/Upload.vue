<template>
    <div class="body">

      <div class="head">
        <h1 class="header">| Upload |</h1>
      </div>

      <div class="container">
        <div class="col1">
          <form>
<!--            Title Input-->
            <label for="title" class="field-label" >Title</label>
            <input id="title"  type="text" @change="onTitleComplete" placeholder="Title">
<!--            Custom Tag Input-->
            <label for="tag1" class="field-label">Custom Tags (2 max)</label>
            <input type="text" @change="onTag1Complete" placeholder="Tag 1" id="tag1">
            <input type="text" @change="onTag2Complete" placeholder="Tag 2" id="tag2">
<!--            BPM Input-->
            <label for="bpm" @change="onBPMComplete" class="field-label">BPM</label>
            <input type="text" placeholder="BPM (beats per minute)" id="bpm">
<!--            Genre Dropdown-->
            <label for="genreDropdown">Choose Genre</label>
            <select v-model="selectedGenre" @change="onGenreComplete" id="genreDropdown">
              <option disabled value="">Genre</option>
              <option v-for="genre in genres" :key="genre.name">
                {{ genre.name }}
              </option>
            </select>
<!--            Genre Tags Dropdown-->
            <label for="filterTag1">Choose Tags</label>
            <select v-model="filterTag1" @change="onFilterTag1Complete" id="filterTag1">
              <option disabled value="">Subgenre</option>
              <option v-for="tag in tags" :key="tag">
                {{ tag }}
              </option>
            </select>
            <label for="filterTag2">Choose Tags</label>
            <select v-model="filterTag2" @change="onFilterTag2Complete" id="filterTag2">
              <option disabled value="">Subgenre</option>
              <option v-for="tag in tags" :key="tag">
                {{ tag }}
              </option>
            </select>
          </form>
        </div>
        <div class="col2">
<!--          Mp3 File Selector-->
          <label for="mp3" class="field-label">Choose MP3 (limit)</label>
          <input type="file" @change="onMP3FileSelected" id="mp3">
<!--          Wav File Selector-->
          <label for="wav" class="field-label">Choose Wav File (Limit 10)</label>
          <input type="file" @change="onWAVFileSelected" id="wav">
<!--          Stems File Selector-->
          <label for="stems" class="field-label">Choose Stems Zip (limit 10gbgb) </label>
          <input type="file" @change="onStemsFileSelected" id="stems">
<!--          Image File Selector-->
          <label for="stems" class="field-label">Choose image (limit 10gbgb) </label>
          <input type="file" @change="onImageSelected">
<!--          Confirm Producer Name-->
          <label for="producer" class="field-label">Producer Name</label>
          <input id="producer" type="text" @change="onConfirmComplete" placeholder="Confirm Producer Name">
          <button @click="onUpload">Upload</button>
          <button @click="dbUpload">Confirm Upload</button>
        </div>
      </div>
    </div>
</template>

<script>
import {formData} from "../components/upload/mixins/formData";
import {getTags} from "../components/upload/mixins/getTags";
import {selectedUpdater} from "../components/upload/mixins/selectedUpdater";
import {completedUpdater} from "../components/upload/mixins/completedUpdater";
import {formDataUpload} from "../components/upload/mixins/formDataUpload";
import {formDbUpload} from "../components/upload/mixins/formDbUpload";

export default {
    name: "Upload",
    mixins:[formData,getTags,selectedUpdater,completedUpdater,formDataUpload,formDbUpload],
  };
</script>

<style scoped>
  .body{
    background-color: #0e0e0e;
  }
  .container {
    margin: 0 auto;
    display: flex;
    width: 100%;
    background-color: #0e0e0e;
    flex-direction: row;
    justify-content: center;
  }
  label{
    font-family: Nunito, sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    color: white;
    font-weight: 600;
  }
  input::placeholder{
    font-family: Nunito, sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    color: white;
    font-weight: 600;
  }
  input{
    height: 40px;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #7f0a0a;
    text-decoration-color: white;
    color: #fff;
    width: 370px;
    margin-bottom: 10px;
  }
  select{
    height: 40px;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #7f0a0a;
    text-decoration-color: white;
    color: #fff;
    width: 370px;
    margin-bottom: 10px;
  }
  .col1{
    display: inline-flex;
    flex-direction: column;
    order: 1;
    width: 400px;
    height: 400px;
  }
  .col2{
    order: 1;
    width: 400px;
    height: 800px;
  }
  .header{
    font-size: 60px;
    font-family: Damion, sans-serif;
    margin-bottom: 30px;
    color: white;
  }
  .head{
    display: flex;
    justify-content: center;
    width: 100%;
  }

</style>
