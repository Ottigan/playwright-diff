import img from "./dog.webp";


function main() {
    const canvas = document.querySelector<HTMLCanvasElement>('canvas');
    const ctx = canvas?.getContext('2d');
    const image = new Image();
    image.src = img;

    if (!canvas || !ctx) {
        throw new Error('Canvas error...');
    }

    image.onload = () => ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

main()