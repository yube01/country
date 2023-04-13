<template>
  <header class="bg-white shadow h-16 flex justify-between ">

      <router-link :to="{ name: 'home' }" class="inline-flex px-5 items-center h-full">
          Home
      </router-link>
     <div class="flex justify-center gap-1 items-center">
       <router-link :to="{ name: 'byName' }" class="  inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 "  >
          Search Meal
        </router-link>

        <router-link :to="{ name: 'byLetter' }" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Search Meals by letters
        </router-link>
        <router-link :to="{ name: 'byIngredient' }" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals by Ingredients
        </router-link>
     </div>
    </header>
</template>