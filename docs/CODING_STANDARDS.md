# Coding Standards

## General

- Small commits
- Feature branches
- Descriptive commit messages

## Angular

- Standalone Components
- Keep visitor-facing pages in their feature's `pages` directory and lazy-load them from the router
- Signals preferred
- RxJS only when appropriate
- Smart/Dumb component separation
- Unit tests use Vitest through the Angular test runner
- Use focused snapshots for stable rendered component structure
- Pass rendered `HTMLElement` instances directly to `toMatchSnapshot()`
- Snapshot the smallest meaningful component root or section when possible
- Keep behavioral assertions for links, accessibility, and interactions
- External links that open a new tab must name that behavior for assistive technology and use a
  safe `rel` value
- Normalize framework-generated attributes and approved dynamic values only in the global Vitest
  serializer; do not duplicate cleanup in component tests
- Review snapshot diffs before accepting intentional updates

## Java

- Constructor injection
- Immutable DTOs
- Validation first
- Unit tests required

## Naming

Readable over clever.
