## ELECTRON-WEBPACK-FAILURE

1. run:

```sh
# setup:
npm install

# then in 2 terminals, run:
npm run dev-webpack
npm run dev-electron
```

2. in `view.js`, change `CHANGE-ME` to any string

3. BUG:

   - in electron browser window: console shows:

   ```
    [WDS] App updated. Recompiling...
    [WDS] App hot update...
   ```

   - nothing is updated, no error
