<template>
    <b-form inline @submit.prevent="formSubmit">
        <b-form-group>
            <select class="form-control mx-2" v-on:change="handleChange($event)">
                <option selected disabled value="">Please select one</option>
                <option
                    v-for="(option, index) in options"
                    :key="index"
                    :value="option.name.toLowerCase()"
                    >{{ option.name }}</option
                >
            </select>
        </b-form-group>
        <input
            class="form-control mx-2 px-2"
            name="input"
            type="text"
            v-model="input"
            placeholder="Search"
        />
        <input class="btn btn-md btn-outline-success mx-2" type="submit" value="Search" />
    </b-form>
</template>

<script>
export default {
    name: "SelectInput",
    props: ["optionsData"],
    data() {
        return {
            options: this.optionsData,
            input: null,
            option: null,
        };
    },
    methods: {
        formSubmit() {
            const data = {
                input: this.input,
                option: this.option,
            };
            this.$emit("form-data", data);
        },
        handleChange(e) {
            this.option = e.target.value;
        },
    },
};
</script>

<style scoped></style>
