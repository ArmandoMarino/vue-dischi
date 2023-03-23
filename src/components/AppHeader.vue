<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 mb-3">
    <div class="container-fluid">
      <RouterLink class="navbar-brand d-flex align-items-center px-2" to="/"><i
          class="fa-solid fa-2x fa-gamepad me-3"></i>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link text-white me-3" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link text-white">Contact us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  background: rgb(105, 50, 142);
  background: linear-gradient(327deg,
      rgba(105, 50, 142, 1) 40%,
      rgba(0, 0, 0, 1) 74%);
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 1px 50px 10px #ffffff;
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

li.nav-item,
.navbar-brand {
  color: white;
}
</style>
