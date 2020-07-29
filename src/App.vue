<template>
    <div id="app">
        <explorer />
    </div>
</template>

<script>
import Explorer from './Components/Explorer.vue';

export default {
    name: 'App',
    components: {
        Explorer
    }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
