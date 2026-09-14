# Robert King Portfolio

[![CI](https://github.com/bigkinglsu/robert-king-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/bigkinglsu/robert-king-portfolio/actions/workflows/ci.yml)

A modern full-stack engineering portfolio built to demonstrate enterprise software engineering practices.

The current frontend includes responsive Home, About, Experience, and Projects pages, built with
lazy-loaded Angular routes, accessible semantic markup, behavioral tests, and stable component
snapshots.

## Technology

- Angular
- Java 21
- Spring Boot
- PostgreSQL
- AWS
- GitHub Actions

## Goals

- Showcase technical experience
- Demonstrate clean architecture
- Practice modern Angular
- Practice cloud deployment
- Serve as a living engineering portfolio

## Frontend quality

The Angular application uses Vitest for behavioral, accessibility, and snapshot tests. Every
current component has snapshot coverage, with a global serializer that removes Angular-generated
markup and normalizes dynamic values before snapshots are compared. Pull requests and pushes to
`main` run test type-checking, the complete test suite, and a production build in GitHub Actions.

See the [Angular application README](apps/web-angular/README.md#snapshot-testing) for the snapshot
workflow and local validation commands.
