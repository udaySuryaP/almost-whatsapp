<template>
    <header class="w-full bg-grey-100 h-16 flex items-center justify-between px-2">
        <Avatar></Avatar>
        <section class="flex items-center space-x-4 text-gray-500"></section>
        <ClockIcon class="w-6 h-6 cursor-pointer text-gray-400 top-2"></ClockIcon>
        <PlusIcon class="w-6 h-6 cursor-pointer text-gray-400 top-2" @click="showNewChatView"></PlusIcon>
        <EllipsisHorizontalIcon class="w-6 h-6 cursor-pointer text-gray-400 top-2"></EllipsisHorizontalIcon>
    </header>
    <section class="p-2 border-b border-b-gray-300">
        <Input type="text" placeholder="Search or start a new chat" v-model="search" />
    </section>
    <ChatList class="h-full" :chats="chats" />
</template>

<script setup lang="ts">
import { ClockIcon, PlusIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';
import { Models } from 'appwrite';
import Avatar from './Avatar.vue';
import Input from '../components/Input.vue';
import { SidebarView, useGlobalStore } from '../stores/globalStore';
import { ref, onMounted } from 'vue';
import { getGroups } from '../api/teams';
import ChatList from './ChatList.vue';

const globalStore = useGlobalStore();
const search = ref("");
const chats = ref<Models.Team[]>([]);

function showNewChatView() {
    globalStore.showSidebarView(SidebarView.NEW_CHAT);
}

onMounted(async () => {
    chats.value = await getGroups();
})
</script>

