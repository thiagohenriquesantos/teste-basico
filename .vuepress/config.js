module.exports = {
  title: "Desafio basico.com",
  description:
    "Essa é uma página feita para o desafio de desenvolvedor júnior do básico.com",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Projetos",
        link: "/projetos/"
      },
      {
        text: "Sobre mim",
        link: "https://thiagohenriquesantos.github.io/profile/"
      },
      { text: "Contato", link: "mailto: thiagosantosdev@gmail.com" }
    ],
    sidebar: {
      "/projetos/": ["", "conversor", "calendario", "bot", "amigo", "tinder"]
    },
    logo: "/images/job.svg"
  }
};
