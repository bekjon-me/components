<script setup lang="ts">
  interface TableData {
    key: string;
    [key: string]: any;
  }

  interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
  }

  interface Props {
    columns: TableColumn[];
    data: TableData[];
  }

  defineProps<Props>();
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flex flex-col">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table
              class="min-w-full divide-y divide-gray-300 dark:divide-gray-500"
            >
              <thead class="bg-subtle">
                <tr>
                  <th
                    v-for="column in columns"
                    :key="column.key"
                    scope="col"
                    class="text-default py-3.5 pl-4 pr-3 text-left text-sm font-semibold"
                  >
                    <slot name="headCell" :column="column">
                      {{ column.title }}
                    </slot>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-default">
                <tr
                  v-for="(item, index) in data"
                  :key="item.key"
                  :class="index % 2 === 0 ? undefined : 'bg-subtle'"
                >
                  <td
                    v-for="column in columns"
                    :key="column.key"
                    class="text-subtle whitespace-nowrap px-3 py-4 text-sm"
                  >
                    <slot
                      name="bodyCell"
                      :item="item[column.dataIndex]"
                      :column="column"
                    >
                      {{ item[column.dataIndex] }}
                    </slot>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
