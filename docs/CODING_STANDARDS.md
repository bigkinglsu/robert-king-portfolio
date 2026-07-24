# Coding Standards

## General

- Small commits
- Feature branches
- Descriptive commit messages

## Angular

- Standalone Components
- Signals preferred
- RxJS only when appropriate
- Smart/Dumb component separation
- Unit tests use Vitest through the Angular test runner
- Use focused snapshots for stable rendered component structure
- Keep behavioral assertions for links, accessibility, and interactions
- Remove or normalize framework-generated and dynamic values before snapshotting
- Review snapshot diffs before accepting intentional updates

## Java

- Constructor injection
- Immutable DTOs
- Validation first
- Unit tests required

## Naming

Readable over clever.
