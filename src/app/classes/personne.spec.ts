import { Personne } from './personne';

describe('Personne', () => {
  it('should create an instance', () => {
    expect(new Personne(1,'','')).toBeTruthy();
  });
});
