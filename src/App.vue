<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>
<template>
  <div class="superior">
    <div>
      <h3>Programacion Front End</h3>
    </div>
    <div id="nav" class="nav">    
        <router-link to="/" class="link" :class="{ active: isActive('/') }">Cálculo de calificaciones</router-link> 
        <router-link to="/Formulario" class="link" :class="{ active: isActive('/Formulario') }">Formulario de Registro</router-link>
        <router-link to="/Construccion" class="link" :class="{ active: isActive('/Construccion') }">En construccion</router-link>
    </div>
    <div class="search-container">
      <input type="text" placeholder="Search" class="search-input">
      <button class="search-button">Busqueda</button>
    </div>
  </div>
  <router-view />
</template>
<style scoped>
.superior{
  display: flex;
  justify-content: space-between;
  background-color: rgb(141, 141, 141);
}
.nav {
  display: flex;
  justify-content: space-between;
}
.link {
  text-decoration: none; /* Elimina el subrayado */
  color: #aaa; /* Mantiene el color heredado del padre */
  padding: 10px;

}
.link.active {
  color: black;
  font-weight: bold;
}
.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-right: 10px; /* Espacio entre el input y el botón */
}

.search-input:focus {
  border-color: #7BBE3B; /* Color del borde cuando el input tiene foco */
}

.search-button {
  padding: 8px 16px;
  border: 1px solid #7BBE3B;
  background-color: #f5fff1;
  color: #7BBE3B;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #7BBE3B;
  color: white;
}
</style>

