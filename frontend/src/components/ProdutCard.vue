<template>
<body>
  <div class="item">
    <p>Product card </p>
    <div class="details">
      <h2>{{description}}<br><span>{{name}}</span></h2>
      <div class="price">{{price}}</div>

    </div>
  </div>
</body>
</template>

<script>

export default {
  props : ['name', 'price', 'description'],
  setup(){

  }
}

</script>

<style scoped>

</style>