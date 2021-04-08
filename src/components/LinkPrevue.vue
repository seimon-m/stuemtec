<template>
    <div class="linker">
        <div
            id="loader-container"
            v-if="!response && validUrl"
            :style="{ width: cardWidth }"
        >
            <slot name="loading">
                <div class="spinner"></div>
            </slot>
        </div>
        <div v-if="response">
            <slot
                :img="response.image"
                :title="response.title"
                :description="response.description"
                :url="url"
            >
                <div class="wrapper" @click="viewMore">
                    <div class="card-title">
                        <h4>{{ response.title }}</h4>
                    </div>
                    <div class="content">
                        <div class="card-img">
                            <img :src="response.image" />
                        </div>
                        <div class="card-text">
                            <p>{{ response.description }}</p>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "link-prevue",
    props: {
        url: {
            type: String,
            default: "",
        },
        cardWidth: {
            type: String,
            default: "400px",
        },
        onButtonClick: {
            type: Function,
            default: undefined,
        },
        showButton: {
            type: Boolean,
            default: true,
        },
        apiUrl: {
            type: String,
            default: "https://link-prevue-api-v2.herokuapp.com/preview/",
        },
    },
    watch: {
        url: function() {
            this.response = null;
            this.getLinkPreview();
        },
    },
    created() {
        this.getLinkPreview();
    },
    data: function() {
        return {
            response: null,
            validUrl: false,
        };
    },
    methods: {
        viewMore: function() {
            if (this.onButtonClick !== undefined) {
                this.onButtonClick(this.response);
            } else {
                const win = window.open(this.url, "_blank");
                win.focus();
            }
        },
        isValidUrl: function(url) {
            const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
            this.validUrl = regex.test(url);
            return this.validUrl;
        },
        getLinkPreview: function() {
            if (this.isValidUrl(this.url)) {
                this.httpRequest(
                    (response) => {
                        this.response = JSON.parse(response);
                    },
                    () => {
                        this.response = null;
                        this.validUrl = false;
                    }
                );
            }
        },
        httpRequest: function(success, error) {
            const http = new XMLHttpRequest();
            const params = "url=" + this.url;
            http.open("POST", this.apiUrl, true);
            http.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
            );
            http.onreadystatechange = function() {
                if (http.readyState === 4 && http.status === 200) {
                    success(http.responseText);
                }
                if (http.readyState === 4 && http.status === 500) {
                    error();
                }
            };
            http.send(params);
        },
    },
};
</script>

<style scoped>
.linker {
    margin-top: 10px;
}
.wrapper {
    overflow: hidden;
    border-radius: 3px;
    background-color: #fff;
    cursor: pointer;
    width: 500px;
    max-height: 150px;
    font-size: 10pt;
    line-height: 1.2;
    border: 1px solid rgb(172, 172, 172);
    transition: all 0.25s ease;
}
.wrapper:hover {
    box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.15);
}
img {
    max-height: 100px;
    margin-left: 10px;
}
.content {
    display: flex;
}
.card-title {
    margin-right: 10px;
    margin-left: 20px;
}


p {
    font-size: 9pt;
    margin-left: 20px;
    margin-right: 10px;
}

/* Loader */
.spinner {
    margin-top: 40%;
    margin-left: 45%;
    height: 28px;
    width: 28px;
    animation: rotate 0.8s infinite linear;
    border: 5px solid #868686;
    border-right-color: transparent;
    border-radius: 50%;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
