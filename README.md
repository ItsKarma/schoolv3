# schoolv3

## Contributing

Check open issues as a good place to start.

### Local Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

Before pushing any changes, you'll want to make sure to perform a `yarn build` command and test the static site.

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of the static build.

#### Cypress

We have plans to implement some Cypress UI tests, but none exist yet. If you're feeling up to it, please feel free to contribute.

## Deployment

We use Vercel to host the production and test websites.

When you open a Pull request, Vercel should automatiaclly deploy to a test url that will be commented back on the Pull Request.

When merged into the main branch, Vercel should automatically deploy to production.

* If case of a failure during build/test, Vercel will not promote the build to production.
