import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Mr. Nice', powers: "His niceness makes everyone fond of him."},
        { id: 12, name: 'Narco', powers: 'Enjoy drugs like no one else.'},
        { id: 13, name: 'Bombasto', powers: 'Monster size due to steroids usage.'},
        { id: 14, name: 'Celeritas', powers: 'Move very fast.'},
        { id: 15, name: 'Magneta', powers: 'Attract every metal towards her.'},
        { id: 16, name: 'RubberMan', powers: 'Erase pencil-written texts, bend, stretch.'},
        { id: 17, name: 'Dynama', powers: 'Generate electricity, manipulate electrical fields.'},
        { id: 18, name: 'Dr. IQ', powers: "Can temporarily change his or other people's IQ."},
        { id: 19, name: 'Magma', powers: 'Can melt rocks.'},
        { id: 20, name: 'Tornado', powers: 'Manipulate the wind, create tornados.'}
    ];
    return {heroes};
  }
}