import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.genereteUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    // const firstId = service.genereteUniqueIdWithPrefix('app');
    // const secondId = service.genereteUniqueIdWithPrefix('app');
    // expect(firstId).not.toBe(secondId);
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.genereteUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should returb the number of generatedIds when called`, () => {
    service.genereteUniqueIdWithPrefix('app');
    service.genereteUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

   it(`${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
    const emptyValues = [ null, undefined, ''];
    emptyValues.forEach(emptyValue => {
      expect(() => service.genereteUniqueIdWithPrefix(emptyValue)).withContext(`Empty Value: ${emptyValue}`).toThrow();
    });
    //  expect(() => service.genereteUniqueIdWithPrefix(null)).toThrow();
    //  expect(() => service.genereteUniqueIdWithPrefix(undefined)).toThrow();
    //  expect(() => service.genereteUniqueIdWithPrefix("")).toThrow();
   });
});
