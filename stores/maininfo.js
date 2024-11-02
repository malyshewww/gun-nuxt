export const useMainInfoStore = defineStore("main-info", {
   state: () => ({
      menu: [
         {
            title: "О проекте",
            path: "/",
         },
         {
            title: "Апартаменты в продаже",
            path: "/flats/list",
         },
         {
            title: "Динамика строительства",
            path: "/dynamic",
         },
         {
            title: "Новости и акции",
            path: "/",
            hash: "#news",
         },
         {
            title: "Паркинг",
            path: "/parking",
         },
         {
            title: "Ипотека",
            path: "/page/text",
         },
         {
            title: "Контакты",
            path: "/contacts",
         },
      ],
   }),
});
