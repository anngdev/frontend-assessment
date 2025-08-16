<template>
    <section class="card-section">
        <div class="card-grid">
            <article v-for="(item, index) in items" :key="index" class="item-card">
                <div class="item-card__image-wrapper">
                    <img :src="item.image" :alt="item.name" class="item-card__image" />
                </div>
                <p class="item-card__description">{{ item.description }}</p>
                <a class="item-card__read-more-button" href="#">Read more</a>
            </article>
        </div>
    </section>
</template>

<script>

export default {
    components: {
        
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@use '../styles/card-setion'
</style>