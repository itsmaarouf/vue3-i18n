<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink>
      </li>
    </ul>
    <LanguageSwitcher />
  </nav>
</template>

<script setup>
import LanguageSwitcher from "./LanguageSwitcher.vue";
</script>
