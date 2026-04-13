---
name: deploy
description: Run tests, build the production bundle, and push to the staging area.
---

# Deploy to Staging

Run the following steps in order. Stop immediately if any step fails.

1. **Run all tests** — Execute the full test suite with `npm test`. If any tests fail, report the failures and stop.
2. **Build the production bundle** — Run `npm run build`. If the build fails, report the errors and stop.
3. **Push to staging** — Run `git push origin main:staging`. If the push fails, report the error and stop.

After all steps succeed, confirm the deployment to staging was successful.
