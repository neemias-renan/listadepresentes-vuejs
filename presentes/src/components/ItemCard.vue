<template>
    <div class="item-card" v-for="obj in items" v-bind:key="obj.id">
        <div class="item-container">
            <h2 class="item-title">{{ obj.name }}</h2>
            <p class="item-description">{{ obj.description }}</p>
        </div>

        <div class="item-sidebar">
            <div class="edit-button">
                <div class="link-edit-button">
                    <p>Editar</p>
                    <svg width="65" height="5" viewBox="0 0 65 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#F7004F" fill-opacity="0.1" />
                        <circle cx="17.5" cy="2.5" r="2.5" fill="#F7004F" fill-opacity="0.3" />
                        <circle cx="32.5" cy="2.5" r="2.5" fill="#F7004F" fill-opacity="0.5" />
                        <circle cx="47.5" cy="2.5" r="2.5" fill="#F7004F" fill-opacity="0.8" />
                        <circle cx="62.5" cy="2.5" r="2.5" fill="#F7004F" />
                    </svg>
                </div>
            </div>

            <button class="button-remover">
                <div class="button-remover-container">
                    <p class="button-remover-container-title">Remover</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                        <path
                            d="M5.5 19V17M5.5 17V1M5.5 17H19.5C20.0304 17 20.5391 16.7893 20.9142 16.4142C21.2893 16.0391 21.5 15.5304 21.5 15V5C21.5 4.46957 21.2893 3.96086 20.9142 3.58579C20.5391 3.21071 20.0304 3 19.5 3H5.5M5.5 14H3.5C2.96957 14 2.46086 13.7893 2.08579 13.4142C1.71071 13.0391 1.5 12.5304 1.5 12V8C1.5 7.46957 1.71071 6.96086 2.08579 6.58579C2.46086 6.21071 2.96957 6 3.5 6H5.5M10.5 12H16.5M10.5 8H16.5"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import api from "@/services/api";
import { onMounted, ref } from "vue";

export default {
    name: 'ItemCard',
    components: {},
    setup() {
        const items = ref([]);

        const fetchItems = () => api
            .get("itens/")
            .then((response) => (items.value = response.data));

        onMounted(fetchItems);

        return { items };

    }
}

</script>

<style scoped>
@import url('@/assets/variables/variables.css');

.item-card {
    box-shadow: 0px 5px 33.7px 0px rgba(0, 0, 0, 0.10);
    background-color: white;
    display: flex;
    height: 200px;
}

.item-sidebar {
    display: flex;
    flex-direction: row;
}

.button-remover {
    background: #F6004F;
    border: none;
    color: #fff;
    padding: 1.2em 0em;
    cursor: pointer;
}

.button-remover-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    gap: 3em;
    align-items: center;

}

.button-remover-container-title {
    transform: rotate(-90deg);
    display: flex;
    align-items: center;
}

.item-container {
    padding: 4em 3em;
    width: 100%;
}

.edit-button {
    display: flex;
    align-items: flex-end;
    height: 100%;
}

.link-edit-button {
    color: var(--rosa);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 22px;
    cursor: pointer;
}
</style>



