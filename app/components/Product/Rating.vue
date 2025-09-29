<template>
    <div class="flex space-x-2 items-center">
        <span>{{ rating?.toFixed(1) }}</span>
        <span class="space-x-0.5 flex">
            <StarIcon
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 text-yellow-500"
                :class="i<= totalRatings && 'fill-yellow-500'"
            />
        </span>
    </div>
</template>

<script setup lang="ts">
    import { StarIcon } from "@heroicons/vue/24/outline";

    const props = defineProps({
        rating: {
            type: Number,
            required: true
        }
    });

    const totalRatings = computed(() => {
        return Math.round(props.rating);
    });
</script>