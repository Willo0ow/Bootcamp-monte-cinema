<template>
  <div class="container">
    <div class="loader">
      <div class="loader--dot"></div>
      <div class="loader--dot"></div>
      <div class="loader--dot"></div>
      <div class="loader--dot"></div>
      <div class="loader--dot"></div>
      <div class="loader--dot"></div>
      <div class="loader--text"></div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  font-family: Helvetica;
}

.loader {
  height: 20px;
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &--dot {
    animation-name: loader;
    animation-timing-function: ease-in-out;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: black;
    position: absolute;
    border: 2px solid white;

    &:first-child {
      background-color: $pink-fair;
      animation-delay: 0.5s;
    }

    &:nth-child(2) {
      background-color: $red-cosmos;
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      background-color: $pink-sweet;
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      background-color: $red-bittersweet;
      animation-delay: 0.2s;
    }

    &:nth-child(5) {
      background-color: $cherry-red;
      animation-delay: 0.1s;
    }

    &:nth-child(6) {
      background-color: $totem-pole;
      animation-delay: 0s;
    }
  }
  &--text {
    position: absolute;
    top: 200%;
    left: 0;
    right: 0;
    width: 4rem;
    margin: auto;

    &:after {
      content: "Loading";
      font-weight: bold;
      animation-name: loading-text;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes loader {
  15% {
    transform: translateX(0);
  }

  45% {
    transform: translateX(250px - 25px);
  }

  65% {
    transform: translateX(250px - 25px);
  }

  95% {
    transform: translateX(0);
  }
}
@keyframes loading-text {
  0% {
    content: "Loading";
  }

  25% {
    content: "Loading.";
  }

  50% {
    content: "Loading..";
  }

  75% {
    content: "Loading...";
  }
}
</style>
