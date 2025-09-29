<template>
    <div>
        <nav class="flex items-center space-x-2 text-sm text-gray-600">
            <NuxtLink to="/" class="hover:underline hover:text-gray-900">Home</NuxtLink>
            <span class="text-gray-400">/</span>
            <span v-for="(item, index) in items" :key="index" class="flex items-center space-x-2">
                <NuxtLink :to="item.link" class="hover:underline hover:text-gray-900 capitalize">{{ item.name }}</NuxtLink>
                <span v-if="index < items.length - 1" class="text-gray-400">/</span>
            </span>
        </nav>
    </div>
</template>

<script setup lang="ts">
defineProps({
    items: {
        type: Array as () => { name: string; link: string; }[],
        required: true
    }
})
</script>