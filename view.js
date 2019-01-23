console.log("CHANGE-ME2");

if (module.hot) {
  module.hot.accept(() => {
    console.log("==== Reload ====");
  });
}
