describe('cookie Calamity', () => {

    let sut

    beforeEach(() => {
        sut = new autoClickers
        sut.cookieCount = 0
        sut.autoClickers = 0
        sut.autoClickerCost = 10

        sut.robots = 0
        sut.robotCost = 100
}
