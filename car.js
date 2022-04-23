AFRAME.registerComponent("car-model", {
    schema: {
        model: { type: "string", default: "../assests/scene.gltf" }
    },
    init: function () {
        this.el.setAttribute("gltf-model", this.data.model)
        const position = { x: 0, y: 0, z: 0 };
        const rotation = { x: 0, y: -100, z: 0 };
        const scale ={x:0.5, y:0.5, z:0.5}
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", scale)
    }
})