import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitEqual'
})
export class TestPipe implements PipeTransform {
  inputString!:string
  middle!:number
  transform(value: any, ...args: unknown[]): unknown {
    this.inputString=value;
    this.middle=Math.floor(this.inputString.length/2);
    if(this.inputString.length%2==0)    return this.inputString.substring(0,this.middle)+' - '+this.inputString.substring(this.middle);
    else return  this.inputString.substring(0,this.middle)+' - '+this.inputString.charAt(this.middle) +' - '+this.inputString.substring(this.middle+1);  
  }

}
