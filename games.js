# User's list of games
games_list = [
    "10-minutes-till-dawn", "2048-cupcakes", "2048", "3d-mini-golf", "a-small-world-cup",
    "agent-walker-vs-skibidi-toilets", "among-us", "animal-arena", "armed-forces-io", "awesome-tanks-2",
    "backrooms", "bacon-may-die", "ball-dodge", "bank-robbery-2", "bank-robbery", "basket-random",
    "basketball-stars", "battle-wheels", "battleops-the-polygon-online", "big-tower-tiny-square", "bitlife",
    "blockpost", "blumgi-ball", "blumgi-bloom", "blumgi-castle", "blumgi-dragon", "blumgi-racers", "blumgi-rocket",
    "blumgi-slime", "blumgi-soccer", "bouncy-basketball", "buenos-aires", "bullet-bros", "bumper-cars-soccer",
    "burger-bounty", "burrito-bison", "candy-crush", "chicago", "chicken-merge", "choppy-orc", "classic-backgammon",
    "cluster-rush", "coloron", "cookie-clicker", "core-ball", "cow-bay", "crazy-bikes", "crazy-cars", "crossy-road",
    "csgo-clicker", "cyberpunk-resistance", "dadish-2", "dadish-3", "dadish-3d", "dadish", "day-of-meat-castle",
    "day-of-meat-radiation", "death-run-3d", "dreadhead-parkour", "drift-boss", "drive-mad", "dune", "eaglercraft",
    "economical-2", "economical", "eggy-car", "epic-shooter", "fantasy-fest", "fish-squad", "flip-bros", "four-colors",
    "funny-battle-2", "funny-battle", "funny-shooter-2", "funny-shooter", "geometry-dash-scratch", "geometry-dash",
    "getaway-shootout", "gladihoppers", "gobble", "gold-digger-fr-vr", "golorfull", "goober-world", "greece-love-odyssey",
    "grey-box-testing", "gunspin", "happy-wheels", "haunted-hood", "hawaii", "head-soccer-2023", "hefty-shaman-deluxe",
    "hide-and-smash", "horde-killer-you-vs-100", "idle-ants", "idle-breakout", "idle-farming-business", "idle-gang",
    "idle-light-city", "idle-mining-empire", "idle-money-tree", "idle-pet-business", "idle-startup-tycoon",
    "idle-toilet-tycoon", "iron-snout", "jacksmith", "just-fall-lol", "karlsont", "kiwi-clicker", "ks-2-teams",
    "level-devil", "london", "master-checkers", "master-chess", "merge-party", "merge-tycoon", "mimelet", "monaco",
    "monkey-mart", "monkeytype-lite", "monster-tracks", "moto-x3m", "murder", "n-gon", "neon-flytron-cyberpunk-racer",
    "new-super-mario-bros", "new-york", "nut-simulator", "ohh1", "olly-the-paw", "only-up-parkour", "ovo-2", "ovo-dimensions",
    "ovo", "paper-io-2", "party-toons", "penalty-shooters-2", "plinko", "poor-bunny", "poor-eddie", "popcat-classic",
    "pr0xy", "president-simulator", "push-your-luck", "rabbit-samurai-2", "rabbit-samurai", "race-survival-arena-king",
    "recoil", "retro-bowl-college", "retro-bowl", "retro-highway", "rio", "rocket-buddy", "rocket-soccer-derby",
    "rooftop-snipers-2", "rooftop-snipers", "roper", "rowdy-city-wrestling", "rusher-crusher", "sausage-flip",
    "save-the-hostages", "seoul", "shenzhen-showdown", "ski-slopes", "skibidi-bosses-vs-cameraman", "slope", "smash-karts",
    "sniper-shot", "sniper-vs-sniper", "snow-rider-3d", "soccer-random", "soccer-skills-euro-cup", "soccer-skills-world-cup",
    "soundboard", "space-thing", "space-wars-battleground", "squid-battle-simulator", "squid-shooter", "stack",
    "stick-duel-battle", "stick-fighter", "stick-merge", "stickman-bike", "stickman-climb-2", "stickman-golf",
    "stickman-hook-halloween", "stickman-hook", "super-fowlst-2", "super-tunnel-rush", "superbrawl",
    "superhot", "swerve", "swingo", "table-tennis-world-tour", "tag-2", "tag", "tanuki-sunset", "temple-of-boom",
    "the-spear-stickman", "time-shooter-2", "time-shooter-3", "tiny-fishing", "tokyo", "tomb-of-the-mask", "tube-jumpers",
    "tunnel-rush-2", "tunnel-rush", "turbo-moto-racer", "underwater", "unicycle-hero", "unicycle-legend", "vegas-queens",
    "vex-3", "vex-4", "vex-5", "vex-6", "vex-7", "vex-8", "vex-challenges", "volley-random", "watermelon-game",
    "we-become-what-we-behold", "wordle-unlimited", "yohoho-io", "you-vs-100-skibidi-toilets", "zombies-shooter-2"
]

# Shuffle the games list
import random
random.shuffle(games_list)

# Select 2-8 random games as recommended
def add_recommended_games(games):
    recommended_count = random.randint(2, 8)  # 2 to 8 recommended games
    recommended_games = []
    for _ in range(recommended_count):
        random_game = games[random.randint(0, len(games) - 1)]
        if random_game not in recommended_games:
            recommended_games.append(random_game)
    return recommended_games

recommended_games = add_recommended_games(games_list)

# Generate games.js content
games_js_code = """
const games = [
"""
# List of allowed image extensions
image_extensions = ["png", "jpg", "jpeg", "gif", "svg"]

for game in games_list:
    recommended = "🔥 Recommended" if game in recommended_games else ""
    
    # Randomly select one of the allowed extensions for each game
    image_extension = random.choice(image_extensions)
    
    games_js_code += f"""
    {{
        title: '{game.replace("-", " ").title()}',
        image: 'public/assets/images/{game}.{image_extension}',
        url: 'public/assets/fonts/{game}/',
        recommended: '{recommended}'
    }},
"""
games_js_code = games_js_code.rstrip(',') + "\n];\n"

games_js_code += """
// Function to display game cards
function displayGames() {
    const container = document.getElementById('game-cards');
    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;

        const title = document.createElement('h3');
        title.textContent = game.title;

        const link = document.createElement('a');
        link.href = game.url;
        link.textContent = 'Play Now';

        const recommended = document.createElement('span');
        recommended.textContent = game.recommended;
        recommended.classList.add('recommended');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(link);
        card.appendChild(recommended);

        container.appendChild(card);
    });
}

// Call the function to display games
displayGames();
"""


