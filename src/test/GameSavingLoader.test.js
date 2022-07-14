import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('testing Object', async () => {
    const awaitGameSavingLoader = new GameSavingLoader()
    expect(await awaitGameSavingLoader.load()).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
});