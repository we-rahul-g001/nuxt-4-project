<template>
    <div>
        <h2 class="font-semibold text-xl border-b-2 pb-6 border-gray-200">Recent reviews</h2>
        <div
            v-for="(review, index) in reviews"
            :key="index"
            class="flex p-3 space-x-32"
        >
            <div class="flex flex-col">
                <span class="font-semibold">{{ review.reviewerName }}</span>
                <span class="text-gray-600 text-base">{{ new Date(review.date).toDateString() }}</span>
            </div>
            <div>
                <ProductRating
                    :rating="review.rating"
                />
                <p>{{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Review } from '~/types/product';

defineProps({
    reviews: {
        type: Array as () => Review[],
        required: true
    }
})
</script>