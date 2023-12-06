<template>
  <main>
    <h1>{{ $t("home.header") }}</h1>
    <p>{{ $t("home.created_by", { company: "@itsmaarouf" }) }}</p>
    <p>{{ $t("home.num_visits", 30) }}</p>
    <p>{{ $d(new Date(), "longFormat") }}</p>
  </main>
</template>

<script setup></script>
