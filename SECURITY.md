# Security Policy

## Supported Versions

Currently supported versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public issue
2. Email the maintainers directly with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

3. Allow reasonable time for a response (typically 48-72 hours)

## Security Best Practices

When using this application:

- Never commit `.env` files with sensitive data
- Use environment variables for configuration
- Keep dependencies up to date
- Use HTTPS in production
- Implement proper authentication before deploying
- Validate all user inputs
- Use a proper database instead of JSON files in production

## Known Security Limitations

This is a demo application with the following limitations:

- No authentication system
- JSON file-based storage (not secure for production)
- No input sanitization
- No rate limiting
- No CSRF protection

**Do not use this application in production without implementing proper security measures.**
