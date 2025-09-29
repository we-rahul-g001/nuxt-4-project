<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center text-white">
            Dummy Store
          </div>
          <div class="hidden sm:ml-6 sm:block w-full">
            <div class="flex space-x-4 justify-between w-full">
              <div class="flex">
                <NuxtLink to="/" :class="['bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 flex items-center justify-center text-sm font-medium']">
                  <div>Home</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
          </button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton } from '@headlessui/vue'
</script>