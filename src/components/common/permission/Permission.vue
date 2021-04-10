<template>
  <slot v-if="hasAccess" />
  <slot v-else name="no-access" />
</template>

<script>
import { watch, ref } from "vue";
import { getUser } from "@/composables/useUser";
import { checkPermission } from "./checkPermission";

// re-export for easier access
export { checkPermission };

export default {
  emits: ["access-check"],
  props: {
    roles: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: "one-of",
      validator: value => ["one-of", "all-of"].includes(value),
    },
    entityOwnerId: {
      type: [String, Number],
    },
    debug: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const hasAccess = ref(null);
    const user = getUser();

    /**
     * Permissions will be checked
     * - when this component is created
     * - when user id changes
     * - when user roles array changes
     * - when any of the props change
     */
    watch(
      [() => user.value?.id, () => user.value?.roles, props],
      ([userId, roles, props]) => {
        hasAccess.value = checkPermission(props.roles, {
          type: props.type,
          entityOwnerId: props.entityOwnerId,
          debug: props.debug,
        });
        emit("access-check", hasAccess.value);
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return {
      hasAccess,
    };
  },
};
</script>
