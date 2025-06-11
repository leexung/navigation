jest.mock('expo-web-browser', () => ({
	openBrowserAsync: jest.fn(),
}));
jest.mock('expo-font');
jest.mock('expo-router', () => ({
	...jest.requireActual('expo-router'),
	useRouter: jest.fn(() => ({
		back: jest.fn(),
		router: {
			back: jest.fn(),
		},
		canGoBack: jest.fn(() => true),
		replace: jest.fn(),
		push: jest.fn(),
	})),
}));
