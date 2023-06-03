<template>
    <main class="h-full flex"></main>
    <Sidebar>
        <ContactsSidebar v-if="sidebarView === SidebarView.CONTACTS"></ContactsSidebar>
        <NewChatSideBar v-if="sidebarView === SidebarView.NEW_CHAT"></NewChatSideBar>
        <NewGroupParticipantsSidebar v-if="sidebarView === SidebarView.NEW_GROUP_PARTICIPANTS">
        </NewGroupParticipantsSidebar>
        <NewGroupInfoSidebar v-if="sidebarView === SidebarView.NEW_GROUP_INFO"></NewGroupInfoSidebar>
    </Sidebar>
    <ChatView v-if="groupStore.currentGroup"></ChatView>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import ContactsSidebar from '../sidebar/ContactsSidebar.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import { SidebarView, useGlobalStore } from '../stores/globalStore';
import NewChatSideBar from '../sidebar/NewChatSideBar.vue';
import NewGroupParticipantsSidebar from '../sidebar/NewGroupParticipantsSidebar.vue';
import NewGroupInfoSidebar from '../sidebar/NewGroupInfoSidebar.vue';
import ChatView from '../sidebar/ChatView.vue';
import { useGroupStore } from '../stores/groupStore';

const globalStore = useGlobalStore();
const groupStore = useGroupStore();
const sidebarView = computed(() => globalStore.sidebarView);
</script>