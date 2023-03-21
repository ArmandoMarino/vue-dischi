<script>
export default {
    name: 'AppLoader'
};
</script>

<template>
    <div class="loader-overlay">
        <div class="my-spinner text-primary" role="status">
            <span class="loader">Loading...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;


    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.my-spinner {
    height: 150px;
    width: 150px;
    z-index: 2;
}

// LOADER IMPORT
.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    font-size: 12px;
}

.loader:before,
.loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
}

.loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
}

.loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
}

@keyframes pulsIn {
    0% {
        box-shadow: inset 0 0 0 1rem #fff;
        opacity: 1;
    }

    50%,
    100% {
        box-shadow: inset 0 0 0 0 #fff;
        opacity: 0;
    }
}

@keyframes pulsOut {

    0%,
    50% {
        box-shadow: 0 0 0 0 #fff;
        opacity: 0;
    }

    100% {
        box-shadow: 0 0 0 1rem #fff;
        opacity: 1;
    }
}
</style>