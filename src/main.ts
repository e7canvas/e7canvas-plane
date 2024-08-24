import './style.css'
import { Plane } from './plane'

const canvasContainer : HTMLDivElement = document.querySelector('#canvas-container')!
const  canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
// set with and height of canvas same of container
canvas.width = canvasContainer.clientWidth;
canvas.height = canvasContainer.clientHeight;

const ctx = canvas.getContext('2d')!


let p = new Plane(canvas.width/2, canvas.height/2);
p.draw(ctx);



