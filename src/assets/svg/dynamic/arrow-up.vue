<template>
  <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 163.861 163.861">
    <g
      transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,-0.0003972053527832031,163.86089754104623)">
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
          :fill="color ? color : '#000000'" data-original="#000000"></path>
      </g>
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