<template>
    <header class="header">
        <div class="header-container">
            <h4>Lista de Presentes</h4>
            <h1>papai noel</h1>
        </div>
        <router-link to="/adicionar"><input class="button-create" type="button" value="Novo Presente"></router-link>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    components: {}
}
</script>

<style scoped> .button-create {
     border-radius: 44.1px;
     background: var(--preto);
     color: white;
     padding: 18.9px 31.5px;
     border: none;
     font-family: var(--fonte);
     font-size: 20px;
     cursor: pointer;
 }

 .header {
     display: flex;
     flex-direction: column;
     align-items: start;
     justify-content: center;
     height: 100%;
     padding-left: 131px;
     gap: 21px;
 }
</style>



