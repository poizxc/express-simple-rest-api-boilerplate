# Express-Simple-Rest-Api-Boilerplate (esrab)

This is really simple boilerplate for building **REST APIs** with **express**.
I build it because I failed to find something simple in existing **boilerplate's** projects. I noticed that they are little overcomplicated for my purposes.

This **boilerplate** comes with configured out of the box:

- request validation,
- logging,
- async routes,
- tests,
- tests coverage
- linting,
- easy to use directory structure,
- easy errors throwing

You can check directory-structure for **information** how I am using this **sketch** you can alse find basic usage scenarios by clicking through **files** - I left comments in there.

Feel **free** to use this template if you want, but I will really **appreciate** if you will **leave** link to this repository somewhere in your readme ;)

If you see something that can be done better - feel free to create **github issue** ;)

## Table Of Contents

- [Express-Simple-Rest-Api-Boilerplate (esrab)](#express-simple-rest-api-boilerplate-esrab)
  - [Table Of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Clone It](#clone-it)
    - [Make it your own repository](#make-it-your-own-repository)
    - [Install dependencies](#install-dependencies)
  - [Scripts](#scripts)
    - [Start development server:](#start-development-server)
    - [Start production server:](#start-production-server)
    - [Rest of scripts:](#rest-of-scripts)
  - [Directory structure and basic usage](#directory-structure-and-basic-usage)

## Getting Started

For now you need to **clone** this repository, but I aim to create this as a **generator**.

### Clone It

```
git clone git+https://github.com/poizxc/express-simple-rest-api-boilerplate.git

cd express-simple-rest-api-boilerplate
```

### Make it your own repository

```
rm -rf .git && git init && npm init
```

### Install dependencies

```
npm install
```

or

```
yarn install
```

## Scripts

### Start development server:

Development server supports live reloading and error alerts via system notifications, it also set corses headers to \*.

```
npm run start:dev
```

or

```
yarn start:dev
```

### Start production server:

```
npm start
```

or

```
yarn start
```

### Rest of scripts:

Check package.json for all included scripts, names should give you clue what they are doing :)

## Directory structure and basic usage

In this section I will show you how I am using this boilerplate:

default folder structure is really simple to use:

- **config** - here I am storing all the constants and the initial configurations
- **controllers** - This directory is weird, in index file I have helper that is adding all the **routes** exported from other files to the application so if you will create file foos.js it will automatically add it to route **handlers** (notice that it need to export **express** router)
- **helpers** - as name suggest here is where I store all the helpers **classes** and **functions**
- **middlewares** - all the middlewares are stored in here
- **models** - I am often using **ORMs** so in this directory I keep models
- **providers** - in this directory I am storing **connection** / **configuration** to the **external** services eg. external email service, sms service or simply connection to databases
- **schemas** - here I keep **Joi** schemas for request **validation** purposes
- **utils** - here lands all the functions that i feel wrong putting into helpers directory eg. all the sorting/filtering functions

I am often using 9 **directories** structure for big applications, if I do it I am creating **services** directory where I store all the **logic**, so the files in **controllers** directory are only calling the services and creating the endpoints(it is easier to **test** it latter).
