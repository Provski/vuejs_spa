<template>
    <!-- Register -->
    <section>
        <base-card>
            <h2>Register as a Coach Now</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>


<script>
import coachForm from '../../components/coaches/coachForm.vue';

export default {
    components: {
        coachForm,
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
};
</script>