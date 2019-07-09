class Road extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.back = this.scene.add.image(0, 0, "road");
        this.add(this.back);
        this.scene.add.existing(this);

        Align.scaleToGameW(this.back, 0.5);

        this.setSize(this.back.displayWidth, game.config.height);

        this.lineGroup = this.scene.add.group();
        this.count = 0;
    } 

    makeLines() {
        this.vSpace = this.displayHeight / 10;
        for (var i = 0; i < 20; i++) {
            const line = this.scene.add.image(this.x, this.vSpace * i, "line");
            line.oy = line.y;
            this.lineGroup.add(line);
        }
    }

    moveLines() {
        this.lineGroup.children.iterate((child) => {
            child.y += this.vSpace / 20;   
        });
        this.count++;
        if (this.count == 20) {
            this.count = 0;
            this.lineGroup.children.iterate((child) => {
                child.y = child.oy;
            });
        }
    }
}