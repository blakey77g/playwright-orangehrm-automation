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

  
  await loginPage.goto();
  await loginPage.login(
    process.env.ORANGEHRM_USERNAME,
    process.env.ORANGEHRM_PASSWORD,
  );

  await dashboardPage.verifyDashboardDisplayed();
  await dashboardPage.navigateToRecruitment();

  await candidatesPage.verifyCandidatesPageDisplayed();
  await candidatesPage.selectCandidate("test", candidateName);
  await candidatesPage.search();
  await candidatesPage.verifyCandidateDisplayed(candidateName);
});
