let mapToViewPoints = require('../js/mapAreaToAllViewPoints');

describe('mapToViewPoints', function() {
    describe('mapAreaToLeftViewPoints', function() {
        it('should return all left view points', function() {
            const leftCorner = {lat: 30, lng: 40};
            const rightCorner = {lat: 35, lng: 45};
    
            const expectedLeftViewPoints = [
                {lat: 20, lng: 35},
                {lat: 25, lng: 35},
                {lat: 30, lng: 35},
                {lat: 35, lng: 35},
                {lat: 40, lng: 35},
                {lat: 45, lng: 35},
                {lat: 20, lng: 30},
                {lat: 25, lng: 30},
                {lat: 30, lng: 30},
                {lat: 35, lng: 30},
                {lat: 40, lng: 30},
                {lat: 45, lng: 30},
            ];
    
            expect(mapToViewPoints.mapAreaToLeftViewPoints(leftCorner, rightCorner)).toEqual(expectedLeftViewPoints);
        })
    });
    describe('mapAreaToRightViewPoints', function() {
        it('should return all right view points', function() {
            const leftCorner = {lat: 30, lng: 40};
            const rightCorner = {lat: 35, lng: 45};
    
            const expectedRightViewPoints = [
                {lat: 20, lng: 50},
                {lat: 25, lng: 50},
                {lat: 30, lng: 50},
                {lat: 35, lng: 50},
                {lat: 40, lng: 50},
                {lat: 45, lng: 50},
                {lat: 20, lng: 55},
                {lat: 25, lng: 55},
                {lat: 30, lng: 55},
                {lat: 35, lng: 55},
                {lat: 40, lng: 55},
                {lat: 45, lng: 55}
            ];
    
            expect(mapToViewPoints.mapAreaToRightViewPoints(leftCorner, rightCorner)).toEqual(expectedRightViewPoints);
        })
    });

    describe('mapAreaToTopViewPoints', function() {
        it('should return all top view points', function() {
            const bottomLeftCorner = {lat: 30, lng: 40};
            const topRightCorner = {lat: 35, lng: 50};
    
            const expectedTopViewPoints = [
                {lat: 40, lng: 40},
                {lat: 45, lng: 40},
                {lat: 40, lng: 45},
                {lat: 45, lng: 45},
                {lat: 40, lng: 50},
                {lat: 45, lng: 50}
            ];
    
            expect(mapToViewPoints.mapAreaToTopViewPoints(bottomLeftCorner, topRightCorner)).toEqual(expectedTopViewPoints);
        })
    });

    describe('mapAreaToBottomViewPoints', function() {
        it('should return all bottom view points', function() {
            const bottomLeftCorner = {lat: 30, lng: 40};
            const topRightCorner = {lat: 35, lng: 50};
    
            const expectedBottomViewPoints = [
                {lat: 25, lng: 40},
                {lat: 20, lng: 40},
                {lat: 25, lng: 45},
                {lat: 20, lng: 45},
                {lat: 25, lng: 50},
                {lat: 20, lng: 50}
            ];
    
            expect(mapToViewPoints.mapAreaToBottomViewPoints(bottomLeftCorner, topRightCorner)).toEqual(expectedBottomViewPoints);
        })
    });

    describe('mapAreaToViewPoints', function() {
        it('should return all view points', function() {
            const bottomLeftCorner = {lat: 30, lng: 40};
            const topRightCorner = {lat: 35, lng: 45};
    
            const expectedViewPoints = [
                {lat: 20, lng: 35},
                {lat: 25, lng: 35},
                {lat: 30, lng: 35},
                {lat: 35, lng: 35},
                {lat: 40, lng: 35},
                {lat: 45, lng: 35},
                {lat: 20, lng: 30},
                {lat: 25, lng: 30},
                {lat: 30, lng: 30},
                {lat: 35, lng: 30},
                {lat: 40, lng: 30},
                {lat: 45, lng: 30},
                {lat: 20, lng: 50},
                {lat: 25, lng: 50},
                {lat: 30, lng: 50},
                {lat: 35, lng: 50},
                {lat: 40, lng: 50},
                {lat: 45, lng: 50},
                {lat: 20, lng: 55},
                {lat: 25, lng: 55},
                {lat: 30, lng: 55},
                {lat: 35, lng: 55},
                {lat: 40, lng: 55},
                {lat: 45, lng: 55},
                {lat: 40, lng: 40},
                {lat: 45, lng: 40},
                {lat: 40, lng: 45},
                {lat: 45, lng: 45},
                {lat: 25, lng: 40},
                {lat: 20, lng: 40},
                {lat: 25, lng: 45},
                {lat: 20, lng: 45}
            ]
    
            expect(mapToViewPoints.mapAreaToViewPoints(bottomLeftCorner, topRightCorner)).toEqual(expectedViewPoints);
        })
    });
})