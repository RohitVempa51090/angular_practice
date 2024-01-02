export class WishItem
{
    constructor(public item:string, public isComplete:boolean = false)
    {
        this.item = item;
        this.isComplete = isComplete;
    }
}