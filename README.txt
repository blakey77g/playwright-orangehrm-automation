OrangeHRM Playwright Automation Task

This project contains an automated Playwright test solution for the **Recruitment > Candidates** section of the OrangeHRM platform.

Test Coverage

The automated test covers:

Login
Navigation to Recruitment > Candidates
Candidate name search
Candidate autocomplete suggestions
Selecting a candidate
Searching for the candidate
Verifying the candidate appears in the results

## Framework

The project uses:

Playwright
JavaScript
Page Object Model (POM)
Environment variables for login credentials

Project Structure

e2e/
└── candidates.spec.js

pages/
├── LoginPage.js
├── DashboardPage.js
└── CandidatesPage.js

Credentials

Login credentials are stored locally using environment variables and are **not included in the repository**.

The `.env` file is excluded from source control using `.gitignore`.
