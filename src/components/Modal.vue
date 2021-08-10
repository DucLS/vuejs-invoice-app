<template>
  <div class="modal">
    <div class="modal-content">
      <p>Are you sure you want to exit? Your changes will not be saved?</p>
      <div class="actions flex">
        <button @click="closeModal" class="purple">Return</button>
        <button @click="closeInvoice" class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Modal",
  methods: {
    ...mapMutations(['TOGGLE_MODAL', 'TOGGLE_INVOICE']),

    closeModal() {
      this.TOGGLE_MODAL();
    },

    closeInvoice() {
      this.TOGGLE_INVOICE();
      this.TOGGLE_MODAL();
    },
  }
}
</script>

<style scoped lang="scss">
.modal {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  height: 100vh;
  width: 100%;

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>