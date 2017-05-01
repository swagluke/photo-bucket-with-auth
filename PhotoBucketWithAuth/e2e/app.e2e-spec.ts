import { PhotoBucketWithAuthPage } from './app.po';

describe('photo-bucket-with-auth App', () => {
  let page: PhotoBucketWithAuthPage;

  beforeEach(() => {
    page = new PhotoBucketWithAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
