<template>
  <AppPage>
    <x-n-dropdown trigger="hover" @select="handleSelect">
    <template #trigger>
        <n-button>找个地方休息</n-button>
    </template>
    <x-n-dropdown-item v-for="item in options" :key="item.key" :disabled="item.disabled">
        {{ item.label }}
    </x-n-dropdown-item>
    </x-n-dropdown>
  </AppPage>
</template>

<script setup lang="ts">
 const handleSelect = ()=>{}
 const options = ref(
    [
                {
                    label: '滨海湾金沙，新加坡',
                    key: 'marina bay sands',
                    disabled: true
                },
                {
                    label: '布朗酒店，伦敦',
                    key: "brown's hotel, london"
                },
                {
                    label: '亚特兰蒂斯巴哈马，拿骚',
                    key: 'atlantis nahamas, nassau'
                },
                {
                    label: '比佛利山庄酒店，洛杉矶',
                    key: 'the beverly hills hotel, los angeles'
                }
            ]
 )
</script>
