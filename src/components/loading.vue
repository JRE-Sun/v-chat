<template>
    <div class="vue-loading" v-show="loading">
        <div class="loading" :style="style"></div>加载中...
    </div>
</template>
<script>
export default {
    props: {
        color: {
            default: "black"
        },
        loading: {
            default: "true"
        }
    },
    data() {
        return {
            black: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=`,
            white: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAADACAMAAACDB5U0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAEHRSTlMAUQwWSGr/BSODz+iYN7ioo0T1UwAABSpJREFUeNrtmouSozgMRbFlYfn9/387FoaIJFAYU7s7W5Vb3ZOkMzrIliD2JdNPf79UCOpJPMxV8ABADKC7UakUOgLolHRPvPbz7OEbYI1SxvaMO4Qwu28AqUroAdg4VwR9ArSqgNQ3c5xC+QQkVaWnLrm5Esw7ADi+obqmMczZvgGMMjyFnVKcAu4B1JOAlZbLNQUPAtDmbQaPM0nZO9qecwqutXKAtYTwaihz1FG2BB88ru8spYTtZLK7ElqqLJWOAd6HrNZS1nZkGEBrwq2EwP3ItKMhBM+IuLxpciF5D4yB5ZG7gWlwWD3nlyS8g5NZ3sJPT6oUQ0McZNiyZyWYzmXaTBR7cHzDg1eGLpoBawIhHgOq6LobwflCx0OQwV8g7El2HeHjApGeTmX1Sx9ZmiwqUsSTQrLMezHzTl5qcFAHIQwCzOvno4G6hqBOhzDpgUn85wRndNsXjtEdn+7J0DVCq1hixtMa0EV8cqXEWE4A5upqQC28HA8Brq5HgLGG19+jj0C5Ip6Og1p4QVpeIb7SkLUFmbWLjj4XXMs+rVeVGNHyn+3b2sJS6+N0DChx+/zE6BwDQCng0lTRlgy/SIczGBW8njsXTaUiInOSMpI2JHl+csWyWAFYX2pE5Ed4P+rliWBiBaRJAG19AlOntKvCSQDy+d4nxQnQDtC7wtjPoJreAbZrjSMz6GAPuLfKAk4gTZ+AKfWmoFsTfgE0V7IDIKeBAJpAlkZ9EsCAngNkODT99NNPz2W8N0/iQTbiY6JQRbejYqQPgPgKHdI5hKy/AdA2ctcC3vPgNyD2+inWhYqgTwBxfOm7rHMK8ROQb/gxGCrBvAMUxzO1bxrXnZ8ArG/b8E4pTkHtAcgJYL9/wDv5DALgEs7+YtFNJeOrZ3ge3Vp7WEtoLvyD6LPPuL6zlFJvJxMsJTz1DwTA+yWzdlMIhWF6+YdHQFf+ARWfGeFSa/xIb2e16vAPMC9JZISDNWSXf0CuJVFo2D9I60w88A9U8dm7R/4B5vi/9A/0U/8g7kQD/kEsEl9cp39wDhjwD1IUOXroH9j/3j/Q0zP/QDnUD/wD46KLatw/wMg7nmH/AB0r4ph/oJVbDu9G/YMaykJaN5r6pn+wjr7RAdHJTF74BwKIbtvXGURUtvnB3f4BOvEPsCrJoW/7B6ol0A494B8krKJJAHf9A45XkwDu+geGASCAu/4BcLyZBNDnH4gUA7QAbvsHrYQCuO0ftBIK4L5/IH0igBH/QACjklYeFxnz8w9++umR5P6TGQ6Wjfi4yFfR7SjnthhgAMhasouli/dF7wFih3QNB3jPg98A125Fd2jZedEOIF8qiH2XdU7BfQLK3O/HIKeQ3gGm3Y3vky4VEO0eYJfvA+h+/ypnr/YA5ATUJLrYlMVKKCCNBKEmkKVQJ/0jK9S0llL71sqOE0gvoypkOrtNpLTMY9HbyQRLCTfzn72AfHmjKnsfxT+oTbiWUPmZ5Y9vlTUEtcZfHmVIpj3Oi4I5vdVYERH1d35LUePcdGrKEZaGOPwPKbRwr65vWLqjBH3LHu2Ff1ATKHgKiDB+09aEuaS+c8GeoOlv9g+S22nEP3B7YZ9/cAqIOOIfOBH+/AMwqB74BzZhlRn2D0hxvDOj/oHCRWrQPzDYlOyYf4BN29e30l3/QLXsSbZoN/0DJdnLJvGOfwAKk943PT3wDwwHPPAPSFWN+gdiFgz6B3K4Qf9ABjziH0gJh/0DKfq4f8C1f+QfQEo//+Cnf1t/AFGZQwaktm6jAAAAAElFTkSuQmCC`,
            style: {
                "background-image": ""
            }
        };
    },
    mounted() {
        this.style["background-image"] = `url(${
            this.color == "black" ? this.black : this.white
        })`;
    }
};
</script>

<style lang="scss" scoped>
.vue-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .loading {
        width: 28px;
        margin-right: 6px;
        background-position: center;
        height: 28px;
        background-size: cover;
        overflow: hidden;
        animation: 1s spin steps(12, end) infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

