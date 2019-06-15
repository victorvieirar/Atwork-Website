import { Header, Hello, Case, Footer } from "./components";

export default {
  name: "App",
  components: { Header, Hello, Case, Footer },
  data: () => {
    return {
      cases: [
        {
          id: 1,
          name: "Social Media - Scopo"
        },
        {
          id: 2,
          name: "Marketing Digital - Agromall"
        },
        {
          id: 3,
          name: "Marketing Digital - Crooks"
        }
      ]
    };
  }
};
