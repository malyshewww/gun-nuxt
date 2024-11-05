<template lang="pug">
	div
		h1  HTML
		textarea(v-model='htmlCode' placeholder='Вставьте ваш HTML-код')
		button(@click='validateHtml') Start
		div(v-if='results')
			pre {{ results }}      
</template>
<script setup>
const htmlCode = ref("");
const results = ref(null);

const validateHtml = async () => {
   const response = await fetch("https://validator.w3.org/nu/", {
      method: "POST",
      headers: {
         "Content-Type": "text/html; charset=utf-8",
         "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
      body: htmlCode.value,
   });

   if (response.ok) {
      const text = await response.text();
      results.value = text; // Вы можете захотеть парсить этот текст для извлечения конкретной информации
   } else {
      results.value = "Ошибка при проверке HTML.";
   }
};
</script>
