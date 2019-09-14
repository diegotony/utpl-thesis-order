import { Model } from 'mongoose';
import { Pick } from 'shared/dto/pick/pick.dto';
import { CreatePickDto } from 'shared/dto/pick/create-pick.dto';
export declare class PickService {
    private readonly pickModel;
    constructor(pickModel: Model<Pick>);
    createPick(createPickDto: CreatePickDto): Promise<Pick>;
    findPicks(): Promise<Pick[]>;
    findPick(idPick: string): Promise<Pick>;
    deletePick(idPick: string): Promise<Pick[]>;
    editPick(data: any): Promise<any>;
}
