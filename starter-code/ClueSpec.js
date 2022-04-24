const {
  core: { describe, it, expect, jest,run },
  prettify,
} = window.jestLite;


it("1 +1 = 2",()=> expect(1+1).toBe(2));

describe('Find a random element of the array - randomSelector', () => {
  it('Defines randomSelector', () => {
    expect(typeof randomSelector).toBe('function');
  });

  it('Return undefined if the array is empty', () => {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return the element of a single value array', () => {
    expect(randomSelector(['ab'])).toBe('ab');
  });

  it('Should return an element of the array', ()=> {
    const array = ['ab', 'zz', 'zx', 'zy'];

    expect(array.indexOf(randomSelector(array))).toBeGreaterThan(-1);
  });

  it('Return a random element of the array', ()=> {
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');

    spy.mockReturnValue(0.1);
    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');

    spy.mockReturnValue(0.9);
    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});

describe('Pick a random mistery - pickMistery', ()=> {
  it('Defines pickMistery', ()=> {
    expect(typeof pickMistery).toBe('function');
  });

  it('Return an array', ()=> {
    expect(typeof pickMistery()).toEqual('object');
  });

  it('Return a non empty array', ()=> {
    expect(pickMistery().length).toBeGreaterThan(0);
  });

  it('Return an array with 3 elements', ()=> {
    expect(pickMistery().length).toEqual(3);
  });

  it('Return a killer on the first index of the array', ()=> {
    expect(charactersArray.indexOf(pickMistery()[0])).toBeGreaterThan(-1);
  });

  it('Return a weapon on the second index of the array', ()=> {
    expect(weaponsArray.indexOf(pickMistery()[1])).toBeGreaterThan(-1);
  });

  it('Return a room in the third index of the array', ()=> {
    expect(roomsArray.indexOf(pickMistery()[2])).toBeGreaterThan(-1);
  });
});

describe('Reveal the mistery - revealMistery', ()=> {
  it('Defines revealMistery', ()=> {
    expect(typeof revealMistery).toBe('function');
  });

  it('Return an array', ()=> {
    expect(typeof revealMistery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', ()=> {
    expect(revealMistery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
prettify.toHTML(run(), document.body);
