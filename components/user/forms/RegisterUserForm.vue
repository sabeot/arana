<template>
  <ModalComponent>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        id="exampleFormControlInput1"
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Example textarea</label
      >
      <textarea
        id="exampleFormControlTextarea1"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
  </ModalComponent>
</template>
<script lang="ts">
import { useModalsStateStore } from "~/store/modalsStateStore";

export default defineComponent({
  name: "RegisterUserForm",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const modalsStateStore = useModalsStateStore();

    return {
      isRegisterModalOpen: computed(() => modalsStateStore.isRegisterModalOpen),
    };
  },
});
</script>
<style scoped lang="scss"></style>
