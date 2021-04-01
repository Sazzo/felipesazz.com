<template>
  <div
    class="grid grid-cols-heroMobile gap-8 items-center sm:grid-cols-hero sm:gap-64"
  >
    <div class="items-center sm:mx-0">
      <img src="~/assets/rezero_char.png" class="max-w-xs sm:max-w-md" />
    </div>
    <div class="font-main py-6 text-center space-y-3 sm:py-60 sm:text-left">
      <h2 class="text-blue text-xl">Hello there!</h2>
      <h1 class="text-weakwhite text-6xl">I'm Sazz</h1>
      <p class="text-white max-w-xl text-center sm:max-w-2xl sm:text-left">
        I'm a full-stack developer (or at least trying), passionate about anime
        and building highly scalable things. I'm interested in DevOps and
        Elixir!
      </p>
      <div class="space-x-2">
        <Button value="Projects" />
        <Button value="Posts" />
      </div>
    </div>
  </div>
</template>
