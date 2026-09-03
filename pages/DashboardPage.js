import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;

    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.recruitmentMenu = page.getByRole('link', { name: 'Recruitment' });
  }

  async verifyDashboardDisplayed() {
    await expect(this.dashboardHeading).toBeVisible();
  }

  async navigateToRecruitment() {
    await this.recruitmentMenu.click();
  }
}