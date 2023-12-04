import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";

export default class Game {
    engine: Engine;
    scene: Scene;
    constructor(elem: HTMLCanvasElement) {
        this.engine = new Engine(elem, true);
        this.scene = new Scene(this.engine);
    }

    setup(): void {
        this.scene.createDefaultCameraOrLight(false, true, true);
        var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);
        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());
        // TODO, camera.attachControl(canvas, true);

        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene)
        light.intensity = 0.7;

        var sphere = MeshBuilder.CreateSphere("sphere",  { diameter: 1, segments: 32 }, this.scene)
        sphere.position.y = 1;

        var ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, this.scene);
    }

    run(): void {
        this.engine.runRenderLoop(() => this.scene.render());
    }
}