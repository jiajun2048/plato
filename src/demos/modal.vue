<template>
  <div class="d-modal">
    <c-modal :show="show"
      @cancel="cancel"
      @submit="submit">i'm modal, i'm modal, i'm modal, i'm modal, i'm modal, i'm modal, i'm modal.</c-modal>
    <c-modal :show="show2"
      @cancel="cancel2"
      @submit="submit2">
        <div class="title">i'm title</div>
        <div class="content">i'm body, i'm body, i'm body, i'm body, i'm body, i'm body, i'm body.</div>
      </c-modal>
    <c-pane><c-button @click.native="click">show modal</c-button></c-pane>
    <c-pane><c-button @click.native="click2">show modal with title</c-button></c-pane>
  </div>
</template>

<script>
import CPane from 'components/c-pane'
import CButton from 'components/c-button'
import CModal from 'components/c-modal'

export default {
  data () {
    return {
      show: true,
      show2: false
    }
  },

  methods: {
    click () {
      this.show = true
    },
    click2 () {
      this.show2 = true
    },
    cancel () {
      this.show = false
      console.log('you clicked cancel')
    },
    submit () {
      this.show = false
      console.log('you clicked submit')
    },
    cancel2 () {
      this.show2 = false
      console.log('you clicked cancel')
    },
    submit2 () {
      this.show2 = false
      console.log('you clicked submit')
    }
  },

  components: {
    CPane,
    CButton,
    CModal
  }
}
</script>

<style src="styles/demo"></style>
