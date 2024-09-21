<script>
    export default {
        data() {
            return {
                total: null,
                nota1: null,
                nota2: null,
                nota3: null,
                asistencia: null,
                mensaje: ''
            };
        },
        computed: {
            alertClass() {
                this.total = (this.nota1 + this.nota2 + this.nota3)/3;
                if (this.total >= 40 && this.asistencia >= 80) {
                    return 'alert alert-success';
                } else {
                    return 'alert alert-danger';
                }
            }
        },
        methods: {
            evaluateScore() {
                if (this.nota1 === null || this.nota2 === null || this.nota3 === null ||
                    isNaN(this.nota1) || isNaN(this.nota2) || isNaN(this.nota3) ||
                    this.nota1 === 0 || this.nota2 === 0 || this.nota3 === 0){
                        this.mensaje = `Por favor, ingrese valores válidos para las notas y la asistencia`;
                } else {
                    this.total = (this.nota1 + this.nota2 + this.nota3)/3;
                    if (this.total >= 40 & this.asistencia >= 80) {
                        this.mensaje = `El promedio es: ${this.total}. \n Tu estado es: Aprobado`;
                    } else {
                        this.mensaje = `El promedio es: ${this.total}. \n Tu estado es:Reprobado`;
                    }
                }
            }
        }
    };
</script>

<template>
    <div class="container mt-5">

        <form @submit.prevent="evaluateScore" class="mt-3">
            <div class="mb-3">
                <label for="inputNota1" class="form-label">nota 1</label>
                <input type="number" id="inputNota1" v-model.number="nota1" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputNota2" class="form-label">nota 2</label>
                <input type="number" id="inputNota2" v-model.number="nota2" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputNota3" class="form-label">nota 3</label>
                <input type="number" id="inputNota3" v-model.number="nota3" class="form-control" required min="10" max="70">
            </div>
            <div class="mb-3">
                <label for="inputAsistencia" class="form-label">Asistencia %</label>
                <input type="number" id="inputAsistencia" v-model.number="asistencia" class="form-control" required min="0" max="100">
            </div>
            <button type="submit" class="btn btn-primary">Calcular</button>
        </form>
        <br><br>
        <div v-if="total > 0" :class="alertClass" role="alert">
            {{ mensaje }}
        </div>
    </div>
</template>

<style scoped>
    /* Estilos específicos del componente */
    .container {
        max-width: 500px;
        margin: 0 auto;
    }

    .form-label {
        font-weight: bold;
    }

    .btn-primary {
        margin-top: 10px;
    }
</style>