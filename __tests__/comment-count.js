import commentCount from '../comment-count';

describe('test comment count', () => {
    it('should return 2', () => {
        const result = commentCount('/* eslint-disable */');
        expect(result).toBe(2);
    });
    }
);
