import { Categories } from '@prisma/client';

export const tournaments = [
	{
		nameTournament: 'Counter-Strike Tournament August 2024',
		startDate: new Date('2024-08-01T14:23:11.438Z'),
		game: 'Counter-Strike',
		category: Categories.beginner,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			'Watch a Counter Strike: Global Offensive tournament live! Enjoy the gunfights, strategies, and passion for team play of the players who show up to provide us with this entertainment.',
		urlAvatar: 'https://example.com/stream1',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game1-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'Fortnite Tournament September 2024',
		startDate: new Date('2024-09-11T10:15:32.438Z'),
		game: 'Fortnite',
		category: Categories.advanced,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			"Watch a Fortnite tournament live! What weapons will each team get? Who will win? Who will be quick with their fingers? We invite you to watch the epic battles of Fortnite, and don't forget the dance!",
		urlAvatar: 'https://example.com/stream2',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game2-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'League of Legends Tournament October 2024',
		startDate: new Date('2024-10-21T18:27:43.438Z'),
		game: 'League of Legends',
		category: Categories.expert,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			"Watch a League of Legends tournament live! Let's see the moment when 10 players are spewing steam from their heads with the aim of beating the enemy team and getting the tournament award!",
		urlAvatar: 'https://example.com/stream3',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game3-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'Counter-Strike Tournament November 2024',
		startDate: new Date('2024-11-05T11:23:54.438Z'),
		game: 'Counter-Strike',
		category: Categories.beginner,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			'Watch a Counter Strike: Global Offensive tournament live! Enjoy the gunfights, strategies, and passion for team play of the players who show up to provide us with this entertainment.',
		urlAvatar: 'https://example.com/stream4',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game1-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'Fortnite Tournament December 2024',
		startDate: new Date('2024-12-15T09:34:05.438Z'),
		game: 'Fortnite',
		category: Categories.advanced,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			"Watch a Fortnite tournament live! What weapons will each team get? Who will win? Who will be quick with their fingers? We invite you to watch the epic battles of Fortnite, and don't forget the dance!",
		urlAvatar: 'https://example.com/stream5',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game2-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'League of Legends Tournament July 2024',
		startDate: new Date('2024-07-25T16:45:16.438Z'),
		game: 'League of Legends',
		category: Categories.expert,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			"Watch a League of Legends tournament live! Let's see the moment when 10 players are spewing steam from their heads with the aim of beating the enemy team and getting the tournament award!",
		urlAvatar: 'https://example.com/stream6',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game3-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'League of Legends Tournament August 2024',
		startDate: new Date('2024-08-05T14:56:27.438Z'),
		game: 'League of Legends',
		category: Categories.beginner,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			"Watch a League of Legends tournament live! Let's see the moment when 10 players are spewing steam from their heads with the aim of beating the enemy team and getting the tournament award!",
		urlAvatar: 'https://example.com/stream7',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game1-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'Counter-Strike Tournament September 2024',
		startDate: new Date('2024-09-15T17:07:38.438Z'),
		game: 'Counter-Strike',
		category: Categories.advanced,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			'Watch a Counter Strike: Global Offensive tournament live! Enjoy the gunfights, strategies, and passion for team play of the players who show up to provide us with this entertainment.',
		urlAvatar: 'https://example.com/stream8',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game2-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'Fortnite Tournament October 2024',
		startDate: new Date('2024-10-25T19:18:49.438Z'),
		game: 'Fortnite',
		category: Categories.expert,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			'Watch a Fortnite tournament live! What weapons will each team get? Who will win? Who will be quick with their fingers? We invite you to watch the epic battles of Fortnite, and dont forget the dance!',
		urlAvatar: 'https://example.com/stream9',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game3-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
	{
		nameTournament: 'League of Legends Tournament November 2024',
		startDate: new Date('2024-11-10T16:29:50.438Z'),
		game: 'League of Legends',
		category: Categories.beginner,
		price: 3000, // Total price calculated from awards
		awards: ['$1500', '$1000', '$500'],
		membersNumber: 5,
		description:
			'Watch a League of Legends tournament live! Let’s see the moment when 10 players are spewing steam from their heads with the aim of beating the enemy team and getting the tournament award!',
		urlAvatar: 'https://example.com/stream10',
		maxMember: 5,
		maxTeam: 4,
		organizerId: 'user2-uuid',
		gameId: 'game1-uuid',
		teams: ['team1-uuid,team2-uuid,team4-uuid,team3-uuid'],
	},
];
