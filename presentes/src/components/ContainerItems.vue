<template>
    <section class="containerItems">
        <div class="card">
            <ItemCard></ItemCard>
        </div>
    </section>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
export default {
    name: 'ContainerItems',
    components: {
        ItemCard,
    },
    data() {
        return {
        }
    }
}

</script>

<style scoped>
@import url('@/assets/variables/variables.css');

.containerItems {
    width: 50%;
    display: flex;
    height: 100%;
}

.containerItems::after {
    content: "";
    height: 36em;
    background: var(--gradiente-rosa);
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    border-radius: 2em 0 0 0;
    z-index: -1;
}

.card {
    padding: 0 100px;
    width: 100%;
    display: flex;
    gap: 2em;
    flex-direction: column;
    overflow-y: auto;
    max-height: 100%;
    height: 100%;
    justify-content: flex-start;
}
</style>



