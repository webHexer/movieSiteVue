<template>
  <div class="home">
    <Carousel :carousel-data="carouselData" />
    <BrowseMovies
      :image-data="trendingMoviesData"
      :type="'Trending Movies'"
      :no-of-images="'5'"
      :show-details="true"
    />
    <SlideShow
      :image-data="featuredMoviesData"
      :type="'Featured Movies'"
      :show-details="true"
    />
    <BrowseMovies
      :image-data="latestMoviesData"
      :type="'Latest Movies'"
      :no-of-images="'5'"
      :show-details="true"
    />
  </div>
</template>

<script>
import Carousel from "../components/general/Carousel.vue";
import BrowseMovies from "../components/general/BrowseMovies.vue";
import SlideShow from "../components/general/SlideShow.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    BrowseMovies,
    SlideShow,
  },
  data() {
    return {
      carouselData: [
        {
          id: 1,
          imgSrc:
            "https://img.cineb.net/xxrz/1200x600/188/32/8f/328f66ea01587b735311cc7eddfd8d29/328f66ea01587b735311cc7eddfd8d29.jpg",
          categoryName: "Movie",
          about: "Venom",
          active: false,
        },
        {
          id: 2,
          imgSrc:
            "https://img.cineb.net/xxrz/1200x600/188/72/34/7234f7cab8436c642b5876b7affcf034/7234f7cab8436c642b5876b7affcf034.jpg",
          categoryName: "Show",
          about: "Dune",
          active: false,
        },
        {
          id: 3,
          imgSrc:
            "https://img.cineb.net/xxrz/1200x600/188/a8/03/a8039718aef27623b599fed9202b3e08/a8039718aef27623b599fed9202b3e08.jpg",
          categoryName: "Show",
          about: "Breaking Bad",
          active: true,
        },
      ],
      featuredMoviesData: [
        {
          id: 1,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/10/a0/10a062717aa9253be194ad83507924ad/10a062717aa9253be194ad83507924ad.jpg",
        },
        {
          id: 2,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/d0/ec/d0ec7ef079bd599580f21ed88b81eff3/d0ec7ef079bd599580f21ed88b81eff3.jpg",
        },
        {
          id: 3,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/11/61/1161007178d877a3c8c7ee16b747db28/1161007178d877a3c8c7ee16b747db28.jpg",
        },
        {
          id: 4,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/30/6b/306b96c9c52b891cffda94af67c617ee/306b96c9c52b891cffda94af67c617ee.jpg",
        },
        {
          id: 5,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/29/bf/29bf62dfb927512b7bf037c0d976bf2e/29bf62dfb927512b7bf037c0d976bf2e.jpg",
        },
        {
          id: 6,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/57/52/5752d2dafa2daaff6a92cbb4d92504ee/5752d2dafa2daaff6a92cbb4d92504ee.jpg",
        },
        {
          id: 7,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e2/91/e291f53a874a86f10d29f053b86bd7cd/e291f53a874a86f10d29f053b86bd7cd.jpg",
        },
        {
          id: 8,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e9/e2/e9e299a70d3771d9716c68bb3bcaf746/e9e299a70d3771d9716c68bb3bcaf746.jpg",
        },
        {
          id: 9,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/30/6b/306b96c9c52b891cffda94af67c617ee/306b96c9c52b891cffda94af67c617ee.jpg",
        },
        {
          id: 10,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/76/a7/76a793f2b0aeefc9bcaca5bec31ae08e/76a793f2b0aeefc9bcaca5bec31ae08e.jpg",
        },
        {
          id: 11,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/5e/2f/5e2f21999d0b6b5695d4d4d521eacac0/5e2f21999d0b6b5695d4d4d521eacac0.jpg",
        },
        {
          id: 12,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/cf/b5/cfb58bf7e1e770983c9004f509b7b437/cfb58bf7e1e770983c9004f509b7b437.jpg",
        },
        {
          id: 13,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/a9/cc/a9cc5e0e4e44111a04fc2ac0d9420ee2/a9cc5e0e4e44111a04fc2ac0d9420ee2.jpg",
        },
        {
          id: 14,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/04/dd/04dd69b6b07cbb2294e2db94b5722134/04dd69b6b07cbb2294e2db94b5722134.jpg",
        },
        {
          id: 15,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/c6/14/c614af72d81e64197c7777c28af1ee6d/c614af72d81e64197c7777c28af1ee6d.jpg",
        },
      ],
      trendingMoviesData: [
        {
          id: 1,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/57/68/576899c7db56f47fa48dbdab100d9edb/576899c7db56f47fa48dbdab100d9edb.jpg",
        },
        {
          id: 2,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e1/12/e11286189c2a51eb19ed486775bd56b5/e11286189c2a51eb19ed486775bd56b5.jpg",
        },
        {
          id: 3,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e0/bd/e0bd178ff1c1e350b4c8becfb9b4a9fd/e0bd178ff1c1e350b4c8becfb9b4a9fd.jpg",
        },
        {
          id: 4,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/33/eb/33eb4e1a8ce3da904f24e09fe9b0ebb4/33eb4e1a8ce3da904f24e09fe9b0ebb4.jpg",
        },
        {
          id: 5,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/d2/04/d2044ebf9b3f6c941d219a2b70d95569/d2044ebf9b3f6c941d219a2b70d95569.jpg",
        },
        {
          id: 6,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/d1/17/d117bad3d63c7ca4b6ed4098ff8da445/d117bad3d63c7ca4b6ed4098ff8da445.jpg",
        },
        {
          id: 7,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e5/03/e5037e9bae03bd983dd780edf42d6e02/e5037e9bae03bd983dd780edf42d6e02.jpg",
        },
        {
          id: 8,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/df/7f/df7f1acdf7b694fe6c12939aebb03f1e/df7f1acdf7b694fe6c12939aebb03f1e.jpg",
        },
        {
          id: 9,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/26/8d/268ddfff6a7508d0b1d0ea490572b762/268ddfff6a7508d0b1d0ea490572b762.jpg",
        },
        {
          id: 10,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/6b/5a/6b5a6bdb5ae05c25c70bfe21466c7707/6b5a6bdb5ae05c25c70bfe21466c7707.jpg",
        },
        {
          id: 11,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/b1/09/b10928c145514a8dfc314f9d2566440c/b10928c145514a8dfc314f9d2566440c.jpg",
        },
        {
          id: 12,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/44/9a/449a96662f987171643d953d4897c574/449a96662f987171643d953d4897c574.jpg",
        },
        {
          id: 13,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e5/03/e5037e9bae03bd983dd780edf42d6e02/e5037e9bae03bd983dd780edf42d6e02.jpg",
        },
        {
          id: 14,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/c5/59/c5598edbd11c5746ba78315e7f1a7c30/c5598edbd11c5746ba78315e7f1a7c30.jpg",
        },
        {
          id: 15,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/3f/54/3f545d4cd0d2fa4bd32a60861e38ba52/3f545d4cd0d2fa4bd32a60861e38ba52.jpg",
        },
      ],
      latestMoviesData: [
        {
          id: 1,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/10/a0/10a062717aa9253be194ad83507924ad/10a062717aa9253be194ad83507924ad.jpg",
        },
        {
          id: 2,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/d0/ec/d0ec7ef079bd599580f21ed88b81eff3/d0ec7ef079bd599580f21ed88b81eff3.jpg",
        },
        {
          id: 3,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/11/61/1161007178d877a3c8c7ee16b747db28/1161007178d877a3c8c7ee16b747db28.jpg",
        },
        {
          id: 4,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/30/6b/306b96c9c52b891cffda94af67c617ee/306b96c9c52b891cffda94af67c617ee.jpg",
        },
        {
          id: 5,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/29/bf/29bf62dfb927512b7bf037c0d976bf2e/29bf62dfb927512b7bf037c0d976bf2e.jpg",
        },
        {
          id: 6,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/57/52/5752d2dafa2daaff6a92cbb4d92504ee/5752d2dafa2daaff6a92cbb4d92504ee.jpg",
        },
        {
          id: 7,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e2/91/e291f53a874a86f10d29f053b86bd7cd/e291f53a874a86f10d29f053b86bd7cd.jpg",
        },
        {
          id: 8,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/e9/e2/e9e299a70d3771d9716c68bb3bcaf746/e9e299a70d3771d9716c68bb3bcaf746.jpg",
        },
        {
          id: 9,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/30/6b/306b96c9c52b891cffda94af67c617ee/306b96c9c52b891cffda94af67c617ee.jpg",
        },
        {
          id: 10,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/76/a7/76a793f2b0aeefc9bcaca5bec31ae08e/76a793f2b0aeefc9bcaca5bec31ae08e.jpg",
        },
        {
          id: 11,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/5e/2f/5e2f21999d0b6b5695d4d4d521eacac0/5e2f21999d0b6b5695d4d4d521eacac0.jpg",
        },
        {
          id: 12,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/cf/b5/cfb58bf7e1e770983c9004f509b7b437/cfb58bf7e1e770983c9004f509b7b437.jpg",
        },
        {
          id: 13,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/a9/cc/a9cc5e0e4e44111a04fc2ac0d9420ee2/a9cc5e0e4e44111a04fc2ac0d9420ee2.jpg",
        },
        {
          id: 14,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/04/dd/04dd69b6b07cbb2294e2db94b5722134/04dd69b6b07cbb2294e2db94b5722134.jpg",
        },
        {
          id: 15,
          imgLink:
            "https://img.cineb.net/xxrz/250x400/188/c6/14/c614af72d81e64197c7777c28af1ee6d/c614af72d81e64197c7777c28af1ee6d.jpg",
        },
      ],
    };
  },
};
</script>
