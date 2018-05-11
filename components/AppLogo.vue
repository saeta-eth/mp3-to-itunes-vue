<template>
  <div class="logo">
    <img src="https://s3.us-west-1.amazonaws.com/mp3-to-itunes/logo.png" width="250" height="250" />
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
  filter: drop-shadow(0px 0px 3px black);
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
