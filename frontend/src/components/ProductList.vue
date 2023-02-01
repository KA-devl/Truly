<template>
  <div>
    <div v-for="data in dummyDate" :key="data">
      <ProductCard :name="data.name" :price="data.price" :description="data.description" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from '../components/ProdutCard.vue';
export default {
  components: { ProductCard },
  setup() {
    const dummyDate = ref([
      {
        name: 'cheese',
        price: '3,30$',
        description: 'dairy'
      },
      {
        name: 'hotdog',
        price: '34,30$',
        description: 'hot dog is good'
      },
      {
        name: 'apple',
        price: '2,30$',
        description: 'one apple a day'
      }
    ]
    )
    return { dummyDate }

  }
}

</script>