# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.3] - 2021-12-02
### Fixed
- Creating a new account object to avoid setting `sessionSelector` property on
user object.

## [0.0.2] - 2021-11-29
### Added
- `/account/select` endpoint yields `selectedSession` to state being resumed.

### Changed
- Renamed `session_selector` form field name to `selected_session`, as processed
by `/account/select` endpoint.

### Fixed
- Fixed `/account/select` endpoint to handle case when only a single user is
logged in.

## [0.0.1] - 2021-10-18

- Initial release.

[Unreleased]: https://github.com/authnomicon/account/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/authnomicon/account/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/authnomicon/account/releases/tag/v0.0.1
