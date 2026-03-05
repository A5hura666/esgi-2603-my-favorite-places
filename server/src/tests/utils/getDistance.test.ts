import {getDistance} from "../../utils/getDistance";


describe('getDistance', () => {
    it('should return 0 if points are identical', () => {
        const point = { lat: 0, lng: 0 };
        expect(getDistance(point, point)).toBeCloseTo(0);
    });

    it('should return correct distance between Paris and London', () => {
        const paris = { lat: 48.8566, lng: 2.3522 };
        const london = { lat: 51.5074, lng: -0.1278 };

        const distance = getDistance(paris, london);
        expect(distance).toBeCloseTo(343.56, 1);
    });
});