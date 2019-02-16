//Abschlussaufgabe - Rodelhang Terminator
//Dominik Seyfried
//256734
//17.02.2019
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Abschlussaufgabe    {
    
    export class MovingObjects {
        x: number;
        y: number;
        type: string;
        
        constructor (_x: number, _y: number)  {
            this.x = _x;
            this.y = _y;
            
        }
        
        draw(): void {}
        
        move(): void {}
        
    }
}