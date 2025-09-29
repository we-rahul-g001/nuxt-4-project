<template>
    <div class="p-8">
        <Breadcrumbs :items="breadcrumbs" />
        <div class="flex space-x-10 mt-6">
            <NuxtImg 
                :src="productData?.images?.[0]"
                :alt="productData?.title"
                class="w-xl h-2xl border rounded-lg border-gray-300"
            />
            <div class="w-[40rem]">
                <span class="flex justify-between items-center">
                    <h1 class="text-2xl font-semibold mt-4">{{ productData?.title }}</h1>
                    <p class="mt-4 text-xl text-gray-800 font-medium">{{ '$ ' + productData?.price }}</p>
                </span>
                <ProductRating :rating="productData?.rating || 0" class="mt-4" />
                <div class="mt-6">
                    <span class="text-black font-medium">Description</span>
                    <p class="text-gray-600 mt-2">{{ productData?.description }}</p>
                </div>
                <span class="flex justify-between items-center mt-6">
                    <span v-if="productData?.brand">
                        <span>Brand</span>
                        <p class="text-sm text-gray-500">{{ productData?.brand }}</p>
                    </span>
                    <span>
                        <span>Category</span>
                        <p class="text-sm text-gray-500 capitalize">{{ productData?.category.split('-').join(' ') }}</p>
                    </span>
                </span>
            </div>
        </div>
        <div>
            <ProductReview :reviews="productData?.reviews || []" class="mt-10" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const productId = useRoute().params.product as string;
    const route = useRoute();
    const breadcrumbs = ref<{ name: string; link: string; }[]>([]);
    
    const { data: productData } = useAsyncData('product', async () => {
        const response = await $fetch(`https://dummyjson.com/products/${productId}`)
            .then((res: any) => res)
            .catch(() => []);
        return response;
    }, {
        pick: ['images', 'title', 'price', 'description', 'brand', 'category', 'rating', 'reviews']
    });


    onMounted(() => {
        const { product, categories } = route.params;
        if (product && categories) {
            breadcrumbs.value = [
                { name: categories.toString().split('-').join(' '), link: `/${categories}` },
                { name: product.toString(), link: `/${categories}/${product}` }
            ]
        }
    })
</script>