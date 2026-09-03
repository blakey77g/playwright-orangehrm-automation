import { expect } from '@playwright/test';

export class CandidatesPage {

    constructor(page) {
        this.page = page;

        this.candidateNameInput = page.getByRole('textbox', {
            name: 'Type for hints...'
        });

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });
    }

    async verifyCandidatesPageDisplayed() {
        await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
    }

    async selectCandidate(searchText, candidateName) {
        await this.candidateNameInput.fill(searchText);

        const suggestion = this.page.getByRole('option', {
            name: candidateName
        }).first();

        await expect(suggestion).toBeVisible();
        await suggestion.click();
    }

    async search() {
        await this.searchButton.click();
    }

    async verifyCandidateDisplayed(candidateName) {
        const candidateRow = this.page.getByRole('row').filter({
            hasText: candidateName
        }).first();

        await expect(candidateRow).toBeVisible();
    }
}