import { test } from "@playwright/test";
import "dotenv/config";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CandidatesPage } from "../pages/CandidatesPage";

test("user can search for an existing candidate from the Candidates page", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const candidatesPage = new CandidatesPage(page);

  const candidateName = "TestFN TestMN TestLN";

  // Login
  await loginPage.goto();

  await loginPage.login(
    process.env.ORANGEHRM_USERNAME,
    process.env.ORANGEHRM_PASSWORD,
  );

  // Verify successful navigation to Dashboard
  await dashboardPage.verifyDashboardDisplayed();

  // Navigate from Dashboard to Recruitment/Candidates
  await dashboardPage.navigateToRecruitment();

  // Verify we landed on Candidates
  await candidatesPage.verifyCandidatesPageDisplayed();

  // Search for candidate using autocomplete
  await candidatesPage.selectCandidate("test", candidateName);

  // Click Search
  await candidatesPage.search();

  // Verify candidate appears in search results
  await candidatesPage.verifyCandidateDisplayed(candidateName);
});
