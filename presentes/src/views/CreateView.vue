<template>
    <section class="modal-container">
        <div class="modal">
            <div class="topbar">
                <div class="texts-topbar">
                    <h3>Novo Item</h3>
                    <p class="text-description-topbar">Informe os dados do item que deseja adicionar<br> a lista de
                        presentes</p>
                </div>

                <router-link class="icon-cancel" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path
                            d="M35 17L26 26M26 26L17 35M26 26L17 17M26 26L35 35M50 25.5C50 39.031 39.031 50 25.5 50C11.969 50 1 39.031 1 25.5C1 11.969 11.969 1 25.5 1C39.031 1 50 11.969 50 25.5Z"
                            stroke="#332A3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>

            <form @submit.prevent="submitForm" class="form-submit">
                <input type="text" v-model="data.name" name="title" class="input-area" placeholder="Título" required>
                <input type="text" v-model="data.description" name="description" class="input-area"
                    placeholder="Descrição do Item" required>
                <input type="submit" :value="isEditMode ? 'Atualizar' : 'Salvar'" class="input-button-sumit">
            </form>
        </div>
    </section>
</template>

<script>
import api from "@/services/api";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

export default {
    name: 'ItemCard',
    components: {},
    setup() {
        const items = ref([]);
        const data = ref({
            name: "",
            description: "",
        });

        const route = useRouter();
        const isEditMode = ref(false);

        onMounted(() => {
            const itemId = route.params;
            
            if (itemId && itemId.id) {
                isEditMode.value = true;
            }
        });

        const submitForm = () => {
            api.post("itens/", data.value)
                .then((response) => {
                    items.value = response.data;
                    data.value.name = "";
                    data.value.description = "";

                    route.push("/");
                })
                .catch((error) => {
                    console.error('Erro na solicitação:', error.response);
                });
        };

        return { items, data, submitForm, isEditMode };
    }
}
</script>

<style scoped>
.modal-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.40);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 5px 57.1px 0px rgba(0, 0, 0, 0.20);
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 77px;
}

.topbar {
    display: flex;
    flex-direction: row;
    gap: 17em;
}

.texts-topbar {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.text-description-topbar {
    font-weight: 300;
}

.form-submit {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.input-area {
    border-radius: 20px;
    border: 2px solid var(--cinza);
    padding: 22px;
    font: var(--fonte);
}

.input-area:focus-visible,
.input-area:active,
.input-area:focus,
.input-area :focus {
    border: 2px solid var(--rosa) !important;
    outline: none;
}

.input-button-sumit {
    border-radius: 20px;
    border: 2px solid var(--rosa);
    background: var(--rosa);
    padding: 22px;
    font: var(--fonte);
    color: #FFF;

    cursor: pointer;
}
</style>
