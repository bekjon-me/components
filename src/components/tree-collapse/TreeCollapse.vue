<script setup lang="ts">
  import { icons } from 'lucide-vue-next';
  import TreeCollapseItem from './TreeCollapseItem.vue';
  import { DataItem } from './TreeCollapseItem.vue';
  
  interface Props {
    data: DataItem[];
    prefixIcon?: keyof typeof icons;
  }

  const { data } = defineProps<Props>();

  
</script>

<template>
  <div v-for="item in data" :key="item.id">
    <TreeCollapseItem :prefix-icon="prefixIcon" :item="item" />
  </div>
</template>
