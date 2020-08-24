<template>
    <div
        v-bind:style="{
            width: '18em',
            height: '35vh',
            position: 'relative',
            cursor: 'pointer',
        }"
        v-on:click.prevent="showAnimePage(data.type, data.mal_id)"
    >
        <div
            v-bind:style="{
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                color: 'white',
            }"
            v-on:mouseover.prevent="hoverImg ? null : (hoverImg = !hoverImg)"
            v-on:mouseleave.prevent="hoverImg ? (hoverImg = !hoverImg) : null"
        >
            <div
                v-bind:id="data.mal_id"
                v-bind:style="hoverImg ? hoverImgAtt : nonHoverImgAtt"
            ></div>
            <div
                v-if="hoverImg"
                v-bind:style="{
                    width: '75%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: 0,
                    transform: 'translate(-50%, -50%)',
                }"
            >
                <div v-bind:style="{ textAlign: 'center' }">
                    <div
                        v-if="data.rank"
                        class="py-3"
                        v-bind:style="{ fontWeight: 'bold', fontSize: '30px' }"
                    >
                        {{ data.rank }}
                    </div>
                    <div class="my-3">
                        <p v-bind:style="{ fontWeight: 'bold', fontSize: '20px' }">
                            {{ data.title }}
                        </p>
                    </div>
                    <div>
                        <button class="btn btn-md btn-danger my-3">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "SummaryCard",
    props: ["data"],
    data() {
        return {
            hoverImg: false,
            hoverImgAtt: {
                height: "100%",
                width: "100%",
                backgroundImage: `url(${this.data.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "0.3",
                transition: "0.3s",
            },
            nonHoverImgAtt: {
                height: "100%",
                width: "100%",
                backgroundImage: `url(${this.data.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            },
        };
    },
    methods: {
        dateTime(params) {
            return moment(params).format("DD-MMM-YYYY");
        },
        showAnimePage(type, id) {
            type = type.toLowerCase();
            if (type !== "manga") type = "anime";
            this.$router.push(`/data/${type}/${id}`);
        },
        toggleHover() {
            this.hoverImg = !this.hoverImg;
        },
    },
};
</script>
<style scoped>
/* .img {
    width: 18em;
} */
._card {
    border-radius: 10px;
    width: 18em;
    height: 35vh;
}
._card:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
}
._header {
    margin: 10px;
}
._title {
    font-weight: bold;
    margin: 10px 0;
}
._img {
    height: 300px;
}
img {
    height: 100%;
    width: 100%;
}

._text-body {
    margin: 15px 15px;
}
label {
    margin: 0 5px;
    font-weight: bold;
}

.text {
    display: flex;
}
</style>
