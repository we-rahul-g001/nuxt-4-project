<template>
    <div class="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4 flex flex-col items-center">
        <NuxtImg 
            :src="product?.images?.[0]"
            :alt="product.title"
            class="w-64 h-64 object-cover rounded-lg shadown-md"
        />
        <div class="flex flex-col">
            <p class="text-xs text-gray-600">{{ product.brand }}</p>
            <h2 class="text-gray-900 font-semibold line-climp-1">{{ product.title }}</h2>
            <p class="line-clamp-2 text-gray-600">{{ product.description }}</p>
            <p class="mt-2 text-gray-800 font-medium">{{ '$ ' + product.price }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Product } from '~/types/product';

    defineProps({
        product: {
            type: Object as () => Product,
            required: true
        }
    })
</script>