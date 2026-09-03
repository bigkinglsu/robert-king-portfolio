# Architecture

Frontend

- Angular

Backend (Future)

- Spring Boot

Database (Future)

- PostgreSQL

Infrastructure (Future)

- AWS

Architecture Style

- Feature-based Angular architecture
- Page components live under `features/<feature>/pages/<page>`
- Lazy-loaded visitor-facing feature routes
- Projects feature content describes the portfolio repository and uses direct external links rather
  than runtime API requests
- Router-managed fragment navigation and scroll-position restoration
- REST API
- Clean Architecture principles

Testing

- Angular component tests run with Vitest
- Focused snapshots guard stable rendered markup
- Explicit assertions cover behavior and accessibility
- The Angular test target loads a global Vitest setup file
- A custom HTML snapshot serializer clones rendered elements, removes Angular and test-host
  metadata, normalizes approved dynamic values, and delegates the stable HTML string to Vitest
- Serializer and setup code live under `apps/web-angular/src/app/testing`
