"use strict";

window.reload = function () {
    class ResponsiveImageMap {
        constructor(map, img, width) {
            this.img = img;
            this.originalWidth = width;
            this.areas = [];
    
            for (const area of map.getElementsByTagName('area')) {
                this.areas.push({
                    element: area,
                    originalCoords: area.coords.split(',')
                });
            }
    
            window.addEventListener('resize', e => this.resize(e));
            this.resize();
        }
    
        resize() {
            const ratio = this.img.offsetWidth / this.originalWidth;
    
            for (const area of this.areas) {
                const newCoords = [];
                for (const originalCoord of area.originalCoords) {
                    newCoords.push(Math.round(originalCoord * ratio));
                }
                area.element.coords = newCoords.join(',');
            }
    
            return true;
        };
    }

    var map = document.getElementById('spot-the-difference');
    var image = document.getElementById('spot-image');
    new ResponsiveImageMap(map, image, 1920);
}