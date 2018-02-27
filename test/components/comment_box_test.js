import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {

    let component; // start at undefined

    // run beforeEach before every 'it' or 'describe' (block)
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });
    
    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    // describe in describe
    describe('entering some text', () => {

        // do this before every block in this describe
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('when submitted, clears the input', () => {
            // component.find('button').simulate('click');
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
    
});
