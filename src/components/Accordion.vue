<template>
    <div class="accordition">
        <div class="accordition__item" v-for="(item, index) in datas" :key="index">
            <button @click="switchTab(index)" class="accordition__item__title" :class="{
                'accordition__item__title--active': activeIndex === index,
                'accordition__item__title--inactive': activeIndex !== index,
            }">
                <span>{{ item.title }}</span>
                <span class="accordition__item__title__icon">
                    <ArrowIcon/>
                </span>
            </button>
            <transition name="slide">
                <div v-if="activeIndex === index" class="accordition__item__content">
                    <div v-html="item.content"></div>
                </div>
            </transition>
        </div>
    </div>
</template>


<script>
import ArrowIcon from '../assets/arrow.svg' 
export default {
    data() {
        // return {
        //     activeIndex: 0,
        // };
    },
    components: {
        ArrowIcon
    },
    props: {
        datas: {
            type: Array,
            required: true
        },
        activeIndex:{
            type: Number,
            required: true
        }
    },
    emits: ['tab-switched'],
    methods: {
        switchTab(idx) {
            this.$nextTick(() => {
                if (this.activeIndex !== idx) {
                    // this.activeIndex = idx;

                    this.$emit('tab-switched', idx);
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/accordion';
@use '../styles/accordion-slide-animation';
</style>