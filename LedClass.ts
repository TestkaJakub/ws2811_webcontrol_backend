import { Color } from "./ColorClass.ts";

class Led {
    /**
     * @param state True or False
     * @param brightness 0-255
     * @param color Color object
     **/

    public state: boolean;
    public brightness: number;
    public color: Color;

    constructor(state: boolean, brightness: number, color: Color) {
        this.state = state;
        this.brightness = brightness;
        this.color = color;
    }

    updateState(newState: boolean) {
        this.state = newState;
    }

    updateBrightness(newBrightness: number) {
        this.brightness = newBrightness;
    }

    updateColor(newColor: Color) {
        this.color = newColor;
    }
}

export { Led };