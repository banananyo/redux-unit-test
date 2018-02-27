import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = {
      comments: [
        { comment: 'Comment...', time: '1' },
        { comment: 'First comment', time: '2' },
        { comment: 'Another comment', time: '3' }
      ]
    };
    component = renderComponent(CommentList, null, props);
  });

  it('shows comment in an LI', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('Comment...');
    expect(component).to.contain('First comment');
    expect(component).to.contain('Another comment');
  });
});
