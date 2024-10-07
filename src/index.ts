function main() {
    const canvas = document.querySelector<HTMLCanvasElement>('canvas');
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) {
        throw new Error('Canvas error...');
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

main();