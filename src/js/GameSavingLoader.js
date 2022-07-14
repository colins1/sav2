import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  load() {
    return (async () => {
        return JSON.parse(await json(await read()));
    })();
  }
}