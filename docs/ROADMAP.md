# Robert King Portfolio Roadmap

## Phase 1 - Foundation

Establish the Angular architecture, application shell, routing, global design
foundation, and responsive behavior.

Status: In progress. The responsive application shell, component tests, and snapshot coverage for
all current Angular components are in place. Snapshot normalization is centralized through a global
Vitest serializer. Theme support remains.

## Phase 2 - Portfolio

Build the visitor-facing Home, About, Experience, Projects, Skills,
Certifications, and Contact features.

Status: In progress. The Home, About, Experience, and Projects pages are complete. The Experience
page presents career history and selected client impact across enterprise, cloud, and mobile
delivery. The Projects page highlights selected public repositories with accessible external links.
Primary navigation accommodates the additional feature routes across desktop and mobile layouts.

## Phase 3 - Backend

Add a Spring Boot REST API backed by PostgreSQL and packaged with Docker.

Status: Planned.

## Phase 4 - Cloud

Deploy the application to AWS with an automated CI/CD pipeline.

Status: In progress. Frontend validation now runs in GitHub Actions. AWS deployment and continuous
delivery remain.

## Target

Release v1.0 after all four phases meet their documented quality, testing,
accessibility, and deployment goals.
