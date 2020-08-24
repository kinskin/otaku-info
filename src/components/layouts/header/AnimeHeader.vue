<template>
    <b-row class="mt-3">
        <b-col class="my-4 py-3">
            <button id="top" class="btn btn-md btn-outline-danger" name="top">
                Top Anime
            </button>
        </b-col>
        <b-col class="my-4 py-3">
            <button id="upcoming" class="btn btn-md btn-outline-danger" name="upcoming">
                Upcoming Anime
            </button>
        </b-col>
        <b-col class="my-4 py-3">
            <button id="genre" class="btn btn-md btn-outline-danger" name="genre">
                Genre
            </button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "AnimeHeader",
};
</script>
