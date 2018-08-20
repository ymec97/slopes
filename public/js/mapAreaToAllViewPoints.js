const maxDist = 10;
const frameSize = 5;

function mapAreaToLeftViewPoints2(bottomLeftCorner, topRightCorner) {
    let viewPoints = [];

    const bottomLeftLat = bottomLeftCorner.lat();
    const bottomLeftLng = bottomLeftCorner.lng();

    for (let i = frameSize; i <= maxDist; i += frameSize) {
        for (let j = frameSize; j <= maxDist; j+= frameSize) {
            viewPoints.push(new google.maps.LatLng({lat: bottomLeftLat + j, lng: bottomLeftLng - i}));
        }
    }

    return viewPoints;
}

function mapAreaToLeftViewPoints(bottomLeftCorner, topRightCorner) {
    let leftViewPoints = [];

    const bottomLeftLat = bottomLeftCorner.lat;
    const bottomLeftLng = bottomLeftCorner.lng;
    const topLng = topRightCorner.lng;
    const topLat = topRightCorner.lat;

    for (let i = frameSize; i <= maxDist; i += frameSize) {
        for (let j = -maxDist; j <= topLat - bottomLeftLat + maxDist; j+= frameSize) {
            leftViewPoints.push({lat: bottomLeftLat + j, lng: bottomLeftLng - i});
        }
    }

    return leftViewPoints;
}

function mapAreaToRightViewPoints(bottomLeftCorner, topRightCorner) {
    let rightViewPoints = [];

    const bottomLeftLat = bottomLeftCorner.lat;
    const bottomLeftLng = bottomLeftCorner.lng;
    const topRightLng = topRightCorner.lng;
    const topLat = topRightCorner.lat;

    for (let i = frameSize; i <= maxDist; i += frameSize) {
        for (let j = -maxDist; j <= topLat - bottomLeftLat + maxDist; j+= frameSize) {
            rightViewPoints.push({lat: bottomLeftLat + j, lng: topRightLng + i});
        }
    }

    return rightViewPoints;
}

function mapAreaToTopViewPoints(bottomLeftCorner, topRightCorner) {
    let topViewPoints = [];
    
    const topLeftLat = topRightCorner.lat;
    const topLeftLng = bottomLeftCorner.lng;
    const topRightLng = topRightCorner.lng;

    for (let i = 0; i <= maxDist && (topLeftLng + i <= topRightLng); i += frameSize) {
        for (let j = frameSize; j <= maxDist; j+= frameSize) {
            topViewPoints.push({lat: topLeftLat + j, lng: topLeftLng + i});
        }
    }

    return topViewPoints;
}

function mapAreaToBottomViewPoints(bottomLeftCorner, topRightCorner) {
    let bottomViewPoints = [];
    
    const bottomLeftLng = bottomLeftCorner.lng;
    const bottomLeftLat = bottomLeftCorner.lat;
    const bottomRightLng = topRightCorner.lng;

    for (let i = 0; i <= maxDist && (bottomLeftLng + i <= bottomRightLng); i += frameSize) {
        for (let j = frameSize; j <= maxDist; j+= frameSize) {
            bottomViewPoints.push({lat: bottomLeftLat - j, lng: bottomLeftLng + i});
        }
    }

    return bottomViewPoints;
}

function mapAreaToViewPoints(bottomLeftCorner, topRightCorner) {
    return [
            ...mapAreaToLeftViewPoints(bottomLeftCorner, topRightCorner),
            ...mapAreaToRightViewPoints(bottomLeftCorner, topRightCorner),
            ...mapAreaToTopViewPoints(bottomLeftCorner, topRightCorner),
            ...mapAreaToBottomViewPoints(bottomLeftCorner, topRightCorner)
    ];
}

module.exports = {
    mapAreaToLeftViewPoints,
    mapAreaToRightViewPoints,
    mapAreaToTopViewPoints,
    mapAreaToBottomViewPoints,
    mapAreaToViewPoints
}