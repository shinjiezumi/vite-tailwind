<template>
  <div>
    <h1 class="mt-2 text-4xl text-center font-bold">
      TailWind CSS Samples
    </h1>
    <div class="mt-5 container flex justify-center">
      <ul class="list-disc">
        <li class="mt-2">
          <router-link
            to="/grid"
          >
            Grid
          </router-link>
        </li>
        <li class="mt-2">
          <router-link
            to="/form"
          >
            Form
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
