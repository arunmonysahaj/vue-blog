<template>
    <div id="app">
        <redoc v-bind:spec-url="preSignedSpecUrl"></redoc>
    </div>
</template>
 
   
<script>
    import apis from './../api';
    export default {
      data() {
        return {
          preSignedSpecUrl: undefined
        };
      },
      mounted() {
          this.setupRedoc()
      },
      methods: {
          async setupRedoc() {
            let redocScript = document.createElement('script')
            redocScript.setAttribute('src', 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js')
            document.head.appendChild(redocScript)
            const res = apis.getSpecFileURL();
            this.preSignedSpecUrl =  res.url;
          }
      }
    }
</script>