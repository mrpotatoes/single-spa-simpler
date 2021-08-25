import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@andric/locally-developed",
  app: () => System.import("@andric/locally-developed"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
