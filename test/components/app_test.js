import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
// import CommentBox from '../../src/components/comment_box';

// Use decribe to group together similar tests
describe('Test the `App` Component', () => {



  // many it in this
  it('shows a comment box', () => {
    const component = renderComponent(App);
    expect(component.find('.comment-box')).to.exist
  });

});
