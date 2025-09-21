# Commit Message Examples

Good commit messages are essential for maintaining a clear project history. Here are examples of effective commit messages.

## Basic Format

```
<type>: <short description>

<optional longer description>
<optional footer>
```

## Good Examples

### Feature Addition
```
feat: add user authentication system

Implements login/logout functionality with JWT tokens.
Includes password hashing and session management.

Closes #123
```

### Bug Fix
```
fix: resolve memory leak in data processing

Fixed unclosed file handles that were causing memory issues
during large file processing operations.

Fixes #456
```

### Documentation
```
docs: update installation instructions

Added Windows-specific setup steps and troubleshooting
section for common installation issues.
```

### Refactoring
```
refactor: simplify user validation logic

Extracted validation into separate utility functions
to improve readability and testability.
```

## Types of Commits

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process or auxiliary tools

## Bad Examples (to avoid)

❌ "Fixed stuff"
❌ "WIP"
❌ "Oops"
❌ "Update file.txt"
❌ "Changes"

## Tips

1. **Use the imperative mood**: "Add feature" not "Added feature"
2. **Keep the first line under 50 characters**
3. **Capitalize the first letter**
4. **Don't end with a period**
5. **Include issue numbers when relevant**
6. **Explain the "why" in the body, not just the "what"**

## Tools

Consider using:
- Git commit templates
- Conventional Commits specification
- Commitizen for guided commit messages
- Git hooks to enforce commit message format