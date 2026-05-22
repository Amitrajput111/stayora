# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.5.x   | :white_check_mark: |
| 1.4.x   | :white_check_mark: |
| < 1.4   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public issue
2. Email the maintainer directly with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
3. Allow up to 72 hours for a response

## Security Best Practices

When using this application:

- Never commit `.env` files with sensitive data
- Use environment variables for all configuration
- Keep dependencies up to date (`npm audit`)
- Use HTTPS in production (Vercel handles this automatically)
- Implement proper authentication before deploying to production
- Validate and sanitize all user inputs
- Use a proper database instead of JSON files in production

## Known Limitations (Demo Application)

This is a learning/demo project with the following intentional limitations:

- No authentication or authorization system
- JSON file-based storage (read-only on Vercel — data does not persist between deployments)
- No input sanitization beyond HTML form constraints
- No rate limiting
- No CSRF protection

**Do not use this application in production without addressing the above limitations.**
