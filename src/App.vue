<script setup lang="ts">
  import { ref } from "vue";
  import TreeCollapse from "./components/tree-collapse/TreeCollapse.vue";
  import { useColorMode } from "@vueuse/core";
  import { DataItem } from "./components/tree-collapse/TreeCollapseItem.vue";
  import AppTable from "./components/table/AppTable.vue";

  const TreeData = ref<DataItem[]>([
    {
      id: 1,
      name: "Parent 1",
      children: [
        {
          id: 2,
          name: "Child 1",
        },
        {
          id: 3,
          name: "Child 2",
        },
      ],
    },
    {
      id: 4,
      name: "Parent 2",
      children: [
        {
          id: 5,
          name: "Child 3",
        },
        {
          id: 6,
          name: "Child 4",
        },
      ],
    },
  ]);

  const tableData = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const mode = useColorMode();
</script>

<template>
  <select v-model="mode" name="theme">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <div class="p-6">
    <h1 class="mb-2">Tree Collapse</h1>
    <TreeCollapse :data="TreeData" prefix-icon="FolderArchive" />
  </div>
  <div class="p-6">
    <h1 class="mb-2">Table component</h1>
    <AppTable :data="tableData" :columns="tableColumns">
      <template #headCell="{ column }">
        <template v-if="column.key === 'age'">
          <span class="font-bold text-red-600">
            {{ column.title }}
          </span>
        </template>
      </template>
      <template #bodyCell="{ item, column }">
        <template v-if="column.key === 'age'">
          <span class="text-red-500">
            {{ item }}
          </span>
        </template>
      </template>
    </AppTable>
  </div>
</template>
