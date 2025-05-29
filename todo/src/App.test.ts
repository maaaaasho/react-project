import {describe, it, expect} from 'vitest';

import App from './App';

describe('App', ()=>{
    it('should return the first elemnt if it is greater', ()=> {
        expect(App(1,2)).toBe(2);
    })
})