# 100mslive typescript error reproduction

@100mslive typescript errors as this remix template is built with "Bundler" and the @100mslive code is imported as CJS instead of ESM (due to missing 'type': 'module', and non-separated cjs/esm types in package.json)

## Base Setup

```js
npx create-remix@latest --template remix-run/remix/templates/vite-express
```

## Files / Reproduction

```js
npm install --save @100mslive/react-sdk@latest
```

Route Files:

| Description | File |
| ----------- | ---- |
| Layout Wrapper (Contains HMSRoomProvider) | /meeting/route.tsx  |
| Meeting Route | /meeting._index/route.tsx |


## Errors
```
Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)

[vite] Error when evaluating SSR module /app/routes/meeting._index/Join.tsx: failed to import "@100mslive/react-sdk"
```

```
SyntaxError: Unexpected token 'export'
```

There are additional typescript errors (eg. Peer resolution, etc.), however those are implementation fixable...


# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Express server with Vite dev middleware:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Express applications you should be right at home. Just make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
