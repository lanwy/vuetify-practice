<template>
    <v-slider
        v-model="aa"
        :min="16"
        :max="256"
        label="Size"
        thumb-label>
    </v-slider>
</template>
<script>
export default {
    data() {
        return {
            aa: 56
        }
    }
}
</script>

