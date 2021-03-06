const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('It is a function', 
    ()=>{
       expect(wrap).to.be.a('function');
    }
    )  
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });

    it('Number of lines is equal to maxlen',()=>{
        const str='Another hello world!';
        const returnstr= wrap(str, 5);
        const newstr= returnstr.split('\n');
        const newArr= newstr.map(elem=>elem.length);
        expect(newArr).to.equal([5,5,5,5])


    })
});

