<template>
    <div class="w-full flex" :class="[isOwner ? 'justify-end' : 'justify-start']">
        <div class="px-2 py-1 rounded-lg text-sm max-w-[50%] min-w-[100px]"
            :class="[isOwner ? 'bg-custom-owner-message' : 'bg-white']">
            <div class="text-xs text-gray-500">{{ message.email }}</div>
            <div>{{ message.contents }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MessageModel } from '../models';
import { account } from '../api';
import { computed } from '@vue/reactivity';


interface Props {
    message: MessageModel;
}

const props = defineProps<Props>();
const session = ref<Models.Session | undefined>();

const isOwner = computed(() => {
    return session.value?.userId === props.message.userId;
});

onMounted(async () => {
    session.value = await account.getSession("current");
});
</script>