import { LearncirclePage } from './app.po';

describe('learncircle App', () => {
  let page: LearncirclePage;

  beforeEach(() => {
    page = new LearncirclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
