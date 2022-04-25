<template>
  <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 20 20">
    <g>
      <path xmlns="http://www.w3.org/2000/svg"
        d="m10 1a8.987 8.987 0 0 0 -7.921 13.257l-1.037 3.455a1 1 0 0 0 .958 1.288 1.019 1.019 0 0 0 .288-.042l3.455-1.037a9 9 0 1 0 4.257-16.921zm0 4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm1 10h-1a1 1 0 0 1 -1-1v-4a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1v4a1 1 0 0 1 0 2z"
        :fill="color ? color : '#000000'" data-original="#000000"></path>
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      color: String
    }
  }
</script>