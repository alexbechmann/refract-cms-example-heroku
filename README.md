# Refract-CMS CLI Example

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup docker

Start a mongo process in the background using docker:

```
docker-compose up -d
```

## Start Refract-CMS

```
npm install
npm start
```

## Development links

| Name               | Url                                            |
| ------------------ | ---------------------------------------------- |
| Dashboard          | <http://localhost:3000>                        |
| GraphiQL           | <http://localhost:3000/cms/graphql>            |
| GraphQL Playground | <http://localhost:3000/cms/graphql-playground> |
| Mongo Express      | <http://localhost:8081>                        |

## Deploy to Heroku

```
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```