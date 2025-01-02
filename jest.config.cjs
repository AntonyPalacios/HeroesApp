module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    globals: {
        Uint8Array: Uint8Array,
    },
}