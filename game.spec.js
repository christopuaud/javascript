require('./game.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });
});

describe("number of player < 7", function() {
    it("should be 6 max",function() {
      var notAWinner = false;
      var play;
      var game = new Game();

      game.add('Joueur 1');
      game.add('Joueur 2');
      game.add('Joueur 3');
      game.add('Joueur 4');
      game.add('Joueur 5');
      game.add('Joueur 6');
      game.add('Joueur 7');
     play=game.howManyPlayers()
      // Affirmation de l'élément émis
      expect(play).toBe(6)
    });

