import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      registration: "Registration",
      login: "Login",
      orders: "Orders",
      order: "Order",
      forgotPassword: "Forgot password ?",
      email: "Email",
      password: "Password",
      useSocialNetworks: "Use social networks",
      toUseSocialNetworks: "Use social networks",
      emailOrMobile: "Email or Mobile",
      confirmPassword: "Confirm Password",
      ask: "Ask ?",
      light: "Light",
      dark: "Dark",
      system: "system",
      logout: "Logout",
      goHome: "Go home",
    },
  },
  ua: {
    translation: {
      registration: "Реєстрація",
      login: "Увійти",
      orders: "Замовлення",
      order: "Замовлення",
      forgotPassword: "Забули пароль ?",
      email: "Електронна пошта",
      password: "Пароль",
      useSocialNetworks: "Використовуйте соціальні мережі",
      toUseSocialNetworks: "Використовувати соціальні мережі",
      emailOrMobile: "Електронна пошта або мобільний",
      confirmPassword: "Підтвердьте пароль",
      ask: "Питання ?",
      light: "Світла",
      dark: "Темна",
      system: "Системна",
      logout: "Вийти",
      goHome: "На головну",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") ?? "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
