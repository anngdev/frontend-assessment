<template>
    <div class="tab-panel">
        <div class="tab-panel__header">
            <div class="tab-panel__header__active-background" :style="activeStyle"></div>
            <button v-for="(item, index) in datas" :key="index" :class="{
                'tab-panel__header__item--active': activeIndex === index,
                'tab-panel__header__item--inactive': activeIndex !== index
            }" :ref="el => { if (el) tabRefs[index] = el }" @click="switchTab(index)">
                {{ item.title }}
            </button>
        </div>

        <div class="tab-panel__content" v-html="datas[activeIndex].content"></div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            activeX: 0,
            activeWidth: 0,
            tabRefs: []
        };
    },
    components: {

    },
    props: {
        datas: {
            type: Array,
            required: true
        },
        activeIndex: {
            type: Number,
            required: true
        }
    },
    computed: {
        activeStyle() {
            return {
                transform: `translateX(${this.activeX}px)`,
                width: `${this.activeWidth}px`, // Gán kích thước động
                transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out',
                position: 'absolute'
            };
        }
    },
    emits: ['tab-switched'],
    methods: {
        switchTab(idx) {
            this.$nextTick(() => {
                if (this.activeIndex !== idx) {
                    const targetItem = this.tabRefs[idx];
                    if (targetItem) {
                        const itemRect = targetItem.getBoundingClientRect();
                        const containerRect = this.$el.getBoundingClientRect();
                        this.activeX = itemRect.left - containerRect.left;
                        this.activeWidth = itemRect.width;
                    }

                    this.$emit('tab-switched', idx);
                }
            });
        },
        setActiveBackgroundInitialPosition() {
            this.$nextTick(() => {
                const targetItem = this.tabRefs[this.activeIndex];
                if (targetItem) {
                    // Bỏ $el vì targetItem đã là một phần tử DOM
                    const itemRect = targetItem.getBoundingClientRect();
                    const containerRect = this.$el.getBoundingClientRect();
                    this.activeX = itemRect.left - containerRect.left;
                    this.activeWidth = itemRect.width;
                }
            });
        }
    },
    mounted() {
        this.setActiveBackgroundInitialPosition();
        window.addEventListener('resize', this.setActiveBackgroundInitialPosition);
        this.$emit('tab-switched', this.activeIndex);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.setActiveBackgroundInitialPosition);
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/tab-panel'
</style>