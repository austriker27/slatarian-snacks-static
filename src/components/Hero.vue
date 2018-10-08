<template>
  <div class="flex justify-center ">
    <!-- <h1 class="mb-4">{{ msg }}</h1> -->
    <!-- eslint-disable-next-line -->
    <div class="rainbow-border p-1">
      <div class="rainbow-border-faster p-8 bg-faded-box">
        <h1 class="text-center font-lazer tracking-wide text-5xl gradient-font mb-8 text-shadow-lg-white">
          Slatarian Snacks
        </h1>
        <h4 class="text-outrun-green font-aktiv text-center uppercase tracking-wide text-base text-light font-thin">
          Vote for your favorite snacks
        </h4>

      </div>

    </div>
  </div>
</template>

<style scoped>
.bg-faded-box {
  background-color: rgba(67,75,159, 0.6);
}

.rainbow-border {
  border: 4px solid #09B87C;
  -webkit-animation: rainbow 20s infinite;
  -webkit-animation: rainbow 20s infinite; /* Safari 4+ */
  -moz-animation:    rainbow 20s infinite; /* Fx 5+ */
  -o-animation:      rainbow 20s infinite; /* Opera 12+ */
  animation:         rainbow 20s infinite; /* IE 10+, Fx 29+ */
}

.rainbow-border-faster {
  border: 4px solid #09B87C;
  -webkit-animation: rainbow 15s infinite;
  -webkit-animation: rainbow 15s infinite; /* Safari 4+ */
  -moz-animation:    rainbow 15s infinite; /* Fx 5+ */
  -o-animation:      rainbow 15s infinite; /* Opera 12+ */
  animation:         rainbow 15s infinite; /* IE 10+, Fx 29+ */
}

@-webkit-keyframes rainbow {
  0% {border-color: #c42b28;}
  10% {border-color: #EE5B58;}
  20% {border-color: #09B87C;}
  30% {border-color: #09B87C;}
  40% {border-color: #434b9f;}
  50% {border-color: #0c0d1c;}
  60% {border-color: #353a73;}
  70% {border-color: #9598cb;}
  80% {border-color: #fddd30;}
  90% {border-color: #fddd30;}
  100% {border-color: #C711C4;}
}

@-moz-keyframes rainbow {
  0% {border-color: #c42b28;}
  10% {border-color: #EE5B58;}
  20% {border-color: #09B87C;}
  30% {border-color: #09B87C;}
  40% {border-color: #434b9f;}
  50% {border-color: #0c0d1c;}
  60% {border-color: #353a73;}
  70% {border-color: #9598cb;}
  80% {border-color: #fddd30;}
  90% {border-color: #fddd30;}
  100% {border-color: #C711C4;}
}

@-o-keyframes rainbow {
  0% {border-color: #c42b28;}
  10% {border-color: #EE5B58;}
  20% {border-color: #09B87C;}
  30% {border-color: #09B87C;}
  40% {border-color: #434b9f;}
  50% {border-color: #0c0d1c;}
  60% {border-color: #353a73;}
  70% {border-color: #9598cb;}
  80% {border-color: #fddd30;}
  90% {border-color: #fddd30;}
  100% {border-color: #C711C4;}
}

@keyframes rainbow {
  0% {border-color: #c42b28;}
  10% {border-color: #EE5B58;}
  20% {border-color: #09B87C;}
  30% {border-color: #09B87C;}
  40% {border-color: #434b9f;}
  50% {border-color: #0c0d1c;}
  60% {border-color: #353a73;}
  70% {border-color: #9598cb;}
  80% {border-color: #fddd30;}
  90% {border-color: #fddd30;}
  100% {border-color: #C711C4;}
}
</style>
