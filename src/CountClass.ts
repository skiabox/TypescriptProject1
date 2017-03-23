/**
 * Created by administrator on 23/03/2017.
 */

export default class CountClass {

    //instance variables
    private _count: number;

    //constructor
    constructor()
    {
        this._count = 0;
    }

    //methods
    public countUp(): void
    {
        this._count ++;
    }

    public getCount(): number
    {
        return this._count;
    }
}