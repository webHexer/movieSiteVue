<template>
  <div class="browse-movies">
    <div v-if="showDetails" class="browse-movies__section-header">
      <h3>BROWSE</h3>
      <h2>{{ type }}</h2>
      <h3>VIEW ALL</h3>
    </div>

    <div class="browse-movies__products">
      <div
        v-for="(data, index) in imageData"
        :key="index"
        class="browse-movies__product"
      >
        <router-link to="/">
          <img :src="data.imgLink" :alt="type" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCards",
  props: {
    imageData: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    noOfImages: {
      type: String,
      required: true,
    },
    showDetails: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imageWidth() {
      return 100 / this.noOfImages + "%";
    },
  },
};
</script>
