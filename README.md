# Refract-CMS example on Heroku

## Deploy to Heroku

**Step 1**: Create a heroku account
https://signup.heroku.com/login

**Step 2**: Fork this repository to your own account

**Step 3**: Use the deploy button to create your project with MLab MongoDB addon (default free tier).

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**Step 4**: Clone your repository & update the schema in your favourite code editor.
<https://refract-cms.com/create-schema-config>

**Step 5**:
Push your updates to Heroku using one of the following techniques:

a) Follow the git deployment guide: <https://devcenter.heroku.com/articles/git>

b) Connect your repo to Heroku to enable CI: <https://devcenter.heroku.com/articles/github-integration>

## Run locally

### Setup docker

Start a mongo process in the background using docker:

```
docker-compose up -d
```

### Start Refract-CMS

```
npm install
npm start
```

### Development links

| Name               | Url                                            |
| ------------------ | ---------------------------------------------- |
| Dashboard          | <http://localhost:3000>                        |
| GraphiQL           | <http://localhost:3000/cms/graphql>            |
| GraphQL Playground | <http://localhost:3000/cms/graphql-playground> |
| Mongo Express      | <http://localhost:8081>                        |
