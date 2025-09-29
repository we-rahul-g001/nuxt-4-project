<template>
    <div>
        <div class="p-8 space-y-3">
            <div class="flex justify-between items-center mx-3">
                <h1 class="capitalize text-xl font-semibold text-gray-800">{{ categories[0]?.split('-').join(' ') }}</h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard
                  @click="navigateTo(`/${categories[0]}/${product.id}`)"
                  v-for="product in product2"
                  :key="product.id"
                  :product="product"
                  class="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { categories } from '~/constants/categories';

useHead({
  title: 'Dummy Store',
  meta: [
    {
      name: 'description',
      content: 'A dummy store built with Nuxt3 and Tailwind CSS for easing your essential shopping needs.'
    }
  ]
})

// using cache data fetching on server side only
const { data: product2 } = useAsyncData('categoryProducts', async () => {
    const response = await $fetch(`https://dummyjson.com/products/category/${categories[0]}?limit=4`)
        .then((res: any) => res.products)
        .catch(() => []);

    return response;
}, {
    getCachedData: () => {
        const cached = useNuxtApp().payload.data['categoryProducts'];
        if (cached) {
            return cached as any[];
        }
        return undefined;
    }
})

// // fetching on server side but not using cache
// const { data: product1 } = useAsyncData('categoryProducts', async () => {
//     const response = $fetch(`https://dummyjson.com/products/category/${categories[1]}?limit=4`)
//         .then((res: any) => res.products)
//         .catch(() => []);

//     return response;
// })

// // Client side request only
// const product1 = ref([]);
// async function callAPi() {
//   await $fetch(`https://dummyjson.com/products/category/${categories[1]}?limit=4`)
//     .then((res: any) => product1.value = res.products)
//     .catch(() => []);
// }
// callAPi();

// // Duplicate request on client and server side
// const product1 = await $fetch(`https://dummyjson.com/products/category/${categories[1]}?limit=4`)
//   .then((res: any) => res.products)
//   .catch(() => []);

// // using server = false, immediate = false, lazy = false
// const { data: product2, refresh } = useAsyncData('categoryProducts', async () => {
//     const response = await $fetch(`https://dummyjson.com/products/category/${categories[0]}?limit=4`)
//         .then((res: any) => res.products)
//         .catch(() => []);

//     return response;
// }, {
//     server: false,
//     immediate: false,
//     lazy: false
// })

// onMounted(async () => {
//   await refresh()
// })

// // using server = false, immediate = true, lazy = false
// const { data: product2, refresh } = useAsyncData('categoryProducts', async () => {
//     const response = await $fetch(`https://dummyjson.com/products/category/${categories[0]}?limit=4`)
//         .then((res: any) => res.products)
//         .catch(() => []);

//     return response;
// }, {
//     server: false,
//     immediate: true,
//     lazy: false
// })

// // using server = true, immediate = true, lazy = false
// const { data: product2, refresh } = useAsyncData('categoryProducts', async () => {
//     const response = await $fetch(`https://dummyjson.com/products/category/${categories[0]}?limit=4`)
//         .then((res: any) => res.products)
//         .catch(() => []);

//     return response;
// }, {
//     server: true,
//     immediate: true,
//     lazy: false
// })

// // using server = true, immediate = true, lazy = true
// const { data: product2, refresh } = useAsyncData('categoryProducts', async () => {
//     const response = await $fetch(`https://dummyjson.com/products/category/${categories[0]}?limit=4`)
//         .then((res: any) => res.products)
//         .catch(() => []);

//     return response;
// }, {
//     server: true,
//     immediate: true,
//     lazy: true
// })

</script>