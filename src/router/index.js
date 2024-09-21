import { createWebHistory, createRouter } from "vue-router";
import  Calculo  from "@/views/Calculo.vue";
import Formulario from "@/views/Formulario.vue";


const routes = [
    {
      path: "/",
      name: "Calculo",
      component: Calculo,
    },
    {
      path: "/formulario",
      name: "Formulario",
      component: Formulario,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;