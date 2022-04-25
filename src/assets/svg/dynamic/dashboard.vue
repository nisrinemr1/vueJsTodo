<template>
  <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 24 24">
    <g>
      <path xmlns="http://www.w3.org/2000/svg"
        d="m22.25 0h-20.5c-.965 0-1.75.785-1.75 1.75v2.5c0 .965.785 1.75 1.75 1.75h20.5c.965 0 1.75-.785 1.75-1.75v-2.5c0-.965-.785-1.75-1.75-1.75z"
        :fill="color ? color : '#000000'" data-original="#000000"></path>
      <path xmlns="http://www.w3.org/2000/svg"
        d="m1.75 24h7.5c.965 0 1.75-.785 1.75-1.75v-12.5c0-.965-.785-1.75-1.75-1.75h-7.5c-.965 0-1.75.785-1.75 1.75v12.5c0 .965.785 1.75 1.75 1.75z"
        :fill="color ? color : '#000000'" data-original="#000000"></path>
      <path xmlns="http://www.w3.org/2000/svg"
        d="m22.25 8h-7.5c-.965 0-1.75.785-1.75 1.75v3.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-3.5c0-.965-.785-1.75-1.75-1.75z"
        :fill="color ? color : '#000000'" data-original="#000000"></path>
      <path xmlns="http://www.w3.org/2000/svg"
        d="m22.25 17h-7.5c-.965 0-1.75.785-1.75 1.75v3.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-3.5c0-.965-.785-1.75-1.75-1.75z"
        :fill="color ? color : '#000000'" data-original="#000000"></path>
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      color:  String
    }
  }
</script>