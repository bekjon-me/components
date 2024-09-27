<script setup lang="ts">
  import { icons } from "lucide-vue-next";
  import TreeCollapse from "./TreeCollapse.vue";
  import { ref,computed } from "vue";
  import { ChevronRight } from "lucide-vue-next";

  export interface DataItem {
    id: number;
    name: string;
    children?: DataItem[];
  }

  export interface TreeCollapseItemProps {
    item: DataItem;
    prefixIcon?: keyof typeof icons;
  }

  const props = defineProps<TreeCollapseItemProps>();

  const hasChildren = computed<boolean>(() => Array.isArray(props.item.children) && props.item.children.length > 0);

  const open = ref<boolean>(false);

  function toggle() {
    open.value = !open.value;
  }
</script>

<template>
    <div
        class="flex w-full items-center gap-x-0.5 py-0.5"
        :class="{ 'cursor-pointer': hasChildren }"
        @click="toggle"
    >
      <ChevronRight
        v-if="hasChildren"
        class="size-4 text-gray-500 dark:text-neutral-500 transition-transform duration-200"
        :class="{ 'transform rotate-90': open }"
      />
      <div class="rounded-md px-1.5">
        <div class="flex items-center gap-x-3">
          <component
            :is="icons[prefixIcon]"
            v-if="prefixIcon"
            class="size-4 text-gray-500 dark:text-neutral-500"
          />
          <div class="grow">
            <span class="text-sm">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div> 
    </div>
    <div
        v-if="hasChildren && open"
        class="ml-2 border-l border-subtle"
    >
        <div class="ml-3">
            <TreeCollapse :data="item.children!" />
        </div>
    </div>
</template>