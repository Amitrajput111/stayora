# Security Policy

## Supported versions

| Version | Supported |
|---------|-----------|
| 1.6.x | Yes |
| 1.5.x | Yes |
| < 1.5 | No |

## Reporting a vulnerability

Do **not** open a public issue. Email the maintainer with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

Expect a response within 72 hours.

## Known limitations

This is a demo/learning project. The following are intentional:

- No authentication or session management
- JSON file storage — writes don't persist on Vercel between deployments
- No CSRF protection
- No rate limiting
- Minimal input sanitization (HTML form constraints only)

Do not use in production without addressing these.
