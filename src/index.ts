import dog from "./dog.webp";
import wood from "./wood.webp";

function main() {
    const canvas = document.querySelector<HTMLCanvasElement>('canvas');
    const ctx = canvas?.getContext('2d');
    const image = new Image();
    image.src = dog;

    if (!canvas || !ctx) {
        throw new Error('Canvas error...');
    }

    drawImage(ctx, dog, 0, 0, canvas.width);
    drawImage(ctx, wood, 0, 250, canvas.width);
}

function drawImage(ctx: CanvasRenderingContext2D , src: string, x: number, y: number, width: number): void {
    const image = new Image();
    image.src = src;

    image.onload = () => {
        const aspectRatio = image.height / image.width;

        console.log("aspectRatio", aspectRatio);
        
        const w = width / 2;
        const h =  w * aspectRatio;
        ctx.drawImage(image, x, y, w, h);
    }
}

main()