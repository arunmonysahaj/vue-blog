import HtmlPreview from 'vue-html-viewer';
<template>
  <HtmlPreview>
    <div id="app">
        <div v-html="htmlContent"></div>
    </div>
  </HtmlPreview>
</template>
 
   
<script>
    import htmlDocApis from '../api'
    export default {
      data() {
        return {
          htmlContent: '<h2>Hai, this is the main window </h2>',
        };
      },
      mounted() {
          this.setupHtmlContent();
      },
      methods: {
          async setupHtmlContent() {
            const preSignedUrl = 'https://amony-dummy.s3.ap-south-1.amazonaws.com/redoc-static.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCmFwLXNvdXRoLTEiSDBGAiEA8W2z9HqXS8hN%2FNcpORzEhtTzttLBS5DFqDCV4BNKyIECIQDZC8sScbuVi0t0bvGZzotlWegluO1u%2F9NrprQPbvphnSqVAghUEAAaDDkyNTQ0NDE0NjI5MyIMsYthys6ybc7KGwoiKvIBmHOKksS0%2BQhfQt0vYtbg619HIuF6M7UcWOy9QQWL5nFS08Z8NQm3Bu5mKE8pA5sX7U%2FeyMQkTS26dLQB1AR6oCDZOSmFu4Pr8Xh6Rfq6MOYerlqCjo%2BTZ2sGgPjZiJrXPUy7zBOZejr5IcYclfdfqAz92rvWpJPw9KmCyhtwGxBopF%2FtCuF8jIp9pIDCL4XrVBlAHiNRFO34CaEa5rmabey5YFJyKgmVldZ1HourCyfno4LbHh7%2BGKHPV146ofk8cR3%2BoG7SHPW2F%2F02D%2BnxKh24tl%2Bg3OcxYz98uUlZoj5dUWfq4JwYSx%2BMWBsqHtRUCUswkoDKlQY63gFSD3rDtchFmf7jj077p%2BzAvqLpTBejXnRO2eGEsOAVvV9M%2BmW4gZM8rkl4sZS4rek5euCnzlzZABMF4VjWfHkF10aHG0rCQAEGcHycVnmBkneQQWb6JmDzeJGuz3lE0kaU9ABCcFcZzaKoTQb2x10CeYbiyZc2Nu34dk6tpFEZaY%2F0Lw7vZVcgc2dVmSfID9kDaFnO3fNoS6NDyNO6PJCKquXapdoIsIF6wcNhurI3AgB7aXsI91uqyL2sQdqX4gS5Q9gMTIXSkx8ewV1SrG%2BrXtCd3bFemoen9fXSNJg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220622T023754Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA5O6GFAR262JO2UWC%2F20220622%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=531a3431714fa242d13f95d0f54cdfc32b6f5c6bb474b4c4c401776389de5762';
            this.s3url = preSignedUrl;
            const apiRes = await htmlDocApis.getHtmlFile(preSignedUrl);
            // console.log('got api response as ' + JSON.stringify(apiRes));
            this.htmlContent = apiRes.data;
            window.open(preSignedUrl);
          }
      }
    }
</script>