<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        mp3-to-itunes
      </h1>
      <h2 class="description">
        A simple tool where you can convert your downloaded albums to <b>Itunes format</b>.
      </h2>
      <div class="upload">
        <dropzone
          id="foo"
          ref="vueDropzone"
          :options="options"
          :destroyDropzone="true"
          @vdropzone-success="vsuccess"
          @vdropzone-error="verror"
        ></dropzone>
      </div>
      <div class="made-by">
        <p>
          <a href="https://github.com/slorenzo/mp3-to-itunes.com">It's an open source project</a>
        </p>
        <p>
          Made with
          <img width="12px" height="12px" src="https://twemoji.maxcdn.com/svg/2665.svg">
          by
          <a href="https://slorenzo.me/">Sebastián Lorenzo</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Dropzone from 'nuxt-dropzone'

export default {
  components: {
    AppLogo,
    Dropzone
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: `${process.env.baseUrl}/api/upload`,
        acceptedFiles: 'application/zip',
        maxFilesize: 200, //MB
        dictDefaultMessage: `<i class='fa fa-cloud-upload'></i> Drop your album here (.zip) to convert it.`,
        timeout: 0
      }
    }
  },
  methods: {
    vsuccess(file, response) {
      this.success = true
      this.$toast.success('Well done! Your file will be downloaded in a few seconds', {
        duration: 8000
      })
      this.$refs.vueDropzone.removeAllFiles()
      this.sendConvertRequest(response.id)
    },
    verror(file, response) {
      this.error = true
      this.$toast.error('Something is wrong')
    },
    async sendConvertRequest(id) {
      const url = `${process.env.baseUrl}/api/converter/${id}`
      try {
        await this.$axios.$put(url)
        window.location.assign(url)
      } catch(err) {
        this.$toast.error('Something is wrong')
      }
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 10px;
}

.description {
  font-size: 1em;
  font-weight: 300;
  color: #526488;
  letter-spacing: 1px;
  margin: 10px;
}

.upload {
  padding-top: 5px;
}

.dropzone {
  min-height: 280px;
}

.dropzone .dz-message {
  margin: 6em 0;
}

.vue-dropzone {
  margin: 10px;
}

.dz-success-mark {
  display: none !important;
}

.dz-error-message {
  display: none !important;
}

.made-by {
  font-size: 12px;
  font-weight: 300;
  color: #526488;
  margin: 10px;
}

a {
  color: inherit;
}

p {
  padding: 3px;
}

</style>
