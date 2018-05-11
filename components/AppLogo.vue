<template>
  <div class="logo">
    <img src="https://s3.us-west-1.amazonaws.com/mp3-to-itunes/logo.png" />
  </div>
</template>

<style>
.logo {
  display: inline-block;
  animation: turn;
  animation-duration: 5s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  padding: 5px;
}

.logo img {
  width: 220px;
  height: 220px;
  filter: drop-shadow(0px 0px 3px black);
}

@media (max-width: 480px) {
  .logo img {
    width: 155px;
    height: 155px;
  }
}

.logo::before {
  content: "";
  position: absolute;
  width: 230px;
  height: 0;
  bottom: 0;
  left: 15px;
  background-color: rgba(113, 108, 93, 1);
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  opacity: 0.2;
  box-shadow: 0px -1px 3px 1px rgba(113, 108, 93, 1);
}

@keyframes turn {
  0% {
    transform:  rotateY(360deg);
  }
  25% {
    transform: rotateY(340deg);
  }
  50% {
    transform: rotateY(360deg)
  }
  75% {
    transform: rotateY(380deg);
  }
  100% {
    transform:  rotateY(360deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
