# 📜 Changelog

All relevant changes to this project will be documented in this file.

This project follows the **Semantic Versioning** standard.

---

## [Unreleased]

### Added
- Initial documentation structure (`README.md` and `doc/intro.md`)

---

## [1.1.0] - 2026-04-27

### Added
- Complete integration between frontend (ClojureScript) and backend
- Endpoint for incrementing the counter via HTTP
- Display of the updated value on the frontend

### Changed
- Adjustment to frontend → backend communication using `GET`
- Organization of the state on the frontend with Reagent (`app-state`)

### Fixed
- Correction of the error `HTTP 500 - Response map is nil`
- Adjustments to the handler to ensure a valid return from the Ring
- Correction of rendering problems on the frontend (`react-dom.render`)

---

## [1.0.0] - 2026-04-25

### Added
- Backend with Ring and Compojure
- Initial route structure
- Integration with Datomic
- Schema definition (`:counter/value`)
- Function to increment the counter in the database

### Changed
- Clear separation between reading (`d/db`) and writing (`conn`) in Datomic

---

## [0.2.0] - 2026-04-21

### Added
- Automated tests for counter increment
- In-memory database setup for testing (`datomic:mem://`)
- Test structure with `clojure.test`

### Fixed
- Adjustments to the test logic to avoid state inconsistency

---

## [0.1.0] - 2026-04-20

### Added
- Project initialization with Leiningen
- Configuration of `shadow-cljs`

- Basic frontend structure with Reagent
- Initial Datomic setup (Dev)

---

## 📌 Types of changes

- **Added** → new features

- **Changed** → changes to existing features

- **Fixed** → bug fixes

- **Removed** → removed features

---

## 🚀 Note

This changelog documents the evolution of a project focused on:

- Clojure / ClojureScript
- Functional architecture
- Use of Datomic (immutability and history)