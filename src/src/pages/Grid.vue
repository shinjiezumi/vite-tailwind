<template>
  <div>
    <h1 class="mt-2 text-4xl text-center font-bold">
      Grid
    </h1>
    <div class="mt-5 flex justify-center">
      <div class="flex flex-col w-4/5">
        <!-- Basic Gird -->
        <h2 class="mb-5">
          ■ Basic Gird
        </h2>
        <!-- Full width column -->
        <div class="flex mb-4">
          <div class="w-full bg-gray-500 h-12" />
        </div>

        <!-- Two columns -->
        <div class="flex mb-4">
          <div class="w-1/2 bg-gray-400 h-12" />
          <div class="w-1/2 bg-gray-500 h-12" />
        </div>

        <!-- Three columns -->
        <div class="flex mb-4">
          <div class="w-1/3 bg-gray-400 h-12" />
          <div class="w-1/3 bg-gray-500 h-12" />
          <div class="w-1/3 bg-gray-400 h-12" />
        </div>

        <!-- Four columns -->
        <div class="flex mb-4">
          <div class="w-1/4 bg-gray-500 h-12" />
          <div class="w-1/4 bg-gray-400 h-12" />
          <div class="w-1/4 bg-gray-500 h-12" />
          <div class="w-1/4 bg-gray-400 h-12" />
        </div>

        <!-- Five columns -->
        <div class="flex mb-4">
          <div class="w-1/5 bg-gray-500 h-12" />
          <div class="w-1/5 bg-gray-400 h-12" />
          <div class="w-1/5 bg-gray-500 h-12" />
          <div class="w-1/5 bg-gray-400 h-12" />
          <div class="w-1/5 bg-gray-500 h-12" />
        </div>

        <!-- Six columns -->
        <div class="flex">
          <div class="w-1/6 bg-gray-400 h-12" />
          <div class="w-1/6 bg-gray-500 h-12" />
          <div class="w-1/6 bg-gray-400 h-12" />
          <div class="w-1/6 bg-gray-500 h-12" />
          <div class="w-1/6 bg-gray-400 h-12" />
          <div class="w-1/6 bg-gray-500 h-12" />
        </div>

        <!-- Responsive Grids -->
        <h2 class="mt-5 mb-5">
          ■ Responsive Grids
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 h-12" />
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 h-12" />
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 h-12" />
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 h-12" />
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500 h-12" />
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400 h-12" />
        </div>

        <!-- Mixed Column Sizes -->
        <h2 class="mt-5 mb-5">
          ■ Mixed Column Sizes
        </h2>
        <!-- Narrower side column -->
        <div class="flex mb-4">
          <div class="w-3/4 bg-gray-500 h-12" />
          <div class="w-1/4 bg-gray-400 h-12" />
        </div>

        <!-- Wide center column -->
        <div class="flex">
          <div class="w-1/5 bg-gray-500 h-12" />
          <div class="w-3/5 bg-gray-400 h-12" />
          <div class="w-1/5 bg-gray-500 h-12" />
        </div>

        <!-- Wrapping Columns -->
        <h2 class="mt-5 mb-5">
          ■ Wrapping Columns
        </h2>
        <div class="flex flex-wrap -mb-4">
          <div class="w-1/3 mb-4 bg-gray-400 h-12" />
          <div class="w-1/3 mb-4 bg-gray-500 h-12" />
          <div class="w-1/3 mb-4 bg-gray-400 h-12" />
          <div class="w-1/3 mb-4 bg-gray-500 h-12" />
          <div class="w-1/3 mb-4 bg-gray-400 h-12" />
        </div>

        <!-- Column Spacing -->
        <h2 class="mt-5 mb-5">
          ■ Column Spacing
        </h2>
        <div class="px-2">
          <div class="flex -mx-2">
            <div class="w-1/3 px-2">
              <div class="bg-gray-400 h-12" />
            </div>
            <div class="w-1/3 px-2">
              <div class="bg-gray-500 h-12" />
            </div>
            <div class="w-1/3 px-2">
              <div class="bg-gray-400 h-12" />
            </div>
          </div>
        </div>

        <!-- Automatic Column Widths -->
        <h2 class="mt-5 mb-2">
          ■ Automatic Column Widths
        </h2>
        <div class="mb-5">
          <code>flex-1</code>を指定すると自動的に列のサイズを決定する。
        </div>
        <!-- Full width column -->
        <div class="flex mb-4">
          <div class="flex-1 bg-gray-500 h-12" />
        </div>

        <!-- Five columns -->
        <div class="flex mb-4">
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
        </div>

        <!-- Seven columns -->
        <div class="flex mb-4">
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
        </div>

        <!-- Eleven columns -->
        <div class="flex mb-4">
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
          <div class="flex-1 bg-gray-500 h-12" />
          <div class="flex-1 bg-gray-400 h-12" />
        </div>

        <!-- Column Order -->
        <h2 class="mt-5 mb-2">
          ■ Automatic Column Widths
        </h2>
        <div class="flex md:flex-row-reverse flex-wrap">
          <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">
            1
          </div>
          <div class="w-full md:w-1/4 bg-gray-400 p-4 text-center text-gray-700">
            2
          </div>
        </div>

        <div class="mt-10 mb-10 text-center">
          <router-link to="/">
            ・home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
};
</script>
